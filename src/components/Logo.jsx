import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
const Logo = () => {
  return (
    <Link to="/" className="flex justify-center items-center gap-2">
      <img className="w-[40px]" src={logo} alt="" />
      <h1 className="font-bold text-2xl">
        Study <span className="text-[#FC9F11]">Buzz</span>
      </h1>
    </Link>
  );
};

export default Logo;
