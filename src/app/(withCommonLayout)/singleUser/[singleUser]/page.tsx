"use client";

import { Spinner } from "@nextui-org/spinner";

import SingleUserProfileContainer from "@/src/components/modules/SingleUserProfile/SingleUserProfileContainer";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import { useGetSingleUserQuery } from "@/src/redux/Api/UserApi/userApi";
import { TPost } from "@/src/types";

const SingleUserPage = ({ params }: { params: { singleUser: string } }) => {
  const { singleUser } = params;
  const { data: userData, isLoading } = useGetSingleUserQuery(singleUser);
  const { data: allPosts } = useGetAllPostsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner color="default" size="lg" />
      </div>
    );
  }

  const user = userData?.data;
  const AllPost = allPosts?.data;
  const filterUserPosts = AllPost?.filter(
    (post: TPost) => post?.author._id === user?._id,
  );

  //   console.log(filterUser);
  //   console.log(params);
  //   console.log(userData);
  return (
    <div>
      <SingleUserProfileContainer
        filterUserPosts={filterUserPosts}
        user={user}
      />
    </div>
  );
};

export default SingleUserPage;
