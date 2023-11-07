import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import createAnimation from "../assets/animations/Animation - 1699267425557.json";
import DatePicker from "react-datepicker";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const { user } = useAuth();
  console.log(user.email);
  // const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [marks, setMarks] = useState("");
  const [date, setDate] = useState("");
  const [DifficultyLevel, setDifficultyLevel] = useState("Easy");
  const [description, setDescription] = useState("");
  const axios = useAxios();
  const navigate = useNavigate();

  console.log(title, thumbnail, marks, date, DifficultyLevel, description);

  const { mutate } = useMutation({
    mutationKey: ["assignment"],
    mutationFn: async (assignmentData) => {
      return axios.post("/user/create-assignment", assignmentData);
    },
    onSuccess: () => {
      toast.success("Assignment creation successful");
      navigate("/assignments");
    },
  });

  return (
    <div>
      <div className="my-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center mx-auto">
            <Lottie
              className="  "
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
                      user: user.email,
                    })
                  }
                  className="btn button button.active bg-[#fc9f11]"
                >
                  Create Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
