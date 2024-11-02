"use server";
import { TPost, TUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";

import envConfig from "@/src/config/envConfig";

const HomeSidebar = async () => {
  const postRes = await fetch(`${envConfig.baseApi}/post`, {
    cache: "no-store",
  });
  const postData = await postRes.json();
  const posts = postData?.data;

  const userRes = await fetch(`${envConfig.baseApi}/user`, {
    cache: "no-store",
  });
  const data = await userRes.json();
  const users = data?.data;

  return (
    <div className="mt-4 mb-10 lg:ms-8  ">
      <div className="lg:fixed">
        <h4 className="text-3xl font-bold">Popular Author</h4>

        <div className="my-6">
          {users?.slice(0, 3).map((user: TUser) => (
            <div className="ms-1 my-4">
              <div key={user?._id} className="flex items-center gap-2">
                <Link href={`/singleUser/${user?._id}`}>
                  <Avatar
                    alt="User Picture"
                    src={user?.profilePicture}
                    className="me-2"
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
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
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

        <h4 className="text-3xl font-bold">Recommended Tech Posts</h4>

        <div className="mt-3">
          {posts?.slice(0, 3).map((post: TPost) => (
            <div className="px-5 py-2 my-3 shadow-md  me-5 rounded-xl">
              <div key={post?._id}>
                <Link href={`/${post?._id}`}>
                  <h4 className="text-lg font-bold">{post?.title}</h4>
                </Link>
                <div className="text-md font-light text-justify  ">
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
