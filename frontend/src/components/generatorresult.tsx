import {FiLinkedin,FiTwitter,FiInstagram,FiCopy} from "react-icons/fi";
import {LuCopyCheck} from "react-icons/lu";
import {useState} from "react";
interface generatedpostcard{
post:string;
socialplatform:string;
};

export default function GenResult({post,socialplatform}:generatedpostcard){
const [isCopied,setIsCopied] = useState(false);
async function onhandleclick(){
await navigator.clipboard.writeText(post);
setIsCopied(true);
setTimeout(()=>{setIsCopied(false)},2000);
}

localStorage.setItem("jello","hello");
function switchedplatform(){
switch(socialplatform){
	case "X Thread":
	    return  <FiTwitter className="size-9 h-8 p-1 rounded-lg w-auto bg-gray-300 text-blue-500 "/>
	case "Linkedin Post":
	    return  <FiLinkedin className="size-9 h-8 p-1 rounded-lg w-auto bg-gray-300 text-blue-500 "/>
	case "Instagram Caption":
	    return  <FiInstagram className="size-9 h-8 p-1 rounded-lg w-auto bg-gray-300 text-blue-500 "/>
}
}
return(
<>
<div className="h-auto">
{/* Generated Result */}
<div className="bg-white rounded-2xl  p-8 mt-4">
<div className="flex justify-between items-center">
<div className="flex mb-3 gap-2 items-center"> 
{
switchedplatform()
}
<div className="flex flex-col ">
<span className="font-bold">{socialplatform}</span>
<span>{
new Date() .getSeconds() < 60?"less then a minute ago":`${new Date() .getMinutes() }minutes ago`}</span>
</div>
</div>
<span className={`flex items-center bg-gray-200 rounded-lg px-3 cursor-pointer transition duration-200 hover:scale-105 hover:bg-gray-300 font-medium gap-2 active:scale-97 text-sm h-8 w-auto`} onClick={onhandleclick}>
{isCopied?<LuCopyCheck/>:<FiCopy/>}
{isCopied?"Copied!":"Copy"}
</span>
</div>

<div className="flex flex-row">
<pre className=" text-wrap w-full bg-gray-200 rounded-lg p-4  flex"  >{post}</pre>
</div>

</div>


</div>
</>
);
}
