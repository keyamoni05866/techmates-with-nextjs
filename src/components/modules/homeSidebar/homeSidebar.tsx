"use client";

import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";

import { TPost, TUser } from "@/src/types";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";

const HomeSidebar = () => {
  const { data: AllPosts } = useGetAllPostsQuery({});
  const { data: AllUsers } = useGetUsersQuery({});

  return (
    <div className="mb-14   w-full">
      <div className="lg:fixed  ">
        <h4 className="text-xl font-bold">Popular Author</h4>

        <div className="my-6">
          {AllUsers?.data?.slice(0, 3).map((user: TUser) => (
            <div key={user?._id} className="ms-1 my-4">
              <div className="flex items-center gap-2">
                <Link href={`/singleUser/${user?._id}`}>
                  <Avatar
                    alt="User Picture"
                    className="me-2"
                    src={user?.profilePicture}
                  />
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href={`/singleUser/${user?._id}`}>
                      <h4 className="text-xl">{user?.name}</h4>
                    </Link>
                    {user.verified === true ? (
                      <>
                        <svg
                          className="size-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>

                  <h4 className="text-sm text-gray-500 ">{user?.email}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-2xl font-bold">Recommended Tech Posts</h4>

        <div className="mt-3 mb-2">
          {AllPosts?.data?.slice(0, 3).map((post: TPost) => (
            <div
              key={post?._id}
              className="px-4 py-2 my-3 shadow-md  me-5 rounded-xl"
            >
              <div>
                <Link href={`/${post?._id}`}>
                  <h4 className="text-md font-bold">{post?.title}</h4>
                </Link>
                <div className="text-sm font-light text-justify  ">
                  <QuilToNormalHTML content={post?.content} maxLength={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
