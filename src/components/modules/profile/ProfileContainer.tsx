"use client";

import Profile from "./profile";
import TabsOptions from "./Tabs";

const ProfileContainer = () => {
  return (
    <div className="lg:flex lg:justify-between flex-row-reverse gap-6 lg:mx-8 mt-10 mb-10 lg:mb-0  mx-3 ">
      <div className="lg:w-[30%] w-full mb-5 mx-auto ">
        <Profile />
      </div>
      <div className=" lg:w-[70%] w-full  mb-10 ">
        <TabsOptions />
      </div>
    </div>
  );
};

export default ProfileContainer;
