"use client";

import Link from "next/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

import { useLoginUserMutation } from "@/src/redux/features/authApi/authApi";
import { useAppDispatch } from "@/src/redux/hook";
import { signInUser } from "@/src/redux/features/auth/authSlice";

const Login = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Sign In", { duration: 1000 });
    const userData = {
      ...data,
    };

    try {
      const res = await loginUser(userData).unwrap();

      toast.success("logged In", { id: toastId, duration: 1000 });
      const userInfo = res?.data?.user;
      const token = res?.data?.token;

      dispatch(signInUser({ userInfo, token }));
      Cookies.set("token", token, { expires: 7 });
      router.push("/");
    } catch (err) {
      toast.error(
        "Something Went Wrong!! Please use valid email or provide correct password",
        { id: toastId, duration: 3000 },
      );
    }
  };

  return (
    <>
      <div className="h-[calc(100vh)] bg-[url('/login.jpg')] bg-cover bg-center">
        <div className="lg:max-w-[480px]   lg:ms-[10%] pt-[140px] px-3 lg:px-0  ">
          <form
            className="bg-white p-10  rounded-xl shadow-xl"
            onSubmit={handleSubmit(handleLogin)}
          >
            <h4 className="primary-color text-3xl font-bold text-center uppercase">
              Sign In
            </h4>
            <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
              <div>
                <label
                  className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
                  htmlFor="email"
                >
                  Email:
                </label>
                <div className=" ">
                  <Input
                    isClearable
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                    })}
                    placeholder="Enter Your Email"
                    type="email"
                    variant="underlined"
                  />
                </div>
                <div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-3 mb-5">
                <label
                  className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
                  htmlFor="password"
                >
                  Password:
                </label>
                <div className="mt-2 ">
                  <Input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full"
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <svg
                            className="size-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="size-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    }
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                </div>
                <div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password.message as string}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className=" flex">
              <button className="custom-btn w-full " type="submit">
                Login
              </button>
            </div>

            <div className="flex justify-center items-center mt-2">
              <div>
                <p className="text-sm ">
                  You do not have an account ?{" "}
                  <Link
                    className=" primary-color font-semibold ps-1"
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
