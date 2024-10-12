"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const token = cookies().get("token")?.value;

  // console.log(token);
  let decodedToken = null;

  if (token) {
    decodedToken = await jwtDecode(token);
    // console.log(decodedToken.newUser);
    const user = decodedToken.newUser;
    return {
      user,
    };
  }
  return decodedToken;
};
