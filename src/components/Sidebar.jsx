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
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
            : "btn btn-ghost btn-sm text-lg"
        }
      >
      🏠  Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          isActive
            ? "btn  btn-sm bg-[#FC9F11] border-none text-white hover:bg-orange-600 text-lg"
            : "btn btn-ghost btn-sm text-lg"
        }
      >
       🖼  Assignments
      </NavLink>

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
          📝  Submitted Assignments
          </NavLink>
        </>
      )}

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
        <NavLink
          onClick={logOut}
          className=
               "btn  btn-sm btn-ghost border-none text-black hover:bg-orange-600 text-lg"
        >
        ❕  Logout
        </NavLink>
      )}
    </>
  );
  return NavItems;
};

export default Sidebar;
