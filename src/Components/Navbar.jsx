import React, { useEffect, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleItemClick = (index, path) => {
    navigate(path);
  };

  const location = useLocation();

  const navItems = [
    { icon: <GridViewIcon />, label: "Dashboard", path: "/" },
    { icon: <AssignmentOutlinedIcon />, label: "Jobs", path: "/jobs" },
    {
      icon: <HomeRepairServiceOutlinedIcon />,
      label: "Technicians",
    },
    {
      icon: <CalendarMonthOutlinedIcon />,
      label: "Calendar",
    },
    { icon: <PeopleOutlinedIcon />, label: "Customers" },
    {
      icon: <DescriptionOutlinedIcon />,
      label: "Invoice&Payments",
    },
  ];

  return (
    <div className="grid grid-cols-12 text-[#a7a7b3]  bg-white text-md font-semibold">
      <div className="flex col-span-10 justify-between py-6 px-12">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col relative justify-center items-center"
          >
            <div
              className={`flex cursor-pointer ${
                location.pathname === item.path && "text-blue-700"
              }`}
              onClick={() => {
                handleItemClick(index, item?.path);
              }}
            >
              {item.icon}
              <h1 className="ml-2">{item.label}</h1>
            </div>
            <div>
              {location.pathname === item.path && (
                <span className="bg-blue-500 h-2 w-2  mt-1 absolute rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 flex justify-end mr-10 items-center">
        <img className="h-12 w-12 " src="/userlogo.png" alt="" />
        <ArrowDropDownOutlinedIcon fontSize="large" color="action" />
      </div>
    </div>
  );
}

export default Navbar;
