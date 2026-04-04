import dotenv from 'dotenv';
import connectDB from './Backend/src/config/database.js';
import app from './Backend/src/app.js';

dotenv.config({
    path:'./.env'
});

const startServer=async()=>{

    try{
        await connectDB();
        app.on("error", (error)=>{
            console.log("error", error);
            throw error;
        });
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`server is running on ${process.env.PORT}`);
        });
    }
    catch(error){
        console.log("db connection failed", error);
    }
}
startServer();