"use client";

import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

const HomeSidebar = () => {
  const user = useAppSelector(currentUser);
  return (
    <div className=" bg-white h-[350px] rounded-xl">
      <div>
        <div className="bg-gray-200 w-full h-[130px] relative"></div>
        <div className="">
          <div className=" rounded-full size-[130px]   mx-auto absolute top-[160px] ms-[72px] ">
            <Image
              src={user?.profilePicture as string}
              height={130}
              width={130}
              alt="profile picture"
              className="mx-auto rounded-full "
            />
            <h4 className="text-center text-3xl primary-color pt-1 ">
              {user?.name}
            </h4>
            <h4 className="text-center text-xl pb-3 ">{user?.email}</h4>
          </div>
        </div>
        {/* <div className="flex gap-4 ms-3 mt-32">
          <h4 className="text-sm border-[2px] text-center rounded-full px-5 py-1">
            Followers 10
          </h4>
          <h4 className="text-sm border-[2px] text-center rounded-full  px-5 py-1">
            Following 10
          </h4>
        </div> */}
      </div>

      {/* <Divider className="my-3" /> */}
      <div className="mt-36 flex justify-between">
        <button className="custom-outline-btn !text-md  flex justify-center items-center gap-1 ms-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit Profile{" "}
        </button>
        <button className="px-[20px] py-[3px] bg-[#9753d3] text-white rounded-full !text-md me-2 flex justify-center items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          Write Post
        </button>
      </div>
    </div>
  );
};

export default HomeSidebar;
