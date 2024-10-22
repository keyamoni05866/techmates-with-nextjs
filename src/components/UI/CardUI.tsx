import { TPost } from "@/src/types";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import { Image as NextImage } from "@nextui-org/image";
import Link from "next/link";
import QuilToNormalHTML from "../modules/QuilToNormalHTML/QuilToNormalHTML";
import { Avatar } from "@nextui-org/avatar";

import CardFooter from "./CardFooter";
import AllCommentsModal from "./CommentModal/AllCommentsModal";

const CardUI = ({ post }: { post: TPost }) => {
  const {
    _id: postId,
    title,
    image,
    content,
    category,
    Votes,
    comments,
  } = post;
  // console.log(post);
  const { _id: authorId, name, email, profilePicture } = post?.author;

  return (
    <Card className="w-full mb-8 px-4  py-3 shadow-md">
      {/* <CardHeader className="flex gap-3"> */}
      <div className="ms-1 ">
        <div className="flex items-center gap-2">
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

      {/* </CardHeader> */}

      <CardBody className="">
        <Link href={`/${postId}`}>
          <h4 className="text-2xl font-bold">{title}</h4>
        </Link>

        <div className="text-lg font-light my-4 text-justify pe-4 ">
          <Link href={`/${postId}`}>
            <QuilToNormalHTML content={content} maxLength={220} />
          </Link>
        </div>
        <Link href={`/${postId}`}>
          <NextImage
            alt="Post Picture"
            src={image as string}
            className="w-[1000px] h-[300px] "
          />
        </Link>
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

      {/* vote, comment share sections */}
      <div className="flex justify-between mx-3  lg:mx-10 my-4">
        <CardFooter post={post} />
      </div>
    </Card>
  );
};

export default CardUI;
