import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginAnimation from "../assets/animations/Animation - 1699247001720.json";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import SocialLogin from "../components/SocialLogin";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user,signIn, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxios()

  // console.log(email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");

    try {
      const currentUser = await signIn(email, password);
      // console.log(currentUser);
      // console.log(currentUser.user.email);
      

        const res = await axios.post("/auth/access-token", {
          email: currentUser.user.email,
        });
        // console.log(res);
      
       /*  axios.post("/auth/logOut",{  email: user.user.email,})
          .then((res) => console.log(res.data));
      */
  
        toast.success("Logged in successful", { id: toastId });
        navigate(location?.state ? location.state : "/");
 
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-evenly items-center p-10 mx-auto w-full">
     <Helmet>
        <title>Study Buzz - Login</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="card flex-1 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="✉️ Email"
              className="input input-bordered w-full"
              onInput={(e) => setEmail(e.target.value)}
              required
              autoComplete="on"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
               type={showPassword ? "text" : "password"}
              placeholder="🔑 Password"
              className="input input-bordered"
              autoComplete="on"
              required
              onInput={(e) => setPassword(e.target.value)}
            />
              <span
                onClick={() => setShowPassword(!showPassword)}
                // onMouseUp={() => setShowPassword(false)}
                // onMouseLeave={() => setShowPassword(false)}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <BiShow size={25} />
                )}
              </span>
          </div>
          <p className="text-center text-sm">
            Don&apos;t have an account ?{" "}
            <Link
              to="/signup"
              className=" font-bold hover:underline cursor-pointer text-[#fc9f11]"
            >
              Sign Up
            </Link>
          </p>
          <div className="form-control mt-2">
            <button type="submit" className="btn button bg-[#fc9f11]">
              Login
            </button>
          </div>
          <div className="divider ">Or, Continue With</div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
      <div className="flex-1 max-w-[400px] hidden md:block">
        <Lottie animationData={LoginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;
