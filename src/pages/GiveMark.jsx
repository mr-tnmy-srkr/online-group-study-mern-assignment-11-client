import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import PdfComp from "../utils/PdfComp";

import pdfForm from "../assets/pdf.pdf"
import toast from "react-hot-toast";

const GiveMark = () => {
  const axios = useAxios();

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate()

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["submitted-assignments"],
    queryFn: async () => {
      const res = await axios.get(`/user/submitted-assignments/${id}`);
      return res;
    },
  });
  //   console.log(parseInt(data?.data.marks));

const handleGiveMark = async(e)=>{
e.preventDefault()
const form = e.target
const mark = form.mark.value
const feedback = form.feedback.value
// console.log(mark, feedback);
try {
    const response = await axios.put(`/assignments/marking-assignment/${id}`, {
      myMark: mark,
      feedback,
      status:"success"
    });
    console.log(response.data);
    if(response.data.modifiedCount>0){
        toast.success("Assignment checked successfully");
        navigate(-1)
    }
  } catch (error) {
    console.log(error);
  }
  

}

  return (
    <div className="">
      {isLoading ? (
        ""
      ) : (
        <div className="flex justify-between border-4 min-h-[70vh] ">
          <div className="flex-1 border px-4">
            <h1 className=" text-3xl py-5 text-[#fc9f11] underline text-center">Examinee Section</h1>
            <h2><span className="text-xl font-semibold">Examinee Pdf Link : </span>

  

            <br />
            <Link className="text-lg ">{data.data.link}</Link></h2>
            <br />
            <h2><span className="text-xl font-semibold ">Examinee Note : </span> <br /><span className="text-lg "> {data.data.note} </span></h2>
         </div>
          <div className="flex-1 border text-center space-y-5 px-4">
            <h1 className="text-3xl py-5 text-[#fc9f11] underline">Examiner Section</h1>
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
            <button  className="btn btn-block bg-[#fc9f11]">Give Mark</button>
          </form>
          </div>
        </div>
      )}
        <PdfComp pdf={pdfForm}></PdfComp>
      
    </div>
  );
};

export default GiveMark;
