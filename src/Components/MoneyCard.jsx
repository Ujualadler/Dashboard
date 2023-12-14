import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function MoneyCard({ height, money, color, content }) {
  return (
    <div
      className="rounded-lg shadow-md bg-white flex flex-col  justify-center items-center"
      style={{ height: height }}
    >
      <div className="flex gap-2 justify-center mb-1 items-center">
        <MonetizationOnIcon fontSize="large" color={color} />
        <h1 className="text-2xl font-semibold">{money}</h1>
      </div>
      <h1 className="text-gray-600 font-medium">{content}</h1>
    </div>
  );
}

export default MoneyCard;
