import { baseApi } from "../../Api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersPosts: builder.query({
      query: () => ({
        url: "/post/myPosts",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/post/create-post",
        method: "POST",
        body,
      }),
      invalidatesTags: ["posts"],
    }),

    updatePost: builder.mutation({
      query: (data) => {
        return {
          url: `/post/${data._id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["posts"],
    }),

    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `/post/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetUsersPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
