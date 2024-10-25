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

    getSingleUser: builder.query({
      query: (id) => {
        console.log("inside redux", id);
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),

    followUser: builder.mutation({
      query: ({ followerId, followingId }) => ({
        url: "/user/follow",
        method: "PATCH",
        body: { followerId, followingId },
      }),
      invalidatesTags: ["users"],
    }),
    unfollowUser: builder.mutation({
      query: ({ followerId, followingId }) => ({
        url: "/user/unfollow",
        method: "PATCH",
        body: { followerId, followingId },
      }),
      invalidatesTags: ["users"],
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

export const {
  useUpdateUserMutation,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = userApi;
