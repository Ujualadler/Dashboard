import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import Layout from "../Components/Layout";
import Form from "../Sections/Jobs/Form";
import JobSection from "../Sections/Jobs/JobSection";
import { unassignedJobs, assignedJobs } from "../Datas";

function Jobs() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Layout>
      <PageHeader title="Thursday, 12 May" />
      <div className="grid gap-4 grid-cols-3">
        <JobSection jobItems={unassignedJobs} title="Unassigned Jobs (12)" />
        <JobSection
          jobItems={assignedJobs}
          title="Assigned Jobs (4)"
          toggleForm={setShowForm}
        />
        <JobSection jobItems={assignedJobs} title="Finished Jobs (5)" />
      </div>
      <Form width={showForm} show={setShowForm} />
    </Layout>
  );
}

export default Jobs;
