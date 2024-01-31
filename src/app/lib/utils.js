import mongoose, {Error} from "mongoose";

export const connectToDB = async ()=> {
    const connection = {}

    console.log(process.env.MONGO);
    try{
        if( connection.isConnected ) return;
        const db = await mongoose.connect("");
        connection.isConnected = db.connections[0].readyState;
    }catch(error){
        throw new Error(error);
    }
};
