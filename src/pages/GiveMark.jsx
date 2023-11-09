import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import toast from "react-hot-toast";
import ShowPdf from "../components/ShowPdf";
import ModalComp from "../components/ModalComp";

const GiveMark = () => {
  const axios = useAxios();

  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["submitted-assignments"],
    queryFn: async () => {
      const res = await axios.get(`/user/submitted-assignments/${id}`);
      return res;
    },
  });
  //   console.log(parseInt(data?.data.marks));

  const handleGiveMark = async (e) => {
    e.preventDefault();
    const form = e.target;
    const mark = form.mark.value;
    const feedback = form.feedback.value;
    // console.log(mark, feedback);
    try {
      const response = await axios.put(
        `/assignments/marking-assignment/${id}`,
        {
          myMark: mark,
          feedback,
          status: "completed",
        }
      );
      // console.log(response.data);
      if (response.data.modifiedCount > 0) {
        toast.success("Assignment checked successfully");
        navigate(-1);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-2 md:px-0">
      {isLoading ? (
        ""
      ) : (
        <div className="flex justify-between lg:border-4 min-h-[70vh] flex-col gap-5 md:gap-0 my-8  lg:flex-row">
          <div className="flex-1 lg:border px-4">
            <h1 className=" text-3xl py-5 text-[#fc9f11] underline text-center">
              Examinee Section
            </h1>
            <h2>
              <span className="text-xl font-semibold">Assignment Title :</span>

              <br />
              <Link className="text-lg ">{data.data.title}</Link>
            </h2>
            <br />
            <h2>
              <span className="text-xl font-semibold">Total Marks :</span>

              <Link className="text-lg "> {data.data.marks}</Link>
            </h2>
            <br />
            <h2 className="flex items-center">
              <span className="text-xl font-semibold mr-2">
                {`Assignment's Pdf Link : `}
              </span>
                <span>
                  <ModalComp></ModalComp>
                </span>
            </h2>

            <br />
            <p className="text-lg ">{data.data.link}</p>
            <br />

            <h2>
              <span className="text-xl font-semibold ">Examinee Note : </span>
              <br />
              <span className="text-lg "> {data.data.note} </span>
            </h2>
          </div>
          <div className="flex-1 lg:border text-center space-y-5 px-4">
            <h1 className="text-3xl py-5 text-[#fc9f11] underline">
              Examiner Section
            </h1>
            <form action="" onSubmit={handleGiveMark} className="space-y-5">
              <input
                type="number"
                placeholder="Give Mark"
                name="mark"
                min={0}
                max={parseInt(data.data.marks)}
                className="input input-bordered input-warning w-full "
                required
              />

              <br />
              <textarea
                className="textarea textarea-warning w-full"
                name="feedback"
                placeholder="Examiner Feedback"
                required
              ></textarea>
              <button className="btn btn-block bg-[#fc9f11]">Give Mark</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiveMark;
