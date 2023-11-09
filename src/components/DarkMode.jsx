import {  BiSun } from "react-icons/bi";
import {  MdDarkMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

export default function DarkMode() {
  const { changeTheme, mode } = useTheme();

  return (
    <div className="ml-4">
       <div>
        <button
          onClick={changeTheme}
          className={` btn btn-circle btn-outline hover:bg-white hover:text-black dark:border-white dark:text-black dark:hover:bg-black dark:hover:text-white`}
        >
          <span className="hover:-rotate-90">
            {mode === "dark" ? <BiSun size={30} /> : <MdDarkMode size={30} />}
          </span>
        </button>
      </div>
    </div>
  );
}
