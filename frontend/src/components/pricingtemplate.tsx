import {BsCurrencyDollar,BsCheckLg} from "react-icons/bs";
interface offertype{
offerprop:string;
};

export default function Pricing({offerprop}:offertype){
const freeoffers=[
	{id:1,offer:"3 generations per day"},
	{id:2,offer:"3 social platforms"},
	{id:3,offer:"Standard generation speed"},
];
const premiumoffers=[
	{id:1,offer:"Unlimited generations"},
	{id:2,offer:"No wait times"},
	{id:3,offer:"Priority AI processing"},
	{id:4,offer:"Future platform updates"},
]
return(
<>
<div className={`relative ${offerprop === "Free"? "flex flex-col gap-2  bg-white max-w-sm sm:w-sm h-auto p-8 rounded-3xl ":"flex flex-col gap-2  bg-white max-w-sm sm:w-sm  h-auto p-9 rounded-3xl border-2 border-indigo-700"}`}>
{offerprop === "Free"?"":(
<div className="w-full flex justify-center">
<div className=" absolute -top-4 rounded-xl bg-indigo-700 text-white flex justify-center font-bold w-fit px-2 py-1"> Most Popular </div>
</div>
)}
<span className="font-bold text-xl">{offerprop === "Free"?"Free":"Premium"}</span>
<span className="flex font-extrabold traking-wide text-4xl mb-3 items-center"><BsCurrencyDollar /><div>{offerprop === "Free"?0:9}<sub className=" ml-1 text-gray-500 font-medium text-lg ">/mo</sub></div></span>
<div className="h-19 w-auto">
{offerprop === "Free"?freeoffers.map((offers)=>(
<div key={offers.id} className=" flex flex-row gap-2 items-center"><BsCheckLg className="text-blue-500"/> {offers.offer}</div>)):premiumoffers.map((offers)=>(
<div key={offers.id} className=" flex flex-row gap-2 items-center"><BsCheckLg className="text-blue-500"/> {offers.offer}</div>
))
}
</div>
<button className={`${offerprop==="Free"?"mt-8 h-13 border  border-gray-300 rounded-lg":"mt-8 h-13 border  border-indigo-700 rounded-lg shadow-lg bg-indigo-700 transition duration-200 hover:bg-indigo-600 text-white active:scale-99 active:bg-indigo-700 cursor-pointer"}`}><span>{offerprop === "Free"?"Current Plan":"Upgrade Now"}</span></button>
</div>
</>
);
}
