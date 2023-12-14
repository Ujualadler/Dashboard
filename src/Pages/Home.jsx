import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PageHeader from "../Components/PageHeader";
import Layout from "../Components/Layout";
import UpcomingJobs from "../Sections/Home/UpcomingJobs";
import JobsAssigned from "../Sections/Home/JobsAssigned";
import Invoice from "../Sections/Home/Invoice";
import TodayStats from "../Sections/Home/TodayStats";
import IncomingJobs from "../Sections/Home/IncomingJobs";
import MoneyCard from "../Components/MoneyCard";

function Home() {
  const action = (
    <div className="mt-4 ">
      <button className="border border-[#4370fd] h-9 text-sm font-semibold w-48 rounded-md text-[#4370fd] mx-6">
        Auto Questionaire
      </button>
      <button className="bg-[#4370fd] text-white h-9 w-48 text-sm font-semibold rounded-md">
        <AddOutlinedIcon fontSize="small" /> Add Job
      </button>
    </div>
  );

  return (
    <Layout>
      <PageHeader actions={action} title="Thursday, 12 May" />
      <div className="grid gap-4 grid-cols-2">
        <div className="grid gap-4 grid-cols-2">
          <UpcomingJobs />
          <TodayStats />
          <JobsAssigned />
          <Invoice />
        </div>
        <div className="grid gap-4 grid-cols-1 h-fit">
          <IncomingJobs />
          <div className="grid gap-4 grid-cols-3">
            <MoneyCard
              height="80px"
              content="In Transit"
              money="$400.00"
              color="warning"
            />
            <MoneyCard
              height="80px"
              content="Overdue"
              money="$125.77"
              color="primary"
            />
            <MoneyCard
              height="80px"
              content="due"
              money="$443.74"
              color="error"
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <MoneyCard
              height="110px"
              content="Successful"
              money="$1 342.00"
              color="success"
            />
            <MoneyCard
              height="110px"
              content="Failed"
              money="$125.77"
              color="error"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
