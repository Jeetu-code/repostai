const baseUrl:string= "http://localhost:5678/webhook-test/4a30c090-c706-49bc-a4b5-7d13bf29173d"

type requestprop={
endpoint:string;
content:string;
}
export async function Apirequest({endpoint,content}:requestprop){
const result = await fetch(`${baseUrl+endpoint}`,{method:"POST",body:JSON.stringify({content})});
return result;
}
