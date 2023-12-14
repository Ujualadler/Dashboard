import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FormElement from "../../Components/FormElement";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

function Form({ width, show }) {
  return (
    <div
      className={`${
        width ? "w-[25%]" : " w-0"
      } overflow-hidden  fixed transition-all duration-700 z-30 top-2 rounded-xl right-4  bg-white h-[98%]`}
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderLeft: "1px solid #ccc",
      }}
    >
      <div className="flex justify-between p-2">
        <IconButton>
          <DeleteForeverOutlinedIcon
            className="text-red-700 m-1 bg-[#f5f4fa]"
            fontSize="medium"
          />
        </IconButton>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-[11px] text-gray-600">Id Number</h4>
          <h1 className="text-md font-semibold">432 YFV ZX12</h1>
        </div>
        <IconButton onClick={() => show(false)} color="primary">
          <CloseIcon
            className="text-blue-800 m-1 bg-[#f5f4fa]"
            fontSize="medium"
          />
        </IconButton>
      </div>
      <div
        className="px-3 pb-1 scrollbar-none"
        style={{ maxHeight: "75%", overflowY: "auto" }}
      >
        <div className="flex justify-between gap-2 pb-1">
          <FormElement
            label="Phone Number"
            type="text"
            placeholder="+9 555 543 55 22"
            icon={
              <ModeEditOutlineOutlinedIcon
                fontSize="small"
                color="primary"
                style={{ marginRight: "10px" }}
              />
            }
          />
          <FormElement label="Job Id" type="text" placeholder="432 YFV ZX12" />
        </div>
        <h2 className="text-xs font-semibold p-2">Personal Information</h2>
        <div className="flex justify-between gap-2 px-3 pb-1">
          <FormElement label="First Name" type="text" placeholder="Alexander" />
          <FormElement label="Last Name" type="text" placeholder="Willowberg" />
        </div>
        <h2 className="text-xs font-semibold p-2">Address Information</h2>
        <div className="flex justify-between gap-2 px-3 pb-1">
          <FormElement
            label="Street Address"
            type="text"
            placeholder="Chimney Rock"
          />
          <FormElement label="Building Number" type="text" placeholder="1 B" />
        </div>

        <div className="flex justify-between gap-2 px-3 pb-1">
          <FormElement label="Apartment Number" type="text" placeholder="128" />
          <FormElement label="Zip Code" type="text" placeholder="060000" />
        </div>

        <h2 className="text-xs font-semibold p-2">Job Details</h2>
        <div className="flex justify-between  gap-2 px-3 pb-1 ">
          <FormElement
            label="Job Type"
            type="text"
            placeholder="Washing Machine Fix"
          />
          <FormElement label="Job Title" type="text" placeholder="Engine Fix" />
        </div>
        <div className="px-3 pb-1">
          <label className="text-[11px] text-gray-600" htmlFor="">
            Job Details
          </label>
          <textarea
            type="text"
            className="bg-[#f5f4fa] rounded-md text-xs p-2 w-[330px] h-20"
            defaultValue="The engine suddenly stopped working :("
          />
          <div className="flex justify-between">
            <FormElement
              type="text"
              placeholder="21 May"
              icon={
                <CalendarMonthOutlinedIcon
                  fontSize="small"
                  color="primary"
                  style={{ marginRight: "10px" }}
                />
              }
            />
            <FormElement type="text" placeholder="4.00PM" />
          </div>
        </div>
        <div className="flex justify-start px-3">
          <button className="bg-[#f5f4fa] font-semibold rounded-md text-xs text-blue-700 p-2 w-40">
            <KeyboardBackspaceOutlinedIcon
              fontSize="small"
              style={{ paddingRight: "6px" }}
            />
            Job Details
          </button>
        </div>
      </div>
      <div className="flex justify-between px-6 py-9">
        <button className="border border-[#4370fd] h-7 text-sm w-40 font-semibold  rounded-md text-[#4370fd]">
          Cancel
        </button>
        <button className="bg-[#4370fd] text-white h-7 w-40 text-sm font-semibold rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default Form;
