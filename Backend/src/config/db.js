import mongoose from "mongoose"

const connectDb = async() =>{
    try{
         const conn = await mongoose.connect(process.env.DB_URL);
         console.log("DataBase connected");
         return conn;
    }
    catch(error)
    {
    console.log("DataBase not connected"+error);
    }
}

export default connectDb;