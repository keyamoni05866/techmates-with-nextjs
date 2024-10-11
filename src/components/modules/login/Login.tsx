"use client";

import Link from "next/link";

import { Input } from "@nextui-org/input";
import { useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="h-[calc(100vh)] bg-[url('/login.jpg')] bg-cover bg-center">
      {/* <Image src={bgImage} fill alt="register image" /> */}

      <div className="lg:max-w-[480px]   lg:ms-[10%] pt-[140px]  ">
        <form className="bg-white p-10  rounded-xl shadow-xl">
          <h4 className="primary-color text-3xl font-bold text-center uppercase">
            Sign In
          </h4>
          <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
            <div>
              <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                Email:
              </label>
              <div className=" ">
                {/* <Input
                  isClearable
                  type="email"
                  variant="bordered"
                  placeholder="Enter your Email"
                  className="w-full  "
                /> */}
                <Input
                  isClearable
                  type="email"
                  variant="underlined"
                  placeholder="Enter Your Email"
                />
              </div>
              {/* <div>
            {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {errors.name.message}
            </p>
            
          </div> */}
            </div>

            <div className="mt-3 mb-5">
              <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                Password:
              </label>
              <div className="mt-2 ">
                <Input
                  variant="underlined"
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="w-full"
                />
              </div>
              {/* <div>
            {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {errors.name.message}
            </p>
            
          </div> */}
            </div>
          </div>

          <div className=" flex">
            <button type="submit" className="custom-btn w-full ">
              Login
            </button>
          </div>

          <div className="flex justify-center items-center mt-2">
            <label className="label">
              <p className="text-sm ">
                You don't have an account ?{" "}
                <Link
                  href="/register"
                  className=" primary-color font-semibold ps-1"
                >
                  Sign Up
                </Link>
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;