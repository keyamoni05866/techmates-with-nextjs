import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { LoginUser, registerUser } from "../services/AuthServices";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
  });
};
export const useLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await LoginUser(userData),
  });
};
