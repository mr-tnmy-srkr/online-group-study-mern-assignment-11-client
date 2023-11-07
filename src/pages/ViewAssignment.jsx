import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";


const ViewAssignment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { id } = useParams();
  const { title, thumbnail, marks, date, difficultyLevel, description } = data;
  useEffect(() => {
    axios
      .get(`/assignments/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axios, id]);

  return (
    <>
      {loading ? (
        <div className="h-[90vh] flex justify-center items-center">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="py-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between relative border p-6">
            <div className="flex-1 w-full relative">
              <img
                className="w-full md:w-[35vw] max-h-[50vh]"
                src={thumbnail}
                alt=""
              />
              <div className="text-center  absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2">
                <button className="btn button bg-[#fc9f11]">
                  Take Assignment
                </button>
              </div>
            </div>
            <div className="flex-1  border-2 ">
              <div className=" h-[50vh] overflow-auto p-5 ">
                <p>Level : {difficultyLevel}</p>
                <h1>{title}</h1>
                <p>{marks}</p>
                <p>Due Date : {date}</p>
                <p>{description}</p>
              </div>
            </div>
            <div className="absolute -mt-2 left-[90%] md:left-[95%]  lg:left-[97%] top-0 transform -translate-x-1/2 -translate-y-1/2">
              <button className="btn text-white  btn-outline bg-red-500 ">
              Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewAssignment;
