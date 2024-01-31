import mongoose, {Error} from "mongoose";

export const connectToDB = async ()=> {
    const connection = {}

    console.log(process.env.MONGO);
    try{
        if( connection.isConnected ) return;
        const db = await mongoose.connect("mongodb+srv://dev:dev@cluster0.uy8tdhk.mongodb.net/dashboard?retryWrites=true&w=majority");
        connection.isConnected = db.connections[0].readyState;
    }catch(error){
        throw new Error(error);
    }
};