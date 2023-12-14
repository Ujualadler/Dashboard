import React from "react";

function InvoiceCard({ info, number, color = "#000" }) {
  return (
    <div className="flex border col-span-1 h-[156px] border-[#f5f4fa] justify-center  items-center">
      <div className="">
        <h2 className="text-xl font-bold text-center" style={{ color: color }}>
          {number}
        </h2>
        <h2 className="text-xs p-1 text-gray-600 text-center font-semibold">
          {info}
        </h2>
      </div>
    </div>
  );
}

export default InvoiceCard;
