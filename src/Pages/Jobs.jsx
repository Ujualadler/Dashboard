import React from "react";
import PageHeader from "../Components/PageHeader";
import Layout from "../Components/Layout";
import UnassignedJobs from "../Sections/Jobs/UnassignedJobs";

function Jobs() {
  const unassignedJobs = [
    {
      id: "001 AAA AA09",
      time: "5.00 PM, 1 June",
      action: "Washing Machine Fix",
      color: "#fff",
    },
    {
      id: "002 AAA AA10",
      time: "2.00 PM, 4 May",
      action: "DishWashing Machine Fix",
      color: "#fff",
    },
    {
      id: "003 AAA AA11",
      time: "1.20 PM, 7 June",
      action: "Microwave Cooker Fix",
      color: "#fff",
    },
    {
      id: "001 AAA AA09",
      time: "5.00 PM, 1 June",
      action: "Washing Machine Fix",
      color: "#fff",
    },
    {
      id: "002 AAA AA10",
      time: "2.00 PM, 4 May",
      action: "DishWashing Machine Fix",
      color: "#fff",
    },
    {
      id: "003 AAA AA11",
      time: "1.20 PM, 7 June",
      action: "Microwave Cooker Fix",
      color: "#fff",
    },
    {
      id: "003 AAA AA11",
      time: "1.20 PM, 7 June",
      action: "Microwave Cooker Fix",
      color: "#fff",
    },
  ];

  const assignedJobs = [
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
  ];

  return (
    <Layout>
      <PageHeader title="Thursday, 12 May" />
      <div className="grid gap-4 grid-cols-3">
        <UnassignedJobs
          jobItems={unassignedJobs}
          title="Unassigned Jobs (12)"
        />
        <UnassignedJobs jobItems={assignedJobs} title="Assigned Jobs (4)" />
        <UnassignedJobs jobItems={unassignedJobs} title="Finished Jobs (5)" />
      </div>
    </Layout>
  );
}

export default Jobs;
