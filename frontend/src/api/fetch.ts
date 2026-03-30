const baseUrl= import.meta.env.VITE_API_URL;

type requestprop={
post:string;
platform:string;
}
export async function Apirequest({post,platform}:requestprop){
const result = await fetch(`${baseUrl}`,{method:"POST",body:JSON.stringify({post:post,platform:platform}),headers:{"Content-Type":"Application/json"}});
return result;
}
