import logo from "../assets/images/Logo.png"
const Logo = () => {
    return (
        <div className="flex justify-center items-center gap-2">
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="font-bold text-2xl">Study <span className="text-orange-500">Buzz</span></h1>
        </div>
    );
};

export default Logo;