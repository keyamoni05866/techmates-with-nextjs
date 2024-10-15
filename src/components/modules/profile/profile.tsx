"use client";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";



import Image from "next/image";

import PostModal from "../../UI/postModal";

const Profile = () => {
  const user = useAppSelector(currentUser);
 
  return (
    <div className="bg-white mt-7 rounded-xl">
      <div className="flex justify-between w-full">
        <div className="w-[50%] ">
          <Image
            src={user?.profilePicture as string}
            alt="Profile Picture"
            height={400}
            width={300}
            className=" ms-10"
          />
        </div>
        <div className="w-[50%] mt-8">
          <div className="flex gap-2 items-center ">
            <h4 className="text-4xl primary-color font-semibold">
              {user?.name}
            </h4>
            <button className="text-sm border-[2px] border-dashed text-center rounded-full  px-5 py-1">
              Verify Now
            </button>
          </div>
          <h4 className="text-2xl my-3">{user?.email}</h4>
          <div className="flex gap-10">
            <h4 className="text-md">
              <span className="font-semibold">10</span> posts
            </h4>
            <h4 className="text-md ">
              <span className="font-semibold">10</span> followers
            </h4>
            <h4 className="text-md ">
              <span className="font-semibold">10</span> following
            </h4>
          </div>

          <div className=" flex gap-6 my-5">
            <button className="custom-outline-btn !text-md  flex justify-center items-center  ">
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
           
           
              <PostModal />
          
          </div>

          <div>
            <h4 className="text-lg">
              Phone Number:{" "}
              <span className="font-semibold ms-1">{user?.number}</span>{" "}
            </h4>
            <h4 className="text-lg">
              Address:{" "}
              <span className="font-semibold ms-1">{user?.address}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
