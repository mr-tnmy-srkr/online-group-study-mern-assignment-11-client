import useAxios from "../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ParseDate from "../utils/ParseDate";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SubmittedAssignment = () => {
  const axios = useAxios();
  const navigate = useNavigate();

  const { data,isFetching } = useQuery({
    queryKey: ["submitted-assignments"],
    queryFn: async () => {
      const res = await axios.get(`/user/submitted-assignments`);
      return res;
    },
  });

  return (
    <>
     <Helmet>
        <title>Submitted Assignments</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      {isFetching ? (
        ""
      ) : (
        <div className=" md:px-0 w-full sm:p-4 text-gray-100 mb-5 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-semibold leadi"></h2>
          <div className="w-[98vw] lg:w-full mx-auto border-4  overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup></colgroup>
              <thead>
                <tr className="bg-gray-700 ">
                  <th className="p-3">Examinee Name</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Due Date</th>
                  <th className="p-3">Submission Date</th>
                  <th className="p-3">Total Marks</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-slate-200 text-black dark:bg-gray-900 dark:border-gray-700">
                {data.data.map((item, idx) => (
                  <tr key={item._id} className="text-lg">
                    <td className="px-3 text-xl font-medium border-b-2 border-gray-400 text-gray-800 dark:text-gray-400">
                      {idx + 1}
                      <span>. {item.userName}</span>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{item.title}</p>
                    </td>

                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{ParseDate(item.dueDate)}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{ParseDate(item.submissionDate)}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <p>{item.marks}</p>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400">
                      <span className="px-3 py-1 font-semibold rounded-md  bg-[#e7c28b] btn-sm dark:text-black">
                        <span>Pending</span>
                      </span>
                    </td>
                    <td className="px-3 py-2 border-b-2 border-gray-400 dark:text-gray-400 ">
                      <p
                        onClick={() =>
                          navigate(`/submitted-assignment/${item._id}`)
                        }
                        className=" capitalize bg-[#fc9f11] btn btn-sm"
                      >
                        Give Mark
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SubmittedAssignment;
