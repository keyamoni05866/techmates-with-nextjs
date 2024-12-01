"use client";

import DashboardChart from "@/src/components/modules/Dashboard/DashboardOverviewChart/DashboardOverviewChart";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";

const AdminHomePage = () => {
  const { data: AllPosts } = useGetAllPostsQuery({});
  const { data: AllUsers } = useGetUsersQuery({});

  const analytics = {
    totalPosts: AllPosts?.data?.length,
    totalUsers: AllUsers?.data?.length,
  };

  return (
    <div className=" py-4 lg:px-6 px-3 mx-auto">
      <div className="lg:flex   gap-6  rounded-2xl   items-center mb-5 lg:ms-10 mt-4">
        <div className="shadow-md rounded-xl">
          <div className="p-10 text-center">
            <div className="text-xl font-semibold">All TechMates Posts</div>
            <div className="text-2xl font-bold">{AllPosts?.data?.length}</div>
          </div>
        </div>

        <div className="shadow-md rounded-xl">
          <div className="p-10 text-center">
            <div className="text-xl font-semibold">Total Users</div>
            <div className="text-2xl font-bold">{AllUsers?.data?.length}</div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[800px]">
        <DashboardChart data={analytics} />
      </div>
    </div>
  );
};

export default AdminHomePage;
