import React from "react";
import CardHeader from "../../Components/CardHeader";
import FilterComponent from "../../Components/FilterComponent";
import LChart from "../../Components/Chart";

function IncomingJobs() {
  return (
    <div className=" bg-white rounded-lg shadow-md min-h-[550px]">
      <CardHeader title="Incoming Jobs" action={<FilterComponent />} />
      <LChart />
    </div>
  );
}

export default IncomingJobs;
