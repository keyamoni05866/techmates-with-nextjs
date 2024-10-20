import { baseApi } from "../../Api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
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

    votePost: builder.mutation({
      query: (postId) => {
        return {
          url: `/post/vote/${postId}`,
          method: "PATCH",
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
  useGetAllPostsQuery,
  useVotePostMutation,
} = postApi;
