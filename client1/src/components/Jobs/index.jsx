import Job from "./Job";
import {React} from "react";
const Jobs = () => {
     const getJobs = async () => {
        const response = await fetch("http://localhost:5000/job",
            {
                method: 'GET',
            })
        const jobs = await response.json();
        return jobs;
        // jobs=jobs.map((job) => { <Job job={job}></Job> });
        }
    return(<>
   {/* <div value={getJobs().then((res)=>{res.json()}).then(jobs=>{jobs.map((job) => { <Job job={job}></Job> })})}
    ></div> */}
    </>)
}
export default Jobs;
// 1 גישה לסרבר לקבל משרות
// 2 מאפ שמחזיר משרה <Misra misra={misra}>