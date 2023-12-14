import React from "react";
import CardHeader from "../../Components/CardHeader";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FilterComponent from "../../Components/FilterComponent";

function JobsAssigned() {
  const percentage = 58;
  return (
    <div className="bg-white rounded-lg shadow-md min-h-[375px]">
      <CardHeader title="Jobs Assigned" icon={<FilterComponent />} />
      <div className="px-5  pb-0  flex justify-center items-center ">
        <div className="w-56 h-56 m-4">
          <CircularProgressbarWithChildren
            strokeWidth={10}
            value={percentage}
            text={`${percentage}%`}
            styles={{
              text: {
                fontSize: "18px",
                fontWeight: "bold",
              },
            }}
          >
            <div className="mt-16 text-xs text-center ">
              <h1 className="w-32 text-gray-600">
                of all incoming jobs that were assigned
              </h1>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="flex justify-around m-2">
        <div className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-[#4370fd]"></span>
          <h3 className="w-28 text-xs font-medium">Total Assigned Jobs</h3>
        </div>
        <div className="w-[1px] h-10 bg-slate-400"></div>
        <div className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <h3 className="w-28 text-xs font-medium">Total Incoming Jobs</h3>
        </div>
      </div>
    </div>
  );
}

export default JobsAssigned;
