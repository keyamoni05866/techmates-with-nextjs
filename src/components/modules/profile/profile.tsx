"use client";
import { Image } from "@nextui-org/image";
import { toast } from "sonner";

import PostModal from "../../UI/PostModal/postModal";
import UserUpdateModal from "../../UI/UserRelatedModal/UserUpdateModal";

import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hook";
import { useGetUsersPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import {
  useGetUsersQuery,
  usePaymentMutation,
} from "@/src/redux/Api/UserApi/userApi";

const Profile = () => {
  const user = useAppSelector(currentUser);
  const { data: posts } = useGetUsersPostsQuery({});

  const [payment] = usePaymentMutation();
  const { data: AllUsers } = useGetUsersQuery({});
  const verifiedUser = AllUsers?.data?.find((vUser: any) =>
    user?._id?.includes(vUser._id)
  );

  const handlePayment = async () => {
    const paymentData = {
      amount: 20,
    };
    const res = await payment({ paymentData }).unwrap();

    console.log(res);
    if (res.success === true) {
      toast.loading("Loading");
      window.location.href = res.data.payment_url;
    }
  };

  // ${user?.profilePicture}
  return (
    <div className="  ">
      <div
        className=" h-[180px] lg:h-[350px] w-full bg-cover  bg-center lg:rounded-xl"
        style={{
          backgroundImage: `url(https://tse1.mm.bing.net/th?id=OIP.xLh7BfYiyq0DY2dlTEqhfgHaEo&pid=Api&P=0&h=220)`,
        }}
      >
        <div className="flex items-center justify-between pt-28 lg:pt-40 ps-4 lg:ps-10  h-full">
          <div>
            <Image
              alt="Profile Picture"
              className=" size-24 lg:w-[150px] lg:h-[150px]  rounded-full border"
              src={user?.profilePicture as string}
            />
          </div>
          <div className="pt-28 pe-5">
            <UserUpdateModal />
          </div>
        </div>
        <div className="mt-4 mx-2 lg:flex justify-between ">
          <div>
            <div className="flex gap-1 items-center">
              <h4 className="text-xl font-semibold">{user?.name}</h4>
              <div className="">
                {verifiedUser?.verified === true ? (
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
                ) : (
                  <>
                    <button
                      className="px-2 text-sm border-[3px] border-dashed py-1 rounded-xl hover:bg-[#051c34] hover:text-white transition duration-300 ease-in-out hover:scale-105"
                      onClick={() => handlePayment()}
                    >
                      Verify Now
                    </button>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm primary-color">{user?.email}</p>
          </div>

          <div className="mt-2 lg:mt-0">
            <div className="flex gap-10">
              <h4 className="text-md">
                <span className="font-semibold me-2">posts:</span>
                {posts?.data?.length}{" "}
              </h4>
              <h4 className="text-md ">
                <span className="font-semibold me-2">followers:</span>
                {user?.followers?.length}{" "}
              </h4>
              <h4 className="text-md ">
                <span className="font-semibold me-2">following:</span>
                {user?.following?.length}
              </h4>
            </div>
          </div>
        </div>

        <div className="my-8">
          <PostModal />
        </div>
      </div>

      {/* <div className="  ">
        <div className="">
          <Image
            alt="Profile Picture"
            className=" w-[325px] h-[250px]  rounded-xl "
            src={user?.profilePicture as string}
          />
        </div>
        <div className=" flex items-center gap-3   mt-2">
          <div>
            <h4 className="text-4xl primary-color font-semibold ">
              {user?.name}
            </h4>
          </div>
          <div className="mt-2">
            {verifiedUser?.verified === true ? (
              <>
                <svg
                  className="size-6"
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
            ) : (
              <>
                <button
                  className="px-2 text-sm border-[3px] border-dashed py-1 rounded-xl hover:bg-[#051c34] hover:text-white transition duration-300 ease-in-out hover:scale-105"
                  onClick={() => handlePayment()}
                >
                  Verify Now
                </button>
              </>
            )}
          </div>
        </div>
        <h4 className="text-2xl mb-2 ">{user?.email}</h4>
        <div className=" flex gap-6 mb-2">
          <UserUpdateModal />
          <PostModal />
        </div>
      </div>

      <div className="flex gap-10">
        <h4 className="text-md">
          <span className="font-semibold">{posts?.data?.length}</span> posts
        </h4>
        <h4 className="text-md ">
          <span className="font-semibold">{user?.followers?.length}</span>{" "}
          followers
        </h4>
        <h4 className="text-md ">
          <span className="font-semibold">{user?.following?.length}</span>{" "}
          following
        </h4>
      </div>

      <div className="mt-2">
        <h4 className="text-lg flex gap-4 items-center">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-semibold ms-1">{user?.number}</span>{" "}
        </h4>
        <h4 className="text-lg flex gap-4 items-center mt-3">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="font-semibold ms-1">{user?.address}</span>
        </h4>
      </div> */}
    </div>
  );
};

export default Profile;
