import React from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";
import { toast } from "sonner";
import swal from "sweetalert";

import UpdateCommentModal from "./UpdateCommentModal";

import { TComment, TPost } from "@/src/types";
import { useAppSelector } from "@/src/redux/hook";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useCommentDeleteMutation } from "@/src/redux/Api/PostApi/postApi";

const SingleComment = ({
  singleComment,
  post,
}: {
  singleComment: TComment;
  post: TPost;
}) => {
  const tokenUser = useAppSelector(currentUser);
  const { _id: authorId, profilePicture, name } = singleComment?.user;
  //   console.log(name)
  const [commentDelete] = useCommentDeleteMutation();

  const handleDeleteComment = async (id: string) => {
    const deleteCommentData = {
      postId: post._id,
      commentId: id,
    };

    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await commentDelete(deleteCommentData);

        toast.success(res.data?.message, { duration: 3000 });
      }
    });
  };

  return (
    <div className="my-1">
      <div className="ms-1 shadow-md py-4 px-3 rounded-xl ">
        <div className="flex items-center gap-2">
          <Link href={`/singleUser/${authorId}`}>
            <Avatar alt="User Picture" className="me-2" src={profilePicture} />
          </Link>
          <div>
            <h4 className="text-md font-bold">{name}</h4>
            <h4 className="text-xl ">{singleComment?.comment}</h4>
          </div>
        </div>
        {tokenUser?._id === singleComment?.user?._id ? (
          <div className="flex justify-end gap-3 items-center">
            <UpdateCommentModal comment={singleComment} post={post} />
            <button
              className="mb-1"
              onClick={() => handleDeleteComment(singleComment?._id)}
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SingleComment;
