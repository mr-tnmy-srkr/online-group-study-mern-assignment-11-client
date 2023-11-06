
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../assets/animations/Animation - 1699266029470.json"

export default function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);
 

  return (
    <div
      id="error-page"
      className="min-h-[100vh] flex justify-center items-center text-center font-bold text-2xl custom_class flex-col md:flex-row px-10 bg-slate-300"
    >
    <div>
    <Lottie animationData={errorAnimation} loop={true} />
    </div>
      <div>
        {error.status === 404 || (
          <div className="text-black">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="mb-8">
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
              <button className="btn button bg-[#fc9f11] text-white capitalize">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
        {error.status === 404 && (
          <div className="text-black">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h3>404 page {error.statusText || error.message}</h3>
            <p className="mt-8"></p>
            <Link to="/">
              <button className="btn button bg-[#fc9f11] text-white capitalize">
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
