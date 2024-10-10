import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { SearchIcon } from "./icons";
import Image from "next/image";
import logo from "@/src/assets/techMatesLogo.png";
export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className=" px-48">
      <NavbarItem className="">
        <Link href="/" className="">
          <Image
            src={logo}
            height={70}
            width={70}
            alt="website logo"
            className="mb-3  relative"
          />
          <p className=" text-2xl text-gray-600  absolute left-[59px] bottom-5">
            Tech<span className="primary-color">Mates</span>
          </p>
        </Link>
      </NavbarItem>

      <NavbarContent className="hidden sm:flex gap-4 ms-28 pt-3" justify="end">
        <NavbarItem className="">
          <Link href="/" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="30"
              viewBox="0 0 16 16"
            >
              <path d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z"></path>
            </svg>
            <h4 className="text-gray-400 text-[14px] text-center mt-0">Home</h4>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/aboutUs" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="30"
              className="ms-3"
              viewBox="0 0 50 50"
            >
              <path d="M 25 1 C 11.222656 1 0 10.878906 0 23.1875 C 0 29.234375 2.773438 34.664063 7.21875 38.6875 C 6.546875 40.761719 5.046875 42.398438 3.53125 43.65625 C 2.714844 44.332031 1.933594 44.910156 1.3125 45.46875 C 1.003906 45.746094 0.722656 46.027344 0.5 46.375 C 0.277344 46.722656 0.078125 47.21875 0.21875 47.75 L 0.34375 48.15625 L 0.6875 48.375 C 1.976563 49.117188 3.582031 49.246094 5.3125 49.125 C 7.042969 49.003906 8.929688 48.605469 10.78125 48.09375 C 14.375 47.101563 17.75 45.6875 19.53125 44.90625 C 21.289063 45.273438 23.054688 45.5 24.90625 45.5 C 38.683594 45.5 49.90625 35.621094 49.90625 23.3125 C 49.90625 11.007813 38.78125 1 25 1 Z M 25 3 C 37.820313 3 47.90625 12.214844 47.90625 23.3125 C 47.90625 34.402344 37.730469 43.5 24.90625 43.5 C 23.078125 43.5 21.355469 43.320313 19.625 42.9375 L 19.28125 42.84375 L 19 43 C 17.328125 43.738281 13.792969 45.179688 10.25 46.15625 C 8.476563 46.644531 6.710938 47.019531 5.1875 47.125 C 4.167969 47.195313 3.539063 46.953125 2.84375 46.78125 C 3.339844 46.355469 4.019531 45.847656 4.8125 45.1875 C 6.554688 43.742188 8.644531 41.730469 9.375 38.75 L 9.53125 38.125 L 9.03125 37.75 C 4.625 34.015625 2 28.875 2 23.1875 C 2 12.097656 12.175781 3 25 3 Z M 23.8125 12.8125 C 23.511719 12.8125 23.40625 12.988281 23.40625 13.1875 L 23.40625 15.8125 C 23.40625 16.113281 23.613281 16.1875 23.8125 16.1875 L 26.1875 16.1875 C 26.488281 16.1875 26.59375 16.011719 26.59375 15.8125 L 26.59375 13.1875 C 26.59375 12.886719 26.386719 12.8125 26.1875 12.8125 Z M 23.90625 20.09375 C 23.605469 20.09375 23.5 20.300781 23.5 20.5 L 23.5 33.90625 C 23.5 34.207031 23.707031 34.3125 23.90625 34.3125 L 23.90625 34.40625 L 26.1875 34.40625 C 26.488281 34.40625 26.59375 34.199219 26.59375 34 L 26.59375 20.5 C 26.59375 20.199219 26.386719 20.09375 26.1875 20.09375 Z"></path>
            </svg>
            <h4 className="text-gray-400 text-[14px] text-center ">About Us</h4>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contactUs" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="30"
              className="ms-2"
              viewBox="0 0 48 48"
            >
              <path d="M 12 3 C 9.2504839 3 7 5.2504839 7 8 L 7 33 A 1.0001 1.0001 0 1 0 9 33 L 9 8 C 9 6.3315161 10.331516 5 12 5 L 38 5 C 38.56503 5 39 5.4349698 39 6 L 39 35 C 39 35.56503 38.56503 36 38 36 L 11.5 36 C 9.026562 36 7 38.026562 7 40.5 C 7 42.973438 9.026562 45 11.5 45 L 40 45 A 1.0001 1.0001 0 1 0 40 43 L 11.5 43 C 10.107438 43 9 41.892562 9 40.5 C 9 39.107438 10.107438 38 11.5 38 L 38 38 C 39.64497 38 41 36.64497 41 35 L 41 6 C 41 4.3550302 39.64497 3 38 3 L 12 3 z M 24.5 10.033203 C 23.052048 10.033203 21.840699 10.694109 21.089844 11.644531 C 20.338988 12.594954 20 13.790651 20 14.972656 C 20 16.154662 20.338988 17.348405 21.089844 18.298828 C 21.840699 19.249251 23.052048 19.910156 24.5 19.910156 C 25.947952 19.910156 27.159301 19.249251 27.910156 18.298828 C 28.661012 17.348405 29 16.154662 29 14.972656 C 29 13.790651 28.661012 12.594954 27.910156 11.644531 C 27.159301 10.694109 25.947952 10.033203 24.5 10.033203 z M 24.5 12.033203 C 25.38538 12.033203 25.924033 12.358438 26.339844 12.884766 C 26.755654 13.411093 27 14.185662 27 14.972656 C 27 15.759651 26.755654 16.532266 26.339844 17.058594 C 25.924033 17.584921 25.38538 17.910156 24.5 17.910156 C 23.61462 17.910156 23.075967 17.584921 22.660156 17.058594 C 22.244346 16.532266 22 15.759651 22 14.972656 C 22 14.185662 22.244346 13.411093 22.660156 12.884766 C 23.075967 12.358438 23.61462 12.033203 24.5 12.033203 z M 24.5 21 C 20.623496 21 17.231634 23.754724 16.042969 27.712891 A 1.0001 1.0001 0 1 0 17.957031 28.287109 C 18.920366 25.079276 21.570504 23 24.5 23 C 27.429496 23 30.079634 25.079276 31.042969 28.287109 A 1.0001 1.0001 0 1 0 32.957031 27.712891 C 31.768366 23.754724 28.376504 21 24.5 21 z"></path>
            </svg>
            <h4 className="text-gray-400 text-[14px] text-center ">
              Contact Us
            </h4>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <Link color="foreground" href="/contactUs" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="50"
              height="30"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h4 className="text-gray-400 text-[14px] text-center ">Profile</h4>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
        <NavbarItem className="hidden md:flex">
          <button className="custom-btn me-3">Login</button>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
