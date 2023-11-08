import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import AssignmentCard from "../components/AssignmentCard";
import { Bars } from "react-loader-spinner";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Assignments = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const axios = useAxios();

  // /services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}
  const { data: assignments, isLoading } = useQuery({
    queryKey: ["assignments", page],
    queryFn: async () => {
      const res = await axios.get(`/assignments?page=${page}&limit=${limit}`);
      return res;
    },
  });
  // console.log(assignments);
  const totalPage = Math.ceil(assignments?.data?.total / limit);

  const handlePrev = () => {
    page > 1 && setPage(page - 1);
  };
  const handleNext = () => {
    page < totalPage && setPage(page + 1);
  };
  // console.log(page);

  // console.log(totalPage);

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
            assignments.data.result.map((assignment) => (
              <AssignmentCard
                key={assignment._id}
                assignment={assignment}
              ></AssignmentCard>
            ))}
        </div>
      )}

      <div className="mb-8 text-right mr-3">
        <div className="join outline rounded-full border-primary">
          <button onClick={handlePrev} className="join-item btn btn-ghost">
            <GrPrevious></GrPrevious>
          </button>
          {isLoading
            ? " "
            : [...Array(totalPage).keys()].map((item, idx) => {
                const pageNumber = idx + 1;
                return (
                  <button
                    onClick={() => setPage(pageNumber)}
                    key={pageNumber}
                    className={`${
                      pageNumber === page
                        ? "join-item btn btn-primary"
                        : "join-item btn btn-ghost"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
          <button onClick={handleNext} className="join-item btn btn-ghost">
            <GrNext></GrNext>
          </button>
        </div>
      </div>
    </>
  );
};

export default Assignments;
