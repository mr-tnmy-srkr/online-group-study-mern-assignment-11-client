import { Link, useNavigate } from "react-router-dom";
import LoginAnimation from "../assets/animations/Animation - 1699247001720.json";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  console.log(userName, email, photoUrl, password, confirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      toast.error("Confirm password should be same with password");
      return;
    }

    const toastId = toast.loading("Creating user ...");

    try {
      const user = await createUser(email, password);
      const updateUser = await updateUserProfile(userName, photoUrl);
      console.log(user.user);
      if (user.user) {
        toast.success("User Created Successfully", { id: toastId });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200 flex justify-evenly items-center p-10 mx-auto">
        <div className="card flex-1 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered"
                onInput={(e) => setUserName(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="photo"
                placeholder="Image link"
                className="input input-bordered"
                onInput={(e) => setPhotoUrl(e.target.value)}
                autoComplete="on"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onInput={(e) => setEmail(e.target.value)}
                autoComplete="on"
                required
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
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
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
                className="text-[#fc9f11] font-bold hover:underline cursor-pointer "
              >
                Login
              </Link>
            </p>
            <div className="form-control mt-2">
              <button type="submit" className="btn  button bg-[#fc9f11]">
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
