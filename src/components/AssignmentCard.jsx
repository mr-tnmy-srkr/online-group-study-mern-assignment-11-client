import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ParseDate from "../utils/ParseDate";

const AssignmentCard = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail,
    marks,
    date,
    difficultyLevel,
    description,
  } = assignment || {};
  //   console.log(Object.keys(assignment).join());
  return (
    <div className="">
      <div className="relative flex-col group max-w-2xl rounded-3xl border border-gray-100 bg-gray-200 p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900 dark:shadow-none sm:p-8">
        {/* <p style={{clipPath: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 13% 50%, 0% 0%)}} className="absolute font-bold text-xl bg-yellow-400 px-3 py-2 ">{difficultyLevel}</p> */}
        <p
          style={{
            clipPath:
              "polygon(75% 0%, 89% 50%, 75% 100%, 0% 100%, 9% 50%, 0% 0%)",
          }}
          className="absolute font-bold text-xl bg-yellow-400 px-8 py-2"
        >
          {difficultyLevel}
        </p>
        <div className="  overflow-hidden rounded-xl shadow-xl shadow-amber-600/40 transition duration-500 group-hover:scale-105 group-hover:shadow-md">
          <img
            src={thumbnail}
            alt="Assignment Image"
            loading="lazy"
            // width="1000"
            // height="690"
            className="h-72 w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col  mt-6">
          <h3 className="text-2xl font-semibold text-amber-800 ">
            {title ? title.slice(0, 25) : "No title available"}
            {/* {title || "No title available"} */}
          </h3>
          <h3 className="text-lg font-semibold text-amber-800">
            Due Date : {ParseDate(date) || "N/A"}
          </h3>
          <h3 className="text-lg font-semibold text-amber-800">
            Total Marks : {marks || "N/A"}
          </h3>

          <p className="mt-6 mb-4 text-gray-900 min-h-[100px] dark:text-gray-300">
            {description?.slice(0, 125)}...
            <Link
              to={`/assignments/view-assignment/${_id}`}
              className={`${
                description?.length < 125 && "hidden"
              } m-1 animate-pulse rounded-md bg-[#fc9f11] px-2 text-white font-light no-underline shadow-md shadow-amber-500/40 hover:animate-none hover:text-black hover:shadow-amber-500/80`}
            >
              Read more
            </Link>
          </p>
        </div>
        <div className="flex justify-between">
          <Link to={`/assignments/view-assignment/${_id}`}>
            <button className="btn button button.active bg-[#fc9f11]">
              View Assignment
            </button>
          </Link>
          <Link to={`/assignments/update-assignment/${_id}`}>
            <button className="btn button button.active bg-[#fc9f11]">
              Update Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
AssignmentCard.propTypes = {
  assignment: PropTypes.object.isRequired,
};
export default AssignmentCard;
