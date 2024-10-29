import { TPost } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
import AllCommentsModal from "../../UI/CommentModal/AllCommentsModal";
import CardFooter from "../../UI/CardFooter";
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

const PostDetails = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes, comments } = post;
  // console.log(post);
  const { _id: authorId, name, profilePicture } = post?.author;
  const { toPDF, targetRef } = usePDF({ filename: title });

  return (
    <div ref={targetRef} className="lg:mx-9 my-10 p-5 lg:p-3">
      <div className=" lg:sticky lg:top-0  lg:z-20 ">
        <h4 className="lg:text-5xl text-xl font-bold">{title}</h4>

        <div className="lg:flex justify-between items-center ">
          <div className="flex items-center gap-2 mt-4 ">
            <Link href={`/singleUser/${authorId}`}>
              <Avatar
                alt="User Picture"
                src={profilePicture}
                className="me-2"
              />
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

          <div className="flex lg:gap-10 items-center gap-3 mb-3 lg:mb-0">
            <CardFooter post={post} />
            <button onClick={() => toPDF()} className="flex items-center">
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <p className=" text-lg font-semibold ms-1 mt-1">PDF</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end me-10 mb-2 items-center gap-4">
        <h4>
          <span className="text-md font-bold me-1">{Votes}</span>Votes
        </h4>
        <h4 className="flex hover:underline hover:text-primary-500 ">
          <span className=" text-md font-bold me-1 ">{comments?.length}</span>
          <AllCommentsModal comments={comments} post={post} />
        </h4>
      </div>

      <div>
        <div className=" ">
          <Image
            alt="Post Picture"
            src={image as string}
            className="lg:w-[1200px] lg:h-[500px] w-full h-full "
          />
        </div>
        <div className="text-lg font-light my-8 text-justify pe-4 ">
          <QuilToNormalHTML content={content} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
