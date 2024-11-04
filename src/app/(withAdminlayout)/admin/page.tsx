"use client";

import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";

const AdminHomePage = () => {
  const { data: AllPosts } = useGetAllPostsQuery({});
  const { data: AllUsers } = useGetUsersQuery({});

  return (
    <div className="p-10 ">
      {" "}
      <h4 className="primary-color uppercase font-[540] lg:text-md text-[15px] text-center   pt-3 ">
        statistics
      </h4>
      <h4 className="text-2xl font-bold text-center ">
        Comprehensive Statistics & Activity Summary!!!
      </h4>
      <div className="lg:flex   gap-6  rounded-2xl mt-10 justify-center items-center">
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
    </div>
  );
};

export default AdminHomePage;
