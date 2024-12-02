"use client";

import { useGetAllUsersPostsAnalyticsQuery } from "@/src/redux/Api/PostApi/postApi";
import { Spinner } from "@nextui-org/spinner";

import ContentChart from "./ContentChart";

const ContentAnalytics = () => {
  const { data, isLoading } = useGetAllUsersPostsAnalyticsQuery({});

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner color="default" size="lg" />
      </div>
    );
  }

  const analytics = data?.data;

  return (
    <div className="py-5 px-5 lg:px-3 ">
      <div className="lg:flex   gap-6  rounded-2xl  justify-center mb-4">
        <div className="shadow-md rounded-xl">
          <div className="p-10 text-center">
            <div className="text-xl font-semibold">All Post Views</div>
            <div className="text-2xl font-bold">{analytics?.totalViews}</div>
          </div>
        </div>

        <div className="shadow-md rounded-xl">
          <div className="p-10 text-center">
            <div className="text-xl font-semibold">All Post Votes</div>
            <div className="text-2xl font-bold">{analytics?.totalVotes}</div>
          </div>
        </div>

        <div className="shadow-md rounded-xl">
          <div className="p-10 text-center">
            <div className="text-xl font-semibold">All Post Comments</div>
            <div className="text-2xl font-bold">{analytics?.totalComments}</div>
          </div>
        </div>
      </div>
      <div className="lg:w-[800px] lg:mx-auto h-[350px]">
        <ContentChart data={analytics} />
      </div>
    </div>
  );
};

export default ContentAnalytics;
