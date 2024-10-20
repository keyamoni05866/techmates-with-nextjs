import PostDetails from "@/src/components/modules/PostDetails/PostDetails";
import envConfig from "@/src/config/envConfig";

const page = async ({ params }: { params: { singlePost: string } }) => {
  const res = await fetch(`${envConfig.baseApi}/post/${params?.singlePost}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const post = data?.data;
  return (
    <div className="flex justify-between">
      <PostDetails post={post} />
    </div>
  );
};

export default page;
