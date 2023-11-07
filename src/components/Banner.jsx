import Lottie from "lottie-react";
 import animation from "../assets/animations/Animation - 1699238965247.json"
import { Link } from "react-router-dom";
const Banner = () => {
    return (
       <div className="flex items-center pt-10 md:pt-0 justify-center md:justify-evenly bg-slate-300 flex-col md:flex-row">
       <div>
        <h1 className="flex-1 text-5xl font-semibold text-center">
            This is the new way <br /> <span className="text-[#FC9F11]">
            to learn
            </span>
            <br />
            <Link to="/assignments"><button className="mt-5 btn bg-[#fc9f11] button.active button border-none">Assignments</button></Link>
        </h1>
       </div>
         <div className="max-w-[500px] flex-1">
            <Lottie animationData={animation} loop={true} />
        </div>
       </div>
    );
};

export default Banner;