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

    getSinglePost: builder.query({
      query: (id) => {
        console.log("inside redux", id);
        return {
          url: `/post/${id}`,
          method: "GET",
        };
      },
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

    comment: builder.mutation({
      query: ({ postId, comment }) => {
        return {
          url: `/post/comment/${postId}`,
          method: "PATCH",
          body: { comment },
        };
      },
      invalidatesTags: ["posts"],
    }),
    updateComment: builder.mutation({
      query: ({ postId, commentId, commentText }) => {
        // console.log(postId, commentId, commentText);
        return {
          url: `/post/comment-update/${postId}`,
          method: "PATCH",
          body: { commentId, commentText },
        };
      },
      invalidatesTags: ["posts"],
    }),

    commentDelete: builder.mutation({
      query: ({ postId, commentId }) => {
        return {
          url: `/post/comment-delete/${postId}`,
          method: "PATCH",
          body: { commentId },
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
  useGetSinglePostQuery,
  useCommentMutation,
  useUpdateCommentMutation,
  useCommentDeleteMutation,
} = postApi;
