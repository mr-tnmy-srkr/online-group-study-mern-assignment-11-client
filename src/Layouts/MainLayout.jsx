




import PropTypes from "prop-types";
import Logo from "../components/Logo";
import NavItems from "../components/NavItems";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";
import DarkMode from "../components/DarkMode";

import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const MainLayout = ({ children }) => {
  const { user, logOut } = useAuth();

  return (
    <div className="">
      

    

const App = () => (
  <Marquee>
  {user && (
        <marquee className="text-center text-white bg-blue-400 py-2 font-medium">
          🙂🙂Welcome Mr. {user.displayName} 🙋‍♂️. Now You Can Create,Take,Submit
          and Review Your Assignment🙂🙂
        </marquee>
      )}
  </Marquee>
);

export default App;


      <div className="drawer -mt-1">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300 dark:bg-gray-400">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Logo></Logo>
            </div>

            <div className="lg:hidden">
              {/* avatar fot small and medium device */}
              {user && (
                <div className="dropdown dropdown-end ml-4">
                  <label tabIndex={0} className="cursor-pointer">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <p
                      // to="/user"
                      className="px-4 py-2 hover:bg-base-300 rounded-lg text-lg font-semibold"
                    >
                      Profile
                    </p>
                    <Link
                      to="/my-assignment"
                      className="px-4 py-2 hover:bg-base-300 rounded-lg text-lg font-semibold"
                    >
                    My Assignments
                    </Link>

                    <div
                      onClick={logOut}
                      className="cursor-pointer btn mt-4 text-white bg-red-500 px-4 py-2 text-lg font-semibold hover:bg-base-300 rounded-lg"
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:hidden">
              <DarkMode></DarkMode>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex items-center ">
                {/* Navbar menu content here */}
                <NavItems></NavItems>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {children}
          {/* footer */}
          <div>
            <Footer></Footer>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 menu-vertical space-y-4">
            {/* Sidebar content here */}
            <Sidebar></Sidebar>
          </ul>
        </div>
      </div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
