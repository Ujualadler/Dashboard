import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterComponent from "./FilterComponent";

function JobHeader({ title }) {
  return (
    <>
      <div className=" p-10 h-32 ">
        <h5 className="text-lg font-semibold ">{title}</h5>
        <div className="flex justify-between mt-3">
          <FilterComponent />
          <FilterAltOutlinedIcon color="primary" fontSize="large" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default JobHeader;
