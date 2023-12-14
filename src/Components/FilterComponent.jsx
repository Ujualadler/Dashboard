import React, { useState } from "react";

function FilterComponent() {
  const [activeButton, setActiveButton] = useState("Today");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex border border-[#f5f4fa] shadow-md rounded-l-xl rounded-r-xl text-gray-700 h-9 text-xs font-semibold overflow-hidden">
      <button
        className={`p-1  ${
          activeButton === "Today" && "bg-blue-500 text-white"
        }`}
        onClick={() => handleClick("Today")}
      >
        Today
      </button>
      <button
        className={`p-1 border border-r-0 ${
          activeButton === "This Week" && "bg-blue-500 text-white"
        }`}
        onClick={() => handleClick("This Week")}
      >
        This Week
      </button>
      <button
        className={`p-1 border border-r-0 ${
          activeButton === "This Month" && "bg-blue-500 text-white"
        }`}
        onClick={() => handleClick("This Month")}
      >
        This Month
      </button>
    </div>
  );
}

export default FilterComponent;
