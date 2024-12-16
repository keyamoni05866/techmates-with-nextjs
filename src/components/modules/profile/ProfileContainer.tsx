"use client";

import Profile from "./profile";
import TabsOptions from "./Tabs";

const ProfileContainer = () => {
  return (
    <div className=" max-w-4xl mx-auto mt-8 min-h-screen   ">
      <div className=" w-full mb-5 mx-auto ">
        <Profile />
      </div>
      <div className="  w-full  mb-10 ">
        <TabsOptions />
      </div>
    </div>
  );
};

export default ProfileContainer;
