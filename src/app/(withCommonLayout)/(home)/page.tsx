import HomeSidebar from "../../../components/modules/homeSidebar/HomeSidebar";

import AllPosts from "@/src/components/modules/AllPosts/AllPosts";

const HomePage = () => {
  return (
    <div className="lg:flex lg:justify-between ">
      <div className="lg:w-[70%] w-full">
        <AllPosts />
      </div>
      <div className="lg:w-[30%] w-full lg:me-10 mb-10">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default HomePage;
