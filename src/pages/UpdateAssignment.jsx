import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Lottie from "lottie-react";
import createAnimation from "../assets/animations/Animation - 1699267425557.json";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";

const UpdateAssignment = () => {
  const axios = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const { user } = useAuth();


  const getAssignment = async () => {
    const res = await axios.get(`/assignments/${id}`);
    return res;
  };

  const { data: assignment, isLoading } = useQuery({
    queryKey: ["assignment"],
    queryFn: getAssignment,
  });


  // console.log(user.email);
  // const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState(`${assignment?.data?.title}`);
  const [thumbnail, setThumbnail] = useState(`${assignment?.data?.thumbnail}`);
  const [marks, setMarks] = useState(`${assignment?.data?.marks}`);
  const [date, setDate] = useState(`${assignment?.data?.date}`);
  const [DifficultyLevel, setDifficultyLevel] = useState(`${assignment?.data?.DifficultyLevel}`);
  const [description, setDescription] = useState(`${assignment?.data?.description}`);
  const queryClient = useQueryClient();

/*   const getAssignment = async () => {
    const res = await axios.get(`/assignments/${id}`);
    return res;
  };

  const { data: assignment, isLoading } = useQuery({
    queryKey: ["assignment"],
    queryFn: getAssignment,
  }); */

  // console.log(assignment.data);

  const { mutate } = useMutation({
    mutationKey: ["assignment"],
    mutationFn: async (assignmentData) => {
      return axios.put(`/assignments/update-assignment/${id}`, assignmentData);
    },
    onSuccess: () => {
      toast.success("Assignment update successful");
      // queryClient.invalidateQueries({ queryKey: ["assignment"] });
      navigate("/assignments");
    },
  });

  return (
    <div>
      {isLoading ? (
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
        <div className="my-10">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center mx-auto">
              <Lottie
                className=""
                animationData={createAnimation}
                loop={true}
              />
            </div>
            <div className="flex-1  card max-w-md shadow-2xl bg-base-100 mx-auto">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    defaultValue={assignment?.data?.title}
                    className="input input-bordered"
                    required
                    onInput={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Thumbnail</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image Link"
                    className="input input-bordered"
                    defaultValue={assignment?.data?.thumbnail}
                    required
                    onInput={(e) => setThumbnail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Marks</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="input input-bordered"
                    defaultValue={assignment?.data?.marks}
                    max={100}
                    min={1}
                    required
                    onInput={(e) => setMarks(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Date</span>
                  </label>
                  <input
                    type="date"
                    defaultValue={assignment?.data?.date}
                    className="input input-bordered"
                    required
                    onInput={(e) => setDate(e.target.value)}
                  />
                  {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Difficulty Level</span>
                  </label>
                  <select
                    className="input input-bordered"
                    onChange={(e) => setDifficultyLevel(e.target.value)}
                    defaultValue={assignment?.data?.DifficultyLevel}
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    rows={12}
                    className="input input-bordered"
                    placeholder="Description"
                    defaultValue={assignment?.data?.description}
                    required
                    onInput={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-control mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      mutate({
                        title,
                        thumbnail,
                        marks,
                        date,
                        DifficultyLevel,
                        description,
                        //   user : user.email
                      })
                    }
                    className="btn button button.active bg-[#fc9f11]"
                  >
                    Update Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAssignment;
