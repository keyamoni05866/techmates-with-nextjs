"use client";

import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";
import { TPost, TUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";

const HomeSidebar = () => {
  const { data: allUsers } = useGetUsersQuery({});
  const { data: allPosts } = useGetAllPostsQuery({});
  // console.log(allUsers);
  return (
    <div className="mt-4 mb-10 lg:ms-8  ">
      <div className="lg:fixed">
        <h4 className="text-3xl font-bold">Popular Author</h4>

        <div className="my-6">
          {allUsers?.data && allUsers?.data?.length > 0 ? (
            allUsers?.data?.slice(0, 3).map((user: TUser) => (
              <div className="ms-1 my-4">
                <div className="flex items-center gap-2">
                  <Link href={`/singleUser/${user._id}`}>
                    <Avatar
                      alt="User Picture"
                      src={user?.profilePicture}
                      className="me-2"
                    />
                  </Link>
                  <div>
                    <h4 className="text-xl">{user?.name}</h4>
                    <h4 className="text-sm text-gray-500 ">{user?.email}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h4 className="text-xl text-center font-semibold">
                No User Found!!!
              </h4>
            </>
          )}
        </div>

        <h4 className="text-3xl font-bold">Recommended Articles</h4>

        <div className="mt-3">
          {allPosts?.data && allPosts?.data?.length > 0 ? (
            allPosts?.data?.slice(0, 3).map((post: TPost) => (
              <div className="px-5 py-2 my-3 shadow-md  me-5 rounded-xl">
                <div>
                  <h4 className="text-lg font-bold">{post?.title}</h4>
                  <div className="text-md font-light text-justify  ">
                    <QuilToNormalHTML content={post?.content} maxLength={40} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h4 className="text-xl text-center font-semibold">
                No Post Found!!!
              </h4>
            </>
          )}
        </div>
      </div>
    </div>

   
  );
};

export default HomeSidebar;
