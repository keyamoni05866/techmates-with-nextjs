import { baseApi } from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/auth/signin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
