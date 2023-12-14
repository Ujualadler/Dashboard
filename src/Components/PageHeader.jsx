import React from "react";

function PageHeader({ title, actions }) {
  return (
    <div className="flex  justify-between mb-4">
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      {actions && actions}
    </div>
  );
}

export default PageHeader;
