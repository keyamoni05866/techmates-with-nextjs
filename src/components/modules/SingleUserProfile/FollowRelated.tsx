import { toast } from "sonner";

import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "@/src/redux/Api/UserApi/userApi";
import {
  currentToken,
  currentUser,
  signInUser,
} from "@/src/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";

const FollowRelated = ({ followingId }: { followingId: string }) => {
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const token = useAppSelector(currentToken);
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(currentUser);
  // const [isFollow, setIsFollow] = useState(false);
  const isFollowing = loggedInUser?.following?.includes(followingId);
  const handleFollow = async () => {
    // console.log(followingId);

    try {
      const res = await followUser({
        followerId: loggedInUser?._id,
        followingId,
      }).unwrap();

      // console.log(res);
      if (res.success) {
        toast.success(`${res.message}`, { duration: 3000 });
        const userInfo = res.data?.user;

        dispatch(signInUser({ userInfo, token }));
      }
    } catch (err: any) {
      toast.error(err.data?.message, { duration: 3000 });
    }
  };
  const handleUnFollow = async () => {
    // console.log(followingId);

    try {
      const res = await unfollowUser({
        followerId: loggedInUser?._id,
        followingId,
      }).unwrap();

      console.log(res);
      if (res.success) {
        toast.success(`${res.message}`, { duration: 3000 });
        const userInfo = res.data?.user;

        dispatch(signInUser({ userInfo, token }));
      }
    } catch (err: any) {
      toast.error(err.data?.message, { duration: 3000 });
    }
  };

  return (
    <>
      {loggedInUser ? (
        <>
          {isFollowing ? (
            <>
              <button
                className="text-sm px-6 py-2  border rounded-xl hover:bg-black hover:text-white "
                onClick={handleUnFollow}
              >
                Unfollow
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className="text-sm px-5  border rounded-xl hover:bg-black hover:text-white "
                onClick={handleFollow}
              >
                Follow
              </button>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FollowRelated;
