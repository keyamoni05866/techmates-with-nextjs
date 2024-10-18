"use client";

import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import PostModal from "./PostModal/postModal";

const NavbarPostConditional = () => {
  const user = useAppSelector(currentUser);
  return (
    <>
      {user ? (
        <>
          <NavbarItem className="hidden lg:flex">
            <PostModal />
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" className="custom-btn ">
              Login
            </Link>
          </NavbarItem>
        </>
      )}
    </>
  );
};

export default NavbarPostConditional;
