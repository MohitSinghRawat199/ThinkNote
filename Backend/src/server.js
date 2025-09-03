import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import connectDb from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
const app = express();
// const express = require("express")
dotenv.config();
app.use(express.json());



// app.use((req,_,next)=>{
//     console.log(`Req mothod is ${req.method} & Req URL is ${req.url}`);
//     next();
// });


app.use(rateLimiter);
app.use("/api/notes",notesRoutes);

connectDb().then(()=>{
   app.listen(process.env.PORT,()=>{
    console.log("server started 5001");
});
})

