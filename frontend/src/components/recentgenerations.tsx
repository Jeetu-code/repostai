import {FaClockRotateLeft} from "react-icons/fa6";
import GenResult from "./generatorresult.tsx";


export default function RecentGenerations(){
let platform="Linkedin Post";
let content = `1/ Built my first CI/CD pipeline today and wired it up to an AWS EC2 instance.

2/ The goal:
push code → run tests/build → auto-deploy to EC2

3/ Biggest win: no more SSH-ing into the server to manually deploy.

4/ Deploys are now faster, consistent, and way less error-prone.

5/ Next up: rollbacks + better monitoring so releases feel safer (and I can actually sleep).

6/ If you’re learning CI/CD too—what are you using?
GitHub Actions, GitLab CI, Jenkins, CircleCI, or something else?`;

return(
<>
<div className="w-auto mx-auto text-sm max-w-sm sm:px-2 sm:max-w-2xl  lg:max-w-4xl">
<div className=" border-b-2 border-gray-300    font-bold text-2xl">
<div className="mb-3 flex gap-3 items-center"><FaClockRotateLeft className="text-gray-500 h-4 w-auto"/> Recently Generated</div></div>
<div className=" lg:grid lg:grid-cols-2 gap-3 ">
{ [...Array(5)].map((_,i)=><GenResult  key={i} socialplatform={platform} post={content} />)

}
</div>
</div>
</>
);
}
