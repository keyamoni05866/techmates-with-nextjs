"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { currentUser, logOutUser } from "@/src/redux/features/auth/authSlice";

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
    router.push("/login");
  };

  return (
    <div>
      {user && user?.email && (
        <div>
          <Dropdown>
            <DropdownTrigger>
              <div className="lg:border-[2px] border-[#036666] px-2 py-1 rounded-3xl lg:flex justify-center items-center gap-3  cursor-pointer  ">
                <Avatar
                  size="sm"
                  src={user?.profilePicture}
                  className="lg:mt-0 mt-2"
                />
                <div>
                  <h4 className="hidden lg:block text-md font-semibold">
                    {user?.name}
                  </h4>
                  <h4 className=" block lg:hidden text-gray-400 text-[14px] text-center ">
                    Me
                  </h4>
                </div>
              </div>
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

              <DropdownItem className="primary-color" onClick={handleLogOut}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </div>
  );
}
