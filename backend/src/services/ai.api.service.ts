import Groq from "groq-sdk";

type dataprop ={
post:string;
platform:string;
}

export const userContent =async(data:dataprop)=>{

const groq = new Groq({apiKey:process.env.GROQ_API_KEY});
const userdata = await groq.chat.completions.create({
messages:[{
role:"user",
content:` 
1. You are a professional social media post creator. 
2. You anslyse the content and make relevent and authentic post according to social platform.
3. You keep in mind the length of content,type of content and other necessary rules specific to platform.

platform  :  ${data.platform} for user template text or context data which is :  ${data.post}`,
},],
model: "openai/gpt-oss-20b",
});
const parsedresponse = userdata.choices[0]?.message?.content || "";
console.log(parsedresponse);
return parsedresponse;
}
