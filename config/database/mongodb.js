import mongoose from "mongoose";
//import { DB_URI, NODE_ENV } from "../env.js";
import { DB_URI, NODE_ENV } from "../env.js";
import { Db } from "mongodb";

if(!DB_URI){
    throw new Error('please define the MONGODB_URI environmental variable inside .env<development/production>.local');
}

const connectToDatabase= async ()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected to database in ${NODE_ENV} mode`)
    }catch(error){
        console.error('Error connecting to database: ', error);
        process.exit(1);
    }
}

export default connectToDatabase;
