import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <div className="flex gap-2">
              <div className="flex-1">
                <button
                  type="button"
                  className="btn bg-[#fc9f11] w-full flex justify-between items-center cursor-pointer "
                >
                  Google
                  <FcGoogle className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1">
                <button
                  type="button"
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