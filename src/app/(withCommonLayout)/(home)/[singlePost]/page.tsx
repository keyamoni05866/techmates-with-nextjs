"use client";

import PostDetails from "@/src/components/modules/PostDetails/PostDetails";
import { useGetSinglePostQuery } from "@/src/redux/Api/PostApi/postApi";
import { Spinner } from "@nextui-org/spinner";

const page = ({ params }: { params: { singlePost: string } }) => {
  const { singlePost } = params;
  const { data: postData, isLoading } = useGetSinglePostQuery(singlePost);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" color="default" />
      </div>
    );
  }
  const post = postData?.data;

  return (
    <div className="flex justify-between">
      <PostDetails post={post} />
    </div>
  );
};

export default page;
