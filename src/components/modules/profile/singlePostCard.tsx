"use client";

import { TPost } from "@/src/types";
import { Card, CardBody } from "@nextui-org/card";
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
import CardFooter from "../../UI/CardFooter";
const SinglePostCard = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes } = post;
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
          <Avatar alt="User Picture" src={profilePicture} className="me-2" />

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
              src={image as string}
              className="w-[1000px] h-[300px] "
            />
          </Link>
        )}
      </CardBody>
      <div className="flex justify-between lg:mx-11 my-2 ">
        <h4>
          <span className="text-xl font-bold me-1">{Votes}</span>Votes
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
