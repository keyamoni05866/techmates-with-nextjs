import { baseApi } from "../../Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "/user/create-user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/user/${data._id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users", "posts"],
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useUpdateUserMutation, useGetUsersQuery } = userApi;
