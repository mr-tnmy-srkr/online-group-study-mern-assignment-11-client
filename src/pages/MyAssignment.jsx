import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyAssignment = () => {
  // /api/v1/user/submitted-assignments
  const axios = useAxios();
  const { user } = useAuth();
  // console.log(user.email);
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["booking", user],
    queryFn: async () => {
      const email = user.email;
      //   console.log(email);
      const res = await axios.get(`/user/my-assignments?email=${email}`);
      return res;
    },
  });
    // console.log(data.data.length);

  return (
    <>
     <Helmet>
        <title>My Assignments</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      {isFetching ? (
        ""
      ) : (
        <div className=" md:px-0 w-full sm:p-4 text-gray-100 mb-5 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold leadi text-black text-center dark:text-gray-400">
            Examinee : {user.displayName}
          </h2>
          <div className="w-[98vw] lg:w-full mx-auto border-4  overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup></colgroup>
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-3">Serial No.</th>
                  <th className="p-3">Assignment Title</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Total Marks</th>
                  <th className="p-3">Obtain Marks</th>
                  <th className="p-3">Examiner Feedback</th>
                </tr>
              </thead>
              <tbody className="bg-slate-200 text-black dark:bg-gray-900 dark:border-gray-700">
                {data.data.map((item, idx) => (
                  <tr key={item._id} className="text-lg">
                    <td className="px-3 text-xl font-medium border-b-2 border-gray-400 text-gray-800 dark:text-gray-400 ">
                      {idx + 1}.
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400 ">
                      <p>{item.title}</p>
                    </td>

                    <td className={`px-3 py-2 border-b-2 border-gray-400 `}>
                      <p className={`${item.status==="completed"?"bg-green-500":" bg-yellow-400"} max-w-min capitalize px-4 rounded-xl`}>{item.status}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{item.marks}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{item.myMark || "N/A"}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 ">
                      <textarea className="w-full h-24 bg-white p-2 dark:bg-gray-500" disabled defaultValue={item.feedback || "Coming soon"} >
                        
                      </textarea>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isFetching ? " " : 
        
        !(data.data.length) ? (
        <div className="min-h-[40vh] flex justify-center items-center">
          <p className="text-2xl font-bold">{`Sorry your didn't submit any assignment`}</p>
        </div>
      ) : ""
      }

    </>
  );
};

export default MyAssignment;
