import { TResponseRedux, TUser } from "@/src/types";
import { baseApi } from "../../Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleUser: builder.query({
      query: ({ id }) => {
        console.log(id);
        return {
          url: `/auth/${id}`,
          method: "GET",
        };
      },
      // providesTags: ["users"],
    }),
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

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetSingleUserQuery,
} = authApi;
