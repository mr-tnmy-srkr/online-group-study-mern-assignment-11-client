import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import AssignmentCard from "../components/AssignmentCard";
import { Bars } from "react-loader-spinner";

const Assignments = () => {
  const axios = useAxios();

  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const res = await axios.get(`/assignments`);
      return res;
    },
  });

  return (
    <>
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2  py-10 ">
          {assignments.data &&
            assignments.data?.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
              ></AssignmentCard>
            ))}
        </div>
      )}
    </>
  );
};

export default Assignments;
