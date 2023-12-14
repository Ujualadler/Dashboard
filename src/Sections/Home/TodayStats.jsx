import React from "react";
import CardHeader from "../../Components/CardHeader";
import StatCard from "../../Components/StatCard";

function TodayStats() {
  const money = [
    { id: 1, name: "Money Earned", number: "$120.00" },
    { id: 2, name: "Money Earned", number: "$120.00" },
    { id: 3, name: "Money Earned", number: "$120.00" },
  ];

  const jobs = [
    { id: 1, name: "Jobs Completed", number: "14" },
    { id: 2, name: "Jobs Created", number: "10" },
    { id: 3, name: "Jobs Assigned", number: "23" },
  ];

  return (
    <div className=" bg-white rounded-lg shadow-md min-h-[375px]">
      <CardHeader title="Today's stats" />
      <div className=" pb-0">
        <h3 className="text-sm font-semibold px-6 py-2 bg-[#f5f4fa]">Money</h3>
        {money.map((item) => (
          <div key={item.id}>
            <StatCard name={item?.name} number={item?.number} />
          </div>
        ))}
        <h3 className="text-sm font-semibold px-6 py-2 bg-[#f5f4fa]">Jobs</h3>
        {jobs.map((item) => (
          <div key={item.id}>
            <StatCard name={item?.name} number={item?.number} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayStats;
