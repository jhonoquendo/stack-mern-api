import {RequestHandler} from 'express';
import Video from './Videos';

export const getVideos: RequestHandler = async (req,res) => {
    try{
        const videos = await Video.find();
        res.json(videos);
    }catch(error){
        res.json({error});
    }
};

export const getVideo: RequestHandler = async (req,res) => {
    
    const video = await Video.findById(req.params.id);
    if(video) {
        return res.json(video);
    } 
    return res.status(204).json({message:"Video no encontrado"}); 
};

export const createVideo: RequestHandler = async (req,res) => {
    const videoFound = await Video.findOne({url: req.body.url});
    if(videoFound){
        return res.status(301).json({message: "The url ya existe"});
    }
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
};

export const updateVideo: RequestHandler = async (req,res) => {
    const video = await Video.findByIdAndUpdate(req.params.id,req.body);
    res.json(video);
};

export const deleteVideo: RequestHandler = async (req,res) => {
    const video = await Video.findByIdAndDelete(req.params.id);
    if(!video)  return res.status(204).json({message:"Video no encontrado"}); 
    return res.json(video);
};