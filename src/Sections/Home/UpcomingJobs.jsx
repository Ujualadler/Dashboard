import React from "react";
import CardHeader from "../../Components/CardHeader";
import JobInfo from "../../Components/JobInfo";
import { Link } from "react-router-dom";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { jobItems } from "../../Datas";

function UpcomingJobs() {
  return (
    <div className=" bg-white rounded-lg shadow-md min-h-[375px]">
      <CardHeader
        title="Upcoming jobs"
        icon={<FilterAltOutlinedIcon color="primary" />}
      />
      <div className="px-5 pt-2 pb-0 h-[275px] overflow-y-auto overflow-x-hidden scrollbar-none">
        {jobItems.map((jobItem, index) => (
          <JobInfo key={index} color={jobItem.color} jobItem={jobItem} />
        ))}
      </div>
      <Link
        to="/jobs"
        className="block text-center text-[14px] text-blue-700 font-semibold p-2"
      >
        View All
      </Link>
    </div>
  );
}

export default UpcomingJobs;
