import React from "react";
import JobInfo from "../../Components/JobInfo";
import JobHeader from "../../Components/JobHeader";

function JobSection({ jobItems, title, toggleForm }) {
  return (
    <div className="bg-white rounded-lg shadow-md min-h-[750px]">
      <JobHeader title={title} />
      <div className="px-10 pt-2 pb-0 h-[575px] overflow-y-auto overflow-x-hidden scrollbar-none">
        {jobItems.map((jobItem, index) => (
          <JobInfo key={index} jobItem={jobItem} setShowForm={toggleForm} />
        ))}
      </div>
    </div>
  );
}

export default JobSection;
