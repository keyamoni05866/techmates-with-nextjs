"use client";

import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { TPost } from "@/src/types";
import { Spinner } from "@nextui-org/spinner";
import CardUI from "../../UI/CardUI";

const AllPosts = () => {
  const { data: AllPosts, isLoading } = useGetAllPostsQuery({});
  //   console.log(AllPosts);
  return (
    <div>
      <div className="my-8 max-w-[800px] mx-auto ">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner color="secondary" />
          </div>
        ) : AllPosts?.data && AllPosts?.data?.length > 0 ? (
          AllPosts?.data?.map((post: TPost) => (
            <CardUI post={post} key={post._id} />
          ))
        ) : (
          <>
            <h4 className="text-xl text-center font-semibold">
              No Post Found!!!
            </h4>
          </>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
