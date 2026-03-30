
import type {Request,Response} from "express";
import {userContent} from "../services/ai.api.service.js";


export const Content=async(req:Request,res:Response)=>{
try{
const data = req.body;
const response =  await userContent(data); 
res.status(200).json({message:"success",airesponse:response });
}catch(err){console.log(err);}
}
