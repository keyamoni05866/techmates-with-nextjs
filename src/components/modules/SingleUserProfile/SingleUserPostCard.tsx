"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image as NextImage } from "@nextui-org/image";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";

import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
import CardFooter from "../../UI/CardFooter";
import AllCommentsModal from "../../UI/CommentModal/AllCommentsModal";

import { TPost } from "@/src/types";
const SingleUserPostCard = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes, comments } = post;
  // console.log(post);
  const { _id: authorId, name, profilePicture } = post.author;

  return (
    <Card className="w-full mb-8 px-4  py-3 shadow-md">
      <div className="ms-2 mb-1 flex justify-between">
        <div className="flex items-center gap-2 ">
          <Link href={`/singleUser/${authorId}`}>
            <Avatar alt="User Picture" className="me-2" src={profilePicture} />
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
        <Link href={`/${postId}`}>
          <h4 className="lg:text-2xl text-lg font-bold">{title}</h4>
        </Link>

        <div className="lg:text-lg text-md font-light my-4 text-justify pe-4 ">
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

export default SingleUserPostCard;
