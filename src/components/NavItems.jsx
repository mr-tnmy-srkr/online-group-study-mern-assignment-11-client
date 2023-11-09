import { Link, NavLink } from "react-router-dom";
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
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
            : "btn btn-ghost btn-sm text-lg"
        }
      >
       🏠 Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          isActive
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
            : "btn btn-ghost btn-sm text-lg"
        }
      >
      🖼 Assignments
      </NavLink>

      {!user && (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
                : "btn btn-ghost btn-sm text-lg"
            }
          >
          🔑  Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
                : "btn btn-ghost btn-sm text-lg"
            }
          >
          🔐  Signup
          </NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink
            to="/create-assignment"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
                : "btn btn-ghost btn-sm text-lg"
            }
          >
          ✍️  Create Assignment
          </NavLink>
        
          <NavLink
            to="/my-assignment"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
                : "btn btn-ghost btn-sm text-lg"
            }
          >
          🖼️  My Assignments
          </NavLink>
          <NavLink
            to="/submitted-assignment"
            className={({ isActive }) =>
              isActive
                ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
                : "btn btn-ghost btn-sm text-lg"
            }
          >
          📝   Submitted Assignments
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
            <p
              // to="/user"
              className="px-4 py-2 hover:bg-base-300 rounded-lg text-lg font-semibold"
            >
              Profile
            </p>
            <NavLink
              to="/my-assignment"
              className="px-4 py-2 hover:bg-base-300 rounded-lg text-lg font-semibold"
            >
              My Assignment
            </NavLink>

            <div
              onClick={logOut}
              className="cursor-pointer mt-3 btn text-white bg-red-500 px-4 py-2 hover:bg-base-300 rounded-lg text-lg font-semibold"
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
