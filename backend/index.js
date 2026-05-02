import express from "express";
import { config } from "dotenv";
const app = express();
config();
const PORT = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    try {
        console.log(`${req.ip}`)
        res.json({
            hello:  "world"
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT,()=>{
    try {
        console.log(`Server is listening to the ${PORT}`);
    } catch (error) {
        console.log(`Error is the :  ${error}`);
    }
})