import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Lottie from "lottie-react";
import createAnimation from "../assets/animations/Animation - 1699267425557.json";
import useAuth from "../hooks/useAuth";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import ParseDate from "../utils/ParseDate";


const UpdateAssignment = () => {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState();
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // console.log(id);
  
  const { user } = useAuth();
  
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
  

  const handleUpdateAssignment = (e) => {
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
      date:startDate || new Date(oldDate),
      difficultyLevel,
      description,
      user: user.email,
    });
  };

  const { mutate } = useMutation({
    mutationKey: ["updateAssignment"],
    mutationFn: async (assignmentData) => {
      return axios.put(`/assignments/update-assignment/${id}`, assignmentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["updateAssignment"] });
      toast.success("Assignment update successful");
      navigate("/assignments");
    },
  });


 // Set the minimum and maximum selectable date to November 11, 2023
 const minSelectableDate = new Date(new Date());
 const maxSelectableDate = new Date("2023-12-31");
 const oldDate = ParseDate(data?.date)

// console.log(oldDate);

  return (
    <div>
     <Helmet>
        <title>Update Assignment</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
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
        <div className="my-10">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] flex items-center justify-center mx-auto">
              <Lottie
                className=""
                animationData={createAnimation}
                loop={true}
              />
            </div>
            <div className="flex-1  card max-w-md shadow-2xl bg-base-100 mx-auto dark:bg-[#D1D5DB]">
              <form className="card-body" onSubmit={handleUpdateAssignment}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={data?.title}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Thumbnail</span>
                  </label>
                  <input
                    type="text"
                    name="thumbnail"
                    placeholder="Image Link"
                    className="input input-bordered"
                    defaultValue={data?.thumbnail}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Marks</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Marks"
                    name="marks"
                    className="input input-bordered"
                    defaultValue={data?.marks}
                    max={100}
                    min={1}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Due Date</span>
                  </label>
                {/*   <input
                    type="date"
                    name="date"
                    defaultValue={data?.date}
                    className="input input-bordered"
                    required
                  /> */}
                  <DatePicker
                  className="input input-bordered w-full required"
                  // here new Date(oldDate) is worked as default value
                  selected={startDate || new Date(oldDate)}
                  minDate={minSelectableDate}
                  maxDate={maxSelectableDate}
                  onChange={(date) => setStartDate(date)}
                />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Difficulty Level</span>
                  </label>
                  <select
                    name="difficulty"
                    defaultValue={data?.difficultyLevel}
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
                    <span className="label-text font-bold">Description</span>
                  </label>
                  <textarea
                    rows={12}
                    className="input input-bordered"
                    name="description"
                    placeholder="Description"
                    defaultValue={data?.description}
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-2">
                  <button
                    type="submit"
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
