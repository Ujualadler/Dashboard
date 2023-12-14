import React from "react";
import CardHeader from "../../Components/CardHeader";
import JobInfo from "../../Components/JobInfo";
import { Link } from "react-router-dom";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function UpcomingJobs() {
  const jobItems = [
    {
      id: "006 AAA AA01",
      time: "4.00 PM, 21 May",
      name: "Jay Simpson",
      phone: "+8 494 432 43 22",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ciWHRThbktaB-go-T7SE6xDpPTB8-1qXRNN1a0OW0XeAkh3RmrI8484UJQ&s",
      action: "Washing Machine Fix",
      color: "#F59E0B",
    },
    {
      id: "007 AAA AA02",
      time: "4.00 PM, 21 May",
      name: "William Smith",
      phone: "+8 494 432 43 22",
      image:
        "https://img.freepik.com/premium-photo/young-smiling-man-model-fashion-wearing-plaid-shirt-with-green-blind-him_1139-1352.jpg?size=626&ext=jpg&ga=GA1.1.182285663.1688478567&semt=ais",
      action: "Washing Machine Fix",
      color: "#3B82F6",
    },
    {
      id: "008 AAA AA03",
      time: "4.00 PM, 21 May",
      name: "Mark Timber",
      phone: "+8 494 432 43 22",
      image:
        "https://img.freepik.com/free-photo/handsome-businesman-summer-city_1157-18997.jpg?size=626&ext=jpg&ga=GA1.1.182285663.1688478567&semt=ais",
      action: "Washing Machine Fix",
      color: "#22543D",
    },
  ];

  return (
    <div className=" bg-white rounded-lg shadow-md min-h-[375px]">
      <CardHeader
        title="Upcoming jobs"
        icon={<FilterAltOutlinedIcon color="primary" />}
      />
      <div className="px-5 pt-2 pb-0 h-[275px] overflow-y-auto overflow-x-hidden scrollbar-none">
        {jobItems.map((jobItem, index) => (
          <JobInfo key={index} color={jobItem.color} jobItem={jobItem} />
        ))}
      </div>
      <Link
        to="/jobs"
        className="block text-center text-[14px] text-blue-700 font-semibold p-2"
      >
        View All
      </Link>
    </div>
  );
}

export default UpcomingJobs;
