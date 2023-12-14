import React from "react";
import CardHeader from "../../Components/CardHeader";
import InvoiceCard from "../../Components/InvoiceCard";

function Invoice() {
  return (
    <div className=" bg-white rounded-lg shadow-md min-h-[375px]">
      <CardHeader title="Invoicing" />
      <div className="grid grid-cols-2 h-[275px]">
        <InvoiceCard number="$176,772" info="Due" color="#C53030" />
        <InvoiceCard number="$122,644" info="Paid" color="#2F855A" />
        <InvoiceCard number="49" info="Currently invoices due" />
        <InvoiceCard number="543" info="All time paid invoices" />
      </div>
    </div>
  );
}

export default Invoice;
