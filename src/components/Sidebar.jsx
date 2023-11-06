import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { user, logOut } = useAuth();

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
        <NavLink
          onClick={logOut}
          className=
               "btn  btn-sm btn-ghost border-none text-black hover:bg-orange-600"
        >
          Logout
        </NavLink>
      )}
    </>
  );
  return NavItems;
};

export default Sidebar;
