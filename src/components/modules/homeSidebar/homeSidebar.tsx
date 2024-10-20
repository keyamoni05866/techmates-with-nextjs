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
                  <h4 className="text-xl">{user?.name}</h4>
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
