import {BsStarFill} from "react-icons/bs";
import {LuQuote} from "react-icons/lu";

export default function Testimonials(){

const testimonial=[
	{id:1,logo:"AR",name:"Alex Rivera",work:"Content Creator",message:`"RepostAI turned my 2000-word blog post into a viral X thread in seconds. It's a game changer."`},
	{id:2,logo:"SC",name:"Sarah Chen",work:"Marketing Director",message:`"The LinkedIn posts generated are surprisingly human. Saves our team hours every week."`},
	{id:3,logo:"JW",name:"James Wilson",work:"Solopreneur",message:`"I finally have a consistent social presence without the burnout. Worth every penny."`},
];


return(
<>
<div>

<div className="flex flex-col items-center">
<span className="text-3xl font-bold ">Loved by creators</span>
<span className="mt-4 text-xl text-indigo-500 flex justify-center gap-1 ">{[...Array(5)].map((_,i:number)=><BsStarFill key={i}/>)}</span>
</div>

{/* testimonial cards */}
<div className="mt-15 flex flex-col  lg:flex-row px-9  gap-9  justify-center ">
{ testimonial.map((cards)=><div key={cards.id} className=" relative  rounded-xl h-auto bg-white  w-fit p-5">
<LuQuote className=" absolute z-8 right-6 top-4 h-7 text-gray-300 w-auto"/>
<p className="w-60 text-gray-500 z-10">{cards.message}</p>
<div className="flex items-center  mt-5">
<span className="rounded-full p-3  text-indigo-800 font-bold bg-gray-300">{cards.logo}</span>
<div className="flex flex-col ml-2">
<span className="font-bold">{cards.name}</span>
<span className="text-gray-500 text-xs">{cards.work}</span>
</div>
</div>
</div>
)
}
</div>

</div>
</>
);
}
