"use client";

import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

import PostModal from "./PostModal/postModal";

import { useAppSelector } from "@/src/redux/hook";
import { currentUser } from "@/src/redux/features/auth/authSlice";

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
            <Link className="custom-btn " href="/login">
              Login
            </Link>
          </NavbarItem>
        </>
      )}
    </>
  );
};

export default NavbarPostConditional;
