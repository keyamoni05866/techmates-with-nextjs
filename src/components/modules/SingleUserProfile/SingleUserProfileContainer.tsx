import SingleUserProfile from "./SingleUserProfile";
import TabOptions from "./TabOptions";

import { TPost, TUser } from "@/src/types";

const SingleUserProfileContainer = ({
  user,
  filterUserPosts,
}: {
  user: TUser;
  filterUserPosts: TPost[];
}) => {
  return (
    <div className="lg:flex flex-row-reverse lg:justify-between lg:mx-10 mt-10 mb-10 lg:mb-0  mx-3 ">
      <div className="lg:w-[30%] w-full mb-5 mx-auto ">
        <SingleUserProfile filterUserPosts={filterUserPosts} user={user} />
      </div>
      <div className=" lg:w-[70%] w-full lg:me-10 mb-10">
        <TabOptions filterUserPosts={filterUserPosts} user={user} />
      </div>
    </div>
  );
};

export default SingleUserProfileContainer;
