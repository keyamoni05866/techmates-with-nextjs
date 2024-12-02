import { Image } from "@nextui-org/image";
import React from "react";

import UserUpdateModal from "@/src/components/UI/UserRelatedModal/UserUpdateModal";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";

// import { Image } from 'next/image';

const MyProfile = () => {
  const user = useAppSelector(currentUser);

  return (
    <div className=" p-4 lg:p-10 lg:flex gap-5  lg:justify-center lg:items-center w-full  ">
      <div className=" lg:w-[20%]      border  py-4   rounded-xl lg:h-[230px]">
        <div className="flex items-center justify-center">
          <Image
            alt=""
            className="w-[200px] h-[130px]  "
            src={user?.profilePicture}
          />
        </div>
        <div className="text-center">
          <h4 className="lg:text-xl font-bold  primary-color">{user?.name}</h4>
          <h4 className="lg:text-xl  font-semibold ">{user?.email}</h4>
        </div>
      </div>
      <div className="lg:w-[60%] shadow-md py-8 rounded-xl  pb-4 border lg:mt-0  mt-8 px-3 lg:px-6 lg:h-[230px] ">
        <div className="flex justify-between ">
          <div className=" ">
            <h4 className="lg:text-xl  font-bold">Personal Information</h4>
          </div>
          <div>
            <UserUpdateModal />
          </div>
        </div>

        <div className="">
          <h4 className="lg:text-lg ">
            <span className="font-bold"> Name:</span> {user?.name}
          </h4>
          <h4 className="lg:text-lg mt-2  ">
            <span className="font-semibold">Email:</span> {user?.email}
          </h4>
          <h4 className="lg:text-lg  mt-2 ">
            <span className="font-semibold">Phone:</span> {user?.number}
          </h4>
          <h4 className="lg:text-lg  mt-2 ">
            <span className="font-semibold">Address:</span> {user?.address}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
