import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import createAnimation from "../assets/animations/Animation - 1699267425557.json";
import DatePicker from "react-datepicker";

const CreateAssignment = () => {
  const { user } = useAuth();
  // console.log(user.email);
  // console.log(auth.currentUser.email);
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [marks, setMarks] = useState("");
  const [date, setDate] = useState("");
  const [DifficultyLevel, setDifficultyLevel] = useState("");
  const [description, setDescription] = useState("");

  console.log(title, thumbnail, marks, date, DifficultyLevel, description);

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
                  placeholder="Description"
                  onInput={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-control mt-2">
                <button
                  type="button"
                  // onClick={() =>
                  //   mutate({
                  //     customerName,
                  //     email,
                  //     date,
                  //     timeSlot,
                  //     address,
                  //     service: service?.data?.name,
                  //     status: "pending",
                  //   })
                  // }
                  className="btn btn-primary"
                >
                  Book
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
