import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from "./config/connectDB.js";
import salesRoute from './routes/sales.js';
import errorMiddleware from './middleware/errors.js';
dotenv.config({
    path: "./config/config.env"
});


// Connecting to database
connectDatabase();

const app=express();
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("Server run successfull");
})
// routes
app.use('/api',salesRoute);


if (process.env.NODE_ENV === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
    });
  }
  



//using error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`server run on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
    }else{
        console.log(err);
    }
})