import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import createAnimation from "../assets/animations/Animation - 1699267425557.json";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Helmet } from "react-helmet";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  // console.log(user.email);
  const axios = useAxios();
  const navigate = useNavigate();

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const marks = form.marks.value;
    // const date = form.date.value;
    const difficultyLevel = form.difficulty.value;
    const description = form.description.value;
    // console.log(title, thumbnail, marks, date, difficultyLevel, description);
    mutate({
      title,
      thumbnail,
      marks,
      date: startDate,
      difficultyLevel,
      description,
      user: user.email,
    });
  };

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

  // Set the minimum and maximum selectable date to November 11, 2023
  const minSelectableDate = new Date(new Date());
  const maxSelectableDate = new Date("2023-12-31");

  return (
    <div>
     <Helmet>
        <title>Create Assignment</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
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
            <form className="card-body" onSubmit={handleCreateAssignment}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="text"
                  placeholder="Image Link"
                  name="thumbnail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Marks</span>
                </label>
                <input
                  type="number"
                  placeholder="Marks"
                  name="marks"
                  className="input input-bordered"
                  max={100}
                  min={1}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Date</span>
                </label>
                {/*  <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                /> */}
                <DatePicker
                  className="input input-bordered w-full required"
                  selected={startDate}
                  minDate={minSelectableDate}
                  maxDate={maxSelectableDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Difficulty Level</span>
                </label>
                <select
                  name="difficulty"
                  className="input input-bordered"
                  required
                >
                  <option value="">Select a Level</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  rows={12}
                  className="input input-bordered"
                  name="description"
                  placeholder="Description"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-2">
                <button
                  type="submit"
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
