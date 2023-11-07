import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail,
    marks,
    date,
    DifficultyLevel,
    description,
    user,
  } = assignment || {};
  //   console.log(Object.keys(assignment).join());
  return (
    <div className="">
      <div className=" flex-col group max-w-2xl rounded-3xl border border-gray-100 bg-gray-200 p-6 shadow-2xl  sm:p-8">
        <p>{DifficultyLevel}</p>
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
            {title || "No title available"}
          </h3>
          <h3 className="text-lg font-semibold text-amber-800">
            Marks : {date || "N/A"}
          </h3>
          <h3 className="text-lg font-semibold text-amber-800">
            Due Date : {marks || "N/A"}
          </h3>

          <p className="mt-6 mb-4 text-gray-900 min-h-[100px]">
            {description.slice(0, 125)}...
            <Link
              className={`${
                description.length < 125 && "hidden"
              } m-1 animate-pulse rounded-md bg-[#fc9f11] px-2 text-white font-light no-underline shadow-md shadow-amber-500/40 hover:animate-none hover:text-black hover:shadow-amber-500/80`}
            >
              Read more
            </Link>
          </p>
        </div>
        <div className="flex justify-between">
          <button className="btn button button.active bg-[#fc9f11]">
            View Assignment
          </button>
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
