import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import LoginAnimation from "../assets/animations/Animation - 1699247001720.json";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, logOut } = useAuth();
  console.log(email, password);

  return (
    <div className="min-h-screen bg-base-200 flex justify-evenly items-center p-10 mx-auto">
      <div className="card flex-1 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="eEmail"
              className="input input-bordered"
              onKeyUp={(e) => setEmail(e.target.value)}
              required
              autoComplete="on"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              autoComplete="on"
              required
              onKeyUp={(e) => setPassword(e.target.value)}
            />
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
