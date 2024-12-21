"use client";

import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { useGetUserAnalyticsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";
import { Spinner } from "@nextui-org/spinner";

const HomeLeftSidebar = () => {
  const user = useAppSelector(currentUser);

  const targetLink = user?.role === "admin" ? "/admin" : "/profile";

  const { data } = useGetUserAnalyticsQuery({});

  const analytics = data?.data;

  // console.log(analytics);
  const { data: AllUsers } = useGetUsersQuery({});
  const verifiedUser = AllUsers?.data?.find((vUser: any) =>
    user?._id?.includes(vUser._id)
  );

  return (
    <div className="   w-full ms-5">
      <div className="lg:fixed  lg:w-[19%]">
        <div className="border-2 border-solid shadow-sm rounded-md  ">
          <div
            className="bg-gray-300 h-[100px] flex items-center justify-center "
            style={{
              backgroundImage: `url(https://tse1.mm.bing.net/th?id=OIP.xLh7BfYiyq0DY2dlTEqhfgHaEo&pid=Api&P=0&h=220)`,
            }}
          >
            <div className="bg-gray-100 rounded-full mt-24 ">
              <Link href={targetLink}>
                <Image
                  alt="Profile Picture"
                  className=" w-[120px] h-[100px]  rounded-full "
                  src={user?.profilePicture as string}
                />
              </Link>
            </div>
          </div>
          <div className="mt-14 mb-10">
            <div className=" flex justify-center items-center gap-1   mt-2">
              <div>
                <Link href={targetLink}>
                  <h4 className="text-2xl primary-color font-semibold ">
                    {user?.name}
                  </h4>
                </Link>
              </div>
              <div className="">
                {verifiedUser?.verified === true && (
                  <>
                    <svg
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            </div>
            <Link className="text-center flex justify-center" href={targetLink}>
              <h4 className="text-center hover:underline text-xl mb-4 text-black ">
                {user?.email}
              </h4>
            </Link>

            <Divider />
            <div className="text-center mt-2 mb-3">
              <h4 className="primary-color text-4xl font-bold">
                {analytics?.totalViews}
              </h4>
              <p>views of your posts</p>
            </div>
            <Divider />
            <div className="text-center mt-2">
              <h4 className="primary-color text-4xl font-bold">
                {analytics?.totalVotes}
              </h4>
              <p>votes of your posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeftSidebar;
