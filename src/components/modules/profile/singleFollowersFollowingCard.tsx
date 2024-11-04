import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";

import { TUser } from "@/src/types";

const SingleFollowersFollowingCard = ({ user }: { user: TUser }) => {
  return (
    <div className="ms-1 my-4 px-4">
      <div key={user?._id} className="flex items-center gap-2">
        <Link href={`/singleUser/${user?._id}`}>
          <Avatar
            alt="User Picture"
            className="me-2"
            src={user?.profilePicture}
          />
        </Link>
        <div>
          <Link href={`/singleUser/${user?._id}`}>
            <h4 className="text-xl">{user?.name}</h4>
          </Link>

          <h4 className="text-sm text-gray-500 ">{user?.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleFollowersFollowingCard;
