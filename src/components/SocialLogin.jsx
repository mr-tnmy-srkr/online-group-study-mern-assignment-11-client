import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const axios = useAxios()

  const handleSocialLogin = async (media) => {
    const toastId = toast.loading("Logging in ...");
    try {
      const user = await media()
      console.log("see",user);
      const res = await axios.post("/auth/access-token", {
        email: user.user.email,
      });
      console.log(res);
    
        toast.success("Logged in successful", { id: toastId });
        navigate(location?.state ? location.state : '/')
    
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <div className="flex-1">
          <button
            type="button"
            onClick={() => handleSocialLogin(googleLogin)}
            className="btn bg-[#fc9f11] w-full flex justify-between items-center cursor-pointer "
          >
            Google
            <FcGoogle className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1">
          <button
            type="button"
            onClick={() => handleSocialLogin(githubLogin)}
            className="btn bg-[#fc9f11] w-full flex justify-between items-center cursor-pointer "
          >
            Github
            <BsGithub className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
