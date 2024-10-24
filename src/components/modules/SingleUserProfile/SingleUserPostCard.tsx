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
const SingleUserPostCard = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes } = post;
  // console.log(post);
  const { _id: authorId, name, email, profilePicture } = post.author;

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
      </div>

      <CardBody className="">
        <h4 className="lg:text-2xl text-lg font-bold">{title}</h4>
        <div className="lg:text-lg text-md font-light my-4 text-justify pe-4 ">
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

export default SingleUserPostCard;
