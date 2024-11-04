"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Cookies from "js-cookie";

import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { currentUser, logOutUser } from "@/src/redux/features/auth/authSlice";
const DashboardHeader = () => {
  const user = useAppSelector(currentUser);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
    Cookies.remove("token");
  };

  return (
    <div className="bg-white h-[80px] w-full  rounded-xl">
      <div className="flex justify-between items-center mx-5">
        <div className="flex items-center gap-2 pt-3">
          <Avatar
            alt="User Picture"
            className="me-2"
            src={user?.profilePicture}
          />

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg">{user?.name}</h4>
            </div>

            <h4 className="text-sm text-gray-500 ">{user?.email}</h4>
          </div>
        </div>

        <div className="pt-4">
          <Button color="primary" onClick={handleLogOut}>
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
