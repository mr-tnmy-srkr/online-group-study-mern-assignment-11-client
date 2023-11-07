import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";

const ViewAssignment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { id } = useParams();
  const { user } = useAuth();
  // console.log(user.email);
  const { _id, title, thumbnail, marks, date, difficultyLevel, description } =
    data;
  const navigate = useNavigate();
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

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`/user/delete-assignment/${id}`);
    console.log(res.data);

    if (res.data.deletedCount > 0) {
      toast.success("Assignment deleted successfully");
      navigate(-1);
    } else {
      toast.error("This Assignment is not created by you");
    }
  };

  const handleSubmitAssignment = async(e) => {
    e.preventDefault();
    // console.log(id);
    const form = e.target;
    const link = form.link.value;
    const note = form.note.value;
    // console.log(link, note);
   const submittedData = {
      link,
      note,
      status: "pending",
      user: user.email,
      title,
      thumbnail,
      marks,
      date: new Date(),
      difficultyLevel,
    }

    try {
      const res = await axios.post("/user/submit-assignment", submittedData);
      console.log(res);
  if(res.data){
        toast.success("Assignment submission successful");
        form.reset()
        document.getElementById("my_modal_5").close();
  }
    } catch (error) {
      toast.error(error.message);
    }

  };


  /* const { mutate } = useMutation({
    mutationKey: ["assignment"],
    mutationFn: async (submittedAssignmentData) => {
      return axios.post("/user/submit-assignment", submittedAssignmentData);
    },
    onSuccess: () => {
      toast.success("Assignment creation successful");
      document.getElementById("my_modal_5").close();
    },
  });  */

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
            wrapperClassName=""
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
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn button bg-[#fc9f11]"
                  type="button"
                >
                  Take Assignment
                </button>
                {/* modal dialog */}
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle px-4"
                >
                  <div className="modal-box ">
                    <h3 className="font-bold text-lg mb-5">
                      Please submit Your Assignment link
                    </h3>
                    <form action="" onSubmit={handleSubmitAssignment} className="space-y-5">
                      <input
                        type="text"
                        name="link"
                        placeholder="Pdf Link"
                        className="input input-bordered input-warning w-full max-w-xs"
                        required
                      />
                      <textarea
                        className="textarea textarea-warning w-full max-w-xs"
                        name="note"
                        placeholder="Quick Note"
                        required
                      ></textarea>
                      <br />
                      <button type="submit" className="btn  btn-warning">
                        Submit Assignment
                      </button>
                    </form>
                    <div className="modal-action">
                      <form>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-smd  btn-circle  absolute right-2  top-2">
                          <ImCross></ImCross>
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
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
              <button
                onClick={() => handleDelete(_id)}
                className="btn text-white  btn-outline bg-red-500 "
              >
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
