"use client";
import { Divider } from "@nextui-org/divider";
import Profile from "./profile";
import TabsOptions from "./Tabs";

const ProfileContainer = () => {
  return (
    <div className=" min-h-screen">
      <Profile />

      <div className="mt-20 rounded-xl">
        <TabsOptions />
      </div>
    </div>
  );
};

export default ProfileContainer;
