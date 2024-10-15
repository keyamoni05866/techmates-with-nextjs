"use client";
import { Divider } from "@nextui-org/divider";
import Profile from "./profile";
import TabsOptions from "./Tabs";

const ProfileContainer = () => {
  return (
    <div className=" max-w-[950px]  mx-auto ">
      <Profile />
      <Divider className="mt-7 mb-5" />
      <div className="bg-white">
        <TabsOptions />
      </div>
    </div>
  );
};

export default ProfileContainer;
