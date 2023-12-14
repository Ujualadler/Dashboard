import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen flex justify-center items-center bg-violet-400">
      <div className="h-[98%] w-[98%] bg-[#f5f4fa] rounded-3xl scrollbar-none overflow-y-auto  ">
        <Navbar />
        <div className="mx-12 mb-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
