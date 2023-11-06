import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavItems = () => {
  const { user, logOut } = useAuth();
// console.log(user);
  const NavItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600"
            : "btn btn-ghost btn-sm "
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          isActive
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600"
            : "btn btn-ghost btn-sm "
        }
      >
        Assignments
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600"
            : "btn btn-ghost btn-sm"
        }
      >
        About
      </NavLink>

      {!user && (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600"
                : "btn btn-ghost btn-sm"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600"
                : "btn btn-ghost btn-sm"
            }
          >
            Signup
          </NavLink>
        </>
      )}

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
            <NavLink
              // to="/user"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Profile
            </NavLink>
            <NavLink
              // to="/user/orders"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Orders
            </NavLink>

            <div
              onClick={logOut}
              className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
  return NavItems;
};

export default NavItems;
