"use client";

import Link from "next/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
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
    handleSubmit,
    setValue,
    control,
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
        { id: toastId, duration: 3000 }
      );
    }
  };
  const handleSetAdminValue = async () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "123456");
    toast.success("Demo Admin Credentials autofilled", { duration: 1000 });
  };

  const handleSetUserValue = async () => {
    setValue("email", "keya@gmail.com");
    setValue("password", "123456");
    toast.success("Demo User Credentials autofilled", { duration: 1000 });
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen w-full"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/motherboard-circuit-technology-background-gradient-blue_53876-124645.jpg?ga=GA1.1.1498671356.1683020323&semt=ais_hybrid')`,
      }}
    >
      <div className="absolute  inset-0 bg-black bg-opacity-60 backdrop-blur-sm "></div>

      <div className="relative z-10 lg:grid  lg:grid-cols-2 h-full text-white">
        <div className=" hidden lg:flex flex-col justify-center items-start px-10 lg:ps-24 space-y-5">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Connect, Learn, and <span className="primary-color">Share!!!</span>
          </h1>
          <p className="text-lg lg:text-xl">
            Tech is better when shared! Create your account today to connect
            with other enthusiasts, share your expertise, and learn from the
            best
          </p>
          <button className="custom-btn">Lets Start</button>
        </div>

        <div className="flex items-center justify-center pt-20  px-3  lg:p-20">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="bg-white bg-opacity-100 p-8 rounded-lg shadow-md w-full lg:max-w-md text-gray-800"
          >
            <h2 className="text-3xl font-semibold primary-color ">Login!!!</h2>
            <p className="text-[12px] text-gray-500 ms-1">
              Log into your account.
            </p>

            <div className="flex justify-start mb-4 mt-5   gap-2  ">
              <button
                className="custom-outline-btn  "
                type="button"
                onClick={handleSetUserValue}
              >
                User Credentials
              </button>
              <button
                className="custom-btn"
                type="button"
                onClick={handleSetAdminValue}
              >
                Admin Credentials
              </button>
            </div>
            <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
              <div>
                <label
                  className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
                  htmlFor="email"
                >
                  Email:
                </label>
                <div className=" ">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <Input
                        isClearable
                        {...field}
                        placeholder="Enter Your Email"
                        type="email"
                        variant="underlined"
                      />
                    )}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                    }}
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
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <Input
                        {...field}
                        className="w-full"
                        endContent={
                          <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <svg className="size-6" /* Eye Icon */ />
                            ) : (
                              <svg className="size-6" /* Slash Eye Icon */ />
                            )}
                          </button>
                        }
                        placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        variant="underlined"
                      />
                    )}
                    rules={{ required: "Password is required" }}
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
    </div>
  );
};

export default Login;
