import React from "react";

function StatCard({ name, number }) {
  return (
    <div className="hover:bg-grey-lighter flex justify-between px-6 py-[9.6px] border-b border-grey-light">
      <h1 className="text-sm">{name}</h1>
      <h1 className=" text-sm">{number}</h1>
    </div>
  );
}

export default StatCard;
