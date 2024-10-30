import { TPost, TUser } from "@/src/types";
import { Spinner } from "@nextui-org/spinner";
import { Tab, Tabs } from "@nextui-org/tabs";
import SinglePostCard from "../profile/singlePostCard";
import SingleUserPostCard from "./SingleUserPostCard";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";
import SingleFollowersFollowingCard from "../profile/singleFollowersFollowingCard";
const TabOptions = ({
  filterUserPosts,
  user,
}: {
  filterUserPosts: TPost[];
  user: TUser;
}) => {
  // console.log(user);

  const { data: AllUsers, isLoading } = useGetUsersQuery({});
  // console.log(AllUsers?.data);
  const followersIds = user?.followers;
  const followingIds = user?.following;
  const getFollowers = AllUsers?.data?.filter((user: any) =>
    followersIds?.includes(user._id)
  );
  // console.log(getFollowers);
  const getFollowingUsers = AllUsers?.data?.filter((user: any) =>
    followingIds?.includes(user._id)
  );
  // console.log(getFollowingUsers);
  return (
    <Tabs
      aria-label="Tabs variants"
      variant="solid"
      className="flex justify-center lg:fixed lg:z-20"
    >
      <Tab
        key="posts"
        title={
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>

            <span>Posts</span>
          </div>
        }
      >
        <div className="lg:mt-16 mt-4 max-w-[800px] mx-auto">
          {filterUserPosts?.map((post: TPost) => (
            <SingleUserPostCard post={post} key={post._id} />
          ))}
        </div>
      </Tab>
      <Tab
        key="followers"
        title={
          <div className="flex items-center space-x-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <span>Followers</span>
          </div>
        }
      >
        <div className="lg:mt-16 mt-4  mx-auto ">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner color="secondary" />
            </div>
          ) : getFollowers && getFollowers?.length > 0 ? (
            getFollowers?.map((FUser: TUser, index: number) => (
              <SingleFollowersFollowingCard user={FUser} key={index} />
            ))
          ) : (
            <>
              <h4 className="text-xl text-center font-semibold">
                No Followers Found!!!
              </h4>
            </>
          )}
        </div>
      </Tab>
      <Tab
        key="following"
        title={
          <div className="flex items-center space-x-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <span>Following</span>
          </div>
        }
      >
        <div className="lg:mt-16 mt-4  mx-auto ">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner color="secondary" />
            </div>
          ) : getFollowingUsers && getFollowingUsers?.length > 0 ? (
            getFollowingUsers?.map((FUser: TUser, index: number) => (
              <SingleFollowersFollowingCard user={FUser} key={index} />
            ))
          ) : (
            <>
              <h4 className="text-xl text-center font-semibold">
                No Following Found!!!
              </h4>
            </>
          )}
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabOptions;
