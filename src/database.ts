import mongoose,{ ConnectOptions } from 'mongoose';
import config from './config';

(async () => {

    try{
        const mongooseOptions: ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        const {MONGO_DATABASE,MONGO_HOST} = config;
    
        const db = await mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_DATABASE}`,mongooseOptions);
        console.log("Base de datos conectada a: ", db.connection.name);
    }catch(error){
        console.log(error);
    }
})();