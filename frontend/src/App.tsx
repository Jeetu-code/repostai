import {Layers,Menu} from "lucide-react";
import {LuSparkles,LuCopyright} from "react-icons/lu";
import {useState} from "react";
import Generator from "./components/generator.tsx";
import Pricing from "./components/pricingtemplate.tsx";
import Testimonials from "./components/testimoniolsTemplate.tsx";
import RecentGenerations from "./components/recentgenerations.tsx";
import {HashLink as Link} from "react-router-hash-link";
function App() {
const [isopen,setIsOpen]=useState(false);


const menulist=[{id:1,name:"Generator",to:"/#generate"},{id:2,name:"Pricing",to:"/#pricing"},{id:3,name:"Testimonials",to:"/#testimonial"},];
  return (
    <>
    <div className="min-h-screen pb-24 bg-linear-to-b from-white from-10% via-purple-100 via-50% to-white  ">
    <nav className="relative p-5  flex items-center place-content-between">
    <div className="flex text-xl bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent items-center gap-2  font-extrabold">
    <div className="text-white bg-linear-to-b from-blue-500 to-purple-500  rounded-xl px-2 py-2">
	<Layers />
	</div>
	RepostAI
</div>
<ul className=" hidden sm:flex gap-4 text-gray-500 ">
<li className="hover:text-black cursor-pointer transiteion duration-100 ease-in-out h-fit"><Link to="/#generate">Generator</Link></li>
<li className="hover:text-black cursor-pointer transition duration-200 ease-in-out h-fit"><Link to="/#pricing">Pricing</Link></li>
<li className="hover:text-black cursor-pointer h-fit"><Link to="/#testimonial">Testimonials</Link></li>
</ul>

{/* mobile hamburger sign*/}
<button className=" sm:hidden p-2 rounded-md transition-all duration-150 ease-in-out active:bg-gray-200 " onClick={()=>{setIsOpen(!isopen)}}>
<Menu className="pointer-events-none"/>
</button>

    </nav>

{/* mobile menubar */}
<div className={` absolute  z-50  max-w-full h-full bg-white   sm:hidden flex  items-start justify-center  px-5   ${isopen?"":"hidden"}`}>
<div className={` w-full  sm:hidden flex  justify-center bg-white px-3 rounded-xl  ${isopen?"":"hidden"}`}>
<ul className=" w-xl py-2  px-2">
{
isopen && (
menulist.map((list)=>( <li  className={` text-center my-2 rounded-md h-8 flex items-center justify-center transition-all duration-100 ease-in-out bg-gray-100 text-black active:bg-gray-200  `} key={list.id} ><Link to={list.to} onClick={()=>setIsOpen(false)}>{list.name}</Link></li>
))
)
}
</ul>
</div>
</div>
{/*hero section*/}
   <div className=" flex  flex-col">
	<div className="p-2    mx-auto flex flex-col items-center">
<div className=" max-w-50 text-center font-bold text-xs sm:max-w-80 sm:text-base   bg-linear-to-r from-gray-200 via-w to-gray-200 mb-5 rounded-full py-1 px-3   border border-gray-300">
<span className="flex gap-2  justify-center bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent items-center ">
<LuSparkles className="text-indigo-500 w-5 h-auto"/> AI-Powered Content Engine</span></div>

<div className=" text-xl max-w-50 sm:text-4xl sm:max-w-90 sm:text-pretty md:text-5xl md:max-w-lg text-center">
<div className="font-extrabold">Repurpose content for social in <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">seconds</span></div>
</div>

<div className="mt-4 text-gray-500 text-center text-balance  max-w-70 sm:max-w-xl "><span>Stop starting from scratch. Paste your blog post, newsletter, or rough thoughts and let our AI instantly format it for your favorite platforms.</span></div>

{/* contentGenerator */}
<div id="generate" className="">
<Generator />
</div>


{/* Pricing section */}
<div id="pricing" className="mt-45 w-full  ">
<div className="mb-8  flex flex-col items-center">
<div className="mb-2 text-center font-bold text-3xl sm:text-4xl">Simple, transparent pricing</div>
<div className="text-sm sm:text-lg text-gray-600">Choose the plan that's rignt for your content needs</div>
</div>

<div className="mt-20  flex flex-col items-center md:flex-row md:justify-center gap-8">
<Pricing offerprop ="Free"/>
<Pricing offerprop = "Paid"/>
</div>
</div>

{/* Testimonial section*/}
<div id="testimonial" className="mt-40">
<Testimonials/>
</div>

{/* Recent Generations */}
<div className="mt-30 ">
<RecentGenerations/>
</div>
	</div>

<footer className="bg-white h-fit w-auto flex justify-center mt-40 border-t-2 border-gray-200">
<div className="flex flex-col  items-center justify-center md:gap-25 md:flex md:flex-row ">
<div className=" h-20 flex items-center gap-2 justify-center text-gray-600 font-bold"><Layers className="text-gray-500"/> RepostAI</div>
<div className="h-20 flex items-center justify-center gap-2"><LuCopyright/> 2026 RepostAI, All rights reserved.</div>
<div className=" h-20 flex items-center justify-center gap-4 ">
<span className="cursor-pointer transition duration-200 text-medium text-gray-600 hover:text-black">Twitter</span>
<span className="cursor-pointer transition duration-200 text-medium text-gray-600 hover:text-black">Privacy</span>
<span className="cursor-pointer transition duration-200 text-medium text-gray-600 hover:text-black">Terms</span>
</div>
</div>
</footer>

   </div> 
</div>
</>
  )
}

export default App
