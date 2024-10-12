"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TUser } from "@/src/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", userData);

    if (data.success) {
      cookies().set("token", data?.data?.token);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    // console.log(data);
    return data;
  } catch (error: any) {
    const data = {
      success: false,
      message: error?.response?.data?.message,
    };
    return data;
  }
};
export const LoginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/signin", userData);

    if (data.success) {
      cookies().set("token", data?.data?.token);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    // console.log(data);
    return data;
  } catch (error: any) {
    const data = {
      success: false,
      message: error?.response?.data?.message,
    };
    return data;
  }
};

export const getCurrentUser = async () => {
  const token = cookies().get("token")?.value;
  let decodedToken = null;

  if (token) {
    decodedToken = await jwtDecode(token);
    const user = decodedToken.user;
    return {
      user,
    };
  }
  return decodedToken;
};

export const logOut = () => {
  cookies().delete("token");
  cookies().delete("refreshToken");
};
