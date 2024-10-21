import { TPost } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import PostDetailsSidebar from "./PostDetailsSidebar";
import QuilToNormalHTML from "../QuilToNormalHTML/QuilToNormalHTML";
// import CardFooter from "../../UI/CardFooter";

const PostDetails = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, Votes } = post;
  // console.log(post);
  const { _id: authorId, name, email, profilePicture } = post?.author;
  return (
    <div className="lg:mx-9 my-10 p-5 lg:p-0">
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

          <PostDetailsSidebar post={post} />
        </div>
      </div>

      <div className="flex justify-end me-10 mb-2">
        <h4>
          <span className="text-xl font-bold me-1">{Votes}</span>Votes
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
