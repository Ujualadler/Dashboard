import React from "react";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";

function JobInfo({ jobItem }) {
  return (
    <div
      className="p-2 rounded-md  job-info shadow-md"
      style={{
        backgroundColor: jobItem.color,
        color: jobItem?.color === "#fff" ? "#000" : "#fff",
      }}
    >
      <div className="flex justify-between items-center pb-2">
        <div>
          <h5 className="text-[12px]">Job id</h5>
          <h2 className="text-[13px] font-semibold">{jobItem?.id}</h2>
        </div>
        <div className="flex gap-2">
          <div>
            <h2 className="text-[13px]">{jobItem?.name}</h2>
            <h5 className="text-[11px]">{jobItem?.phone}</h5>
          </div>
          {jobItem.image ? (
            <img src={jobItem.image} className="rounded-full h-9 w-9" alt="" />
          ) : (
            <HomeRepairServiceOutlinedIcon fontSize="large" color="primary" />
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-[12px]">Job Scheduled</h5>
          <h2 className="text-[13px] font-semibold">{jobItem?.time}</h2>
        </div>
        <div>
          <button
            className="shadow-lg px-3 py-1 rounded text-[12px] font-semibold"
            style={{
              backgroundColor:
                jobItem.color === "#fff"
                  ? "#D0D0D0"
                  : "rgba(255, 255, 255, 0.3)",
            }}
          >
            {jobItem?.action}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
