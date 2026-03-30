import express from "express";
import type {Request,Response} from "express";
import dotenv from "dotenv";
import route from "./routes/ai.api.route.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT ;
app.use(express.json());
app.use(cors({
	origin:process.env.FRONTEND_API,
	methods:["GET","POST","PUT","DELETE"],
	allowedHeaders:["Content-Type","Authorization"],
	credentials:true
}));
app.use("/",route);
app.get("/",(req:Request,res:Response)=>{
res.status(200).json({message:"success",data:"Hello world"});
});



app.listen(port,()=>{console.log(`server running on port ${port}`);});
