import React from "react";

function FormElement({ label, type, placeholder, icon }) {
  return (
    <div className="relative">
      <label className="text-[11px] text-gray-600" htmlFor="">
        {label}
      </label>
      <div className="relative w-40">
        <div className="absolute inset-y-0 right-0 flex items-center pl-2 pointer-events-none">
          {icon && icon}
        </div>
        <input
          type={type}
          className="bg-[#f5f4fa] rounded-md text-xs p-2 pl-8 w-full"
          style={{ color: "#181818" }}
          defaultValue={placeholder}
        />
      </div>
    </div>
  );
}

export default FormElement;
