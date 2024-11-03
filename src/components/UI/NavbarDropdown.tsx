"use client";

import { currentUser, logOutUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Cookies from "js-cookie";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();

  const user = useAppSelector(currentUser);
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
    Cookies.remove("token");
  };

  return (
    <div>
      {user && user?.email && (
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Avatar size="sm" src={user?.profilePicture} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {user.role === "admin" ? (
                <DropdownItem
                  key="dashboard"
                  onClick={() => handleNavigation("/admin")}
                >
                  Dashboard
                </DropdownItem>
              ) : (
                <DropdownItem
                  key="profile"
                  onClick={() => handleNavigation("/profile")}
                >
                  Profile
                </DropdownItem>
              )}

              <DropdownItem
                onClick={handleLogOut}
                key="delete"
                className="text-danger"
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <h4 className="text-gray-400 text-[14px] text-center ">Me</h4>
        </div>
      )}
    </div>
  );
}
