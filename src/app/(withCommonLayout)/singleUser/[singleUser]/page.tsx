"use client";

import SingleUserProfileContainer from "@/src/components/modules/SingleUserProfile/SingleUserProfileContainer";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetSingleUserQuery } from "@/src/redux/Api/UserApi/userApi";
import { TPost } from "@/src/types";
import { Spinner } from "@nextui-org/spinner";

const page = ({ params }: { params: { singleUser: string } }) => {
  const { singleUser } = params;
  const { data: userData, isLoading } = useGetSingleUserQuery(singleUser);
  const { data: allPosts } = useGetAllPostsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" color="default" />
      </div>
    );
  }

  const user = userData?.data;
  const AllPost = allPosts?.data;
  const filterUserPosts = AllPost?.filter(
    (post: TPost) => post?.author._id === user?._id
  );
  //   console.log(filterUser);
  //   console.log(params);
  //   console.log(userData);
  return (
    <div>
      <SingleUserProfileContainer
        user={user}
        filterUserPosts={filterUserPosts}
      />
    </div>
  );
};

export default page;
