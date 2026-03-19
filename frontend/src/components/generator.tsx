import {MessageSquare,ArrowRight} from "lucide-react";
import {LuSparkles} from "react-icons/lu";
import GenResult from "./generatorresult.tsx";
import {useState,useEffect} from "react";
import {BsExclamationCircle} from "react-icons/bs";
type names ="Instagram Caption" | "X Thread" | "Linkedin Post";
import {HashLink as Link} from "react-router-hash-link";
import  {Apirequest} from "../api/fetch.ts";


export default function Generator(){
const [clicked,setClicked] = useState(false);
const [content,setContent]=useState<string>("");
const [draftcontent,setdraftContent]=useState<string>("");
const [draftplatform,setdraftPlatform] = useState<names>("Linkedin Post");
const [platform,setPlatform] = useState<names>("Linkedin Post");
const [limit,setlimit]=useState<number>(3);
const [isempty,setisEmpty] = useState(false);
const isvalid=limit===0;
function onhandledata(){
if(draftcontent === ""){
setisEmpty(true);
return;
}
setisEmpty(false);
setContent(draftcontent)

setPlatform(draftplatform)
setClicked(true);
setlimit(limit-1);
}

useEffect(()=>{
if(!content)return;
const response= async ()=>{
try{
const returneddata = await Apirequest({endpoint:"/",content:content});
console.log(returneddata);
}catch(err){console.log(err)};
}
response();
},[clicked]);


return(
<>
<div className="mt-20 w-70 sm:w-xl md:w-3xl lg:w-4xl  mx-auto  bg-white rounded-2xl h-auto px-9 shadow-xl">

{isvalid ?<div className="text-xs sm:text-sm text-balance bg-red-100 py-5 px-3 border-2 border-red-200 rounded-2xl mb-8">

<div className="flex  text-red-500 font-bold justify-between">
<span className="flex gap-4 items-center"><BsExclamationCircle className="h-5 w-auto "/> Limit hit!</span>
<span className="underline"><Link to="/#pricing">Upgrade</Link></span>
</div>
<span className="ml-9 flex flex-col md:flex-row md:gap-1  text-red-500 ">You've reached your limit of 3 free generations per day.<span className="font-bold"> Upgrade for unlimited!</span></span>
</div>:""}
<div className="flex flex-col gap-3 sm:flex-row    justify-between text-xs ">
<div className="flex gap-2 font-bold  text-sm"><MessageSquare className=" w-5 h-auto text-gray-400 "/> Your original content</div>
<div className="text-gray-500">{limit} free left today</div>
</div>

<div className="  rounded-2xl border-2 border-gray-300 mt-4">
<textarea className="bg-gray-100 w-full outline-offset-1  outline-blue-sky-500   rounded-2xl resize-none px-3 py-3 " placeholder={"Paste your blog post, article, or raw thoughts here..."}  rows={9} cols={5} onChange={(e)=>setdraftContent(e.target.value)} />
</div>
{isempty && (<div className="text-red-500">Content cannot be empty</div>)}
<div className="mt-5">
<span>Target Platform</span>

{/* platforms */}
<div className="mt-1  flex  flex-col sm:flex-row justify-between   items-center">
<select  className="h-10 sm:h-15  sm:w-2/5 px-3 cursor-pointer bg-gray-300 rounded-xl border-r-8 border-gray-300 outline-transparent transition-all duration-300 ease-in-out hover:outline-3 hover:outline-indigo-800 "  onChange={(e)=>setdraftPlatform(e.target.value as names)}>
<option value="LinkidIn Post">LinkidIn Post</option>
<option value="X Thread">X Thread</option>
<option value="Instagram Caption">Instagram Caption</option>
</select>
<button onClick={onhandledata} disabled={isvalid} className={` ${!isvalid?"cursor-pointer shadow-xl/20  bg-indigo-800 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-101 hover:shadow-xl/30 active:scale-100 active:translate-y-1 active:shadow-xl/10":"cursor-not-allowed bg-indigo-500 "}  text-sm sm:text-lg flex my-3 text-white font-bold rounded-xl gap-2 w-full  sm:w-3/5 items-center justify-center   h-10 sm:h-15 sm:ml-3   `}>Generate Magic <ArrowRight/></button> </div>
</div>




</div>
{ clicked && (
<div className="mt-10 w-full h-auto md:w-3xl lg:w-4xl    ">
<span className="flex text-2xl gap-2 font-bold items-center ">
<LuSparkles className="text-blue-800"/> Your Result</span>


<GenResult socialplatform={platform} post={content} />
</div>
)}
</>

);
}
