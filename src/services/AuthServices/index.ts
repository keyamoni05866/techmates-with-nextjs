"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
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
    throw new Error(error);
  }
};
