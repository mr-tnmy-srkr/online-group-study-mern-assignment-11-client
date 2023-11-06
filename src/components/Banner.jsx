import Lottie from "lottie-react";
 import animation from "../assets/animations/Animation - 1699238965247.json"
const Banner = () => {
    return (
        <div className="max-w-[500px]">
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default Banner;