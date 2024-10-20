"use client";

import { TPost } from "@/src/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/image";
import Link from "next/link";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
import swal from "sweetalert";
import { toast } from "sonner";
import { useDeletePostMutation } from "@/src/redux/Api/PostApi/postApi";
import PostUpdateModal from "../../UI/PostModal/PostUpdateModal";
import { Avatar } from "@nextui-org/avatar";
const SinglePostCard = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content } = post;
  // console.log(post);
  const { _id: authorId, name, email, profilePicture } = post.author;
  const [deletePost] = useDeletePostMutation();

  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deletePost(id);
        toast.success(res.data?.message);
      }
    });
  };

  return (
    <Card className="w-full mb-8 px-4  py-3 shadow-md">
      <div className="ms-2 mb-1 flex justify-between">
        <div className="flex items-center gap-2 ">
          <Link href={`/singleUser/${authorId}`}>
            <Avatar alt="User Picture" src={profilePicture} className="me-2" />
          </Link>
          <div>
            <h4 className="text-xl">{name}</h4>
            <h4 className="text-sm text-gray-500 ">
              {new Date(post.createdAt!).toLocaleTimeString("en-US", {
                hour12: true,
                timeZone: "Asia/Dhaka",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h4>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <PostUpdateModal post={post} />
            <button onClick={() => handleDelete(postId)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CardBody className="">
        <h4 className="text-2xl font-bold">{title}</h4>
        <div className="text-lg font-light my-4 text-justify pe-4 ">
          <QuilToNormalHTML content={content} maxLength={220} />
        </div>

        {image && (
          <Link href={`/singlePost/${postId}`}>
            <NextImage
              alt="Post Picture"
              src={image as string}
              className="w-[1000px] h-[300px] "
            />
          </Link>
        )}
      </CardBody>

      <Divider />

      <div className="flex justify-between   mx-10 my-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
          <p className="text-lg font-semibold ms-1 mt-1">Vote</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <p className="text-xl font-semibold ms-1 ">Comment</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <p className="text-lg font-semibold ms-1 mt-1">Share</p>
        </div>
      </div>
    </Card>
  );
};

export default SinglePostCard;
