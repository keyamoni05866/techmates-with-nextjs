"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image as NextImage } from "@nextui-org/image";
import Link from "next/link";
import swal from "sweetalert";
import { toast } from "sonner";
import { Avatar } from "@nextui-org/avatar";

import PostUpdateModal from "../../UI/PostModal/PostUpdateModal";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
import CardFooter from "../../UI/CardFooter";
import AllCommentsModal from "../../UI/CommentModal/AllCommentsModal";

import { useDeletePostMutation } from "@/src/redux/Api/PostApi/postApi";
import { TPost } from "@/src/types";
const SinglePostCard = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes, comments } = post;
  // console.log(post);
  const { name, profilePicture } = post.author;
  const [deletePost] = useDeletePostMutation();
  // post delete operations
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
          <Avatar alt="User Picture" className="me-2" src={profilePicture} />

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
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CardBody className="">
        <Link href={`/${postId}`}>
          <h4 className="text-2xl font-bold">{title}</h4>
        </Link>
        <div className="text-lg font-light my-4 text-justify pe-4 ">
          <Link href={`/${postId}`}>
            <QuilToNormalHTML content={content} maxLength={220} />
          </Link>
        </div>

        {image && (
          <Link href={`/${postId}`}>
            <NextImage
              alt="Post Picture"
              className="w-[1000px] h-[300px] "
              src={image as string}
            />
          </Link>
        )}
      </CardBody>
      <div className="flex  justify-between lg:ms-11 me-4 mt-1 ">
        <h4 className="font-light">
          <span className="text-md font-bold me-1">{Votes}</span>votes
        </h4>
        <h4 className="flex font-light hover:underline hover:text-primary-500 ">
          <span className="text-md font-bold me-1 ">{comments?.length}</span>{" "}
          <AllCommentsModal comments={comments} post={post} />
        </h4>
      </div>
      <Divider />
      <div className="flex justify-between mx-3  lg:mx-10 my-4">
        <CardFooter post={post} />
      </div>
    </Card>
  );
};

export default SinglePostCard;
