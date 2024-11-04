"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const token = cookies().get("token")?.value;

  let decodedToken = null;

  if (token) {
    decodedToken = await jwtDecode(token);

    const user = decodedToken?.user;

    return {
      user,
    };
  }

  return decodedToken;
};
