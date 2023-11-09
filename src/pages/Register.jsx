import { Link, useNavigate } from "react-router-dom";
import LoginAnimation from "../assets/animations/Animation - 1699247001720.json";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  // console.log(userName, email, photoUrl, password, confirmPassword);

  const handleRegister = async (e) => {
    e.preventDefault();

    //password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one uppercase character!");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password should have at least one special character!");
      return;
    } else if (password !== confirmPassword) {
      return toast.error("Confirm password should be same as password!");
    }

    const toastId = toast.loading("Creating user ...");

    try {
      const user = await createUser(email, password);
      const updateUser = await updateUserProfile(userName, photoUrl);
      // console.log(user.user);
      const res = await axios.post("/auth/access-token", {
        email: user.user.email,
      });
      // console.log(res);
      toast.success("User Created Successfully", { id: toastId });
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div>
     <Helmet>
        <title>Study Buzz - Signup</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="min-h-screen bg-base-200 flex justify-evenly items-center p-10 mx-auto dark:bg-gray-700">
        <div className="card flex-1 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 dark:bg-gray-400">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="name"
                placeholder="✍️ Name"
                className="input input-bordered"
                onInput={(e) => setUserName(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo url</span>
              </label>
              <input
                type="photo"
                placeholder="📷 Image link"
                className="input input-bordered"
                onInput={(e) => setPhotoUrl(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="✉️ Email"
                className="input input-bordered"
                onInput={(e) => setEmail(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold">Password</span>
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
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <BiShow size={25} />
                )}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="🔑 Confirm Password"
                className="input input-bordered"
                autoComplete="on"
                required
                onInput={(e) => setConfirmPassword(e.target.value)}
              />
              
            </div>
            <p className="text-center text-sm">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-[#fc9f11] font-bold hover:underline cursor-pointer text-xl dark:text-blue-800"
              >
                Login
              </Link>
            </p>
            <div className="form-control mt-2">
              <button type="submit" className="btn  button bg-[#fc9f11">
                Sign up
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
    </div>
  );
};

export default Register;
