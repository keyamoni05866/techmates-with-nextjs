import { Spinner } from "@nextui-org/spinner";
import { Tab, Tabs } from "@nextui-org/tabs";

import SinglePostCard from "./singlePostCard";
import SingleFollowersFollowingCard from "./singleFollowersFollowingCard";
import Chart from "./Chart";

import {
  useGetUserAnalyticsQuery,
  useGetUsersPostsQuery,
} from "@/src/redux/Api/PostApi/postApi";
import { TPost, TUser } from "@/src/types";
import { useAppSelector } from "@/src/redux/hook";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";

const TabsOptions = () => {
  const { data: usersPosts, isLoading } = useGetUsersPostsQuery({});
  const user = useAppSelector(currentUser);
  // console.log(user?.followers);
  // lg:fixed lg:z-20 lg:ms-4
  const { data: AllUsers, isLoading: UserLoading } = useGetUsersQuery({});
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
  const { data } = useGetUserAnalyticsQuery({});

  // console.log(data);
  const analytics = data?.data;

  // console.log(analytics);
  return (
    <Tabs
      aria-label="Tabs variants"
      className="flex justify-start  mt-72  "
      variant="solid"
    >
      <Tab
        key="posts"
        title={
          <div className="flex items-center space-x-1 ">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Posts</span>
          </div>
        }
      >
        <div className="lg:mt-8 mt-4 mb-6 max-w-[800px]  ">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner color="secondary" />
            </div>
          ) : usersPosts?.data && usersPosts?.data?.length > 0 ? (
            usersPosts?.data?.map((post: TPost) => (
              <SinglePostCard key={post._id} post={post} />
            ))
          ) : (
            <>
              <h4 className="text-xl text-center font-semibold">
                No Post Found!!!
              </h4>
            </>
          )}
        </div>
      </Tab>
      <Tab
        key="followers"
        title={
          <div className="flex items-center space-x-1 ">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Followers</span>
          </div>
        }
      >
        <div className="lg:mt-8 mt-4  mx-auto ">
          {UserLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner color="secondary" />
            </div>
          ) : getFollowers && getFollowers?.length > 0 ? (
            getFollowers?.map((user: TUser) => (
              <SingleFollowersFollowingCard key={user?._id} user={user} />
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
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Following</span>
          </div>
        }
      >
        <div className="lg:mt-8 mt-4  mx-auto ">
          {UserLoading ? (
            <div className="flex justify-center items-center h-64">
              <Spinner color="secondary" />
            </div>
          ) : getFollowingUsers && getFollowingUsers?.length > 0 ? (
            getFollowingUsers?.map((user: TUser) => (
              <SingleFollowersFollowingCard key={user?._id} user={user} />
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
      <Tab
        key="analytics"
        title={
          <div className="flex items-center space-x-1 ">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Analytics</span>
          </div>
        }
      >
        <div className="lg:mt-8 mt-4  mx-auto ">
          <div className="lg:flex   gap-6  rounded-2xl mt-10 justify-center items-center mb-10">
            <div className="shadow-md rounded-xl">
              <div className="p-10 text-center">
                <div className="text-xl font-semibold">Total Views</div>
                <div className="text-2xl font-bold">
                  {analytics?.totalViews}
                </div>
              </div>
            </div>

            <div className="shadow-md rounded-xl">
              <div className="p-10 text-center">
                <div className="text-xl font-semibold">Total Votes</div>
                <div className="text-2xl font-bold">
                  {analytics?.totalVotes}
                </div>
              </div>
            </div>

            <div className="shadow-md rounded-xl">
              <div className="p-10 text-center">
                <div className="text-xl font-semibold">Total Comments</div>
                <div className="text-2xl font-bold">
                  {analytics?.totalComments}
                </div>
              </div>
            </div>
          </div>
          <Chart data={analytics} />
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabsOptions;
