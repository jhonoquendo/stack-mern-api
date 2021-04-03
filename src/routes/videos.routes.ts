import {Router} from 'express';

const router = Router();
import * as videoFunc from './videos.controller';

router.get('/videos', videoFunc.getVideos);
router.get('/video/:id', videoFunc.getVideo);
router.post('/videos', videoFunc.createVideo);
router.delete('/video/:id', videoFunc.deleteVideo);
router.put('/video/:id', videoFunc.updateVideo);

export default router;

