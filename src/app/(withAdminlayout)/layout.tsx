"use client";
import { useState } from "react";

import DashboardHeader from "./../../components/modules/Dashboard/DashboardSidebar/DashboardHeader";

import DashboardSidebar from "@/src/components/modules/Dashboard/DashboardSidebar/DashboardSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-gray-200 min-h-screen ">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <DashboardSidebar />
      </div>

      <div className=" flex-1  w-full lg:mx-8 my-4   ">
        <DashboardHeader />
        <button
          className="p-2 bg-gray-800 text-white rounded-md lg:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Main content */}

        <div className="bg-white w-full mt-3 rounded-xl ">{children}</div>
      </div>

      {isSidebarOpen && (
        <button
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AdminLayout;
