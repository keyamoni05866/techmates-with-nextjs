import HomeSidebar from "../../../components/modules/homeSidebar/HomeSidebar";

import HomeLeftSidebar from "@/src/components/modules/homeLeftSidebar/HomeLeftSidebar";
import AllPosts from "@/src/components/modules/AllPosts/AllPosts";

const HomePage = () => {
  return (
    <div className=" max-w-7xl grid grid-cols-12 mx-auto  gap-4  mt-3 lg:mt-12">
      <div className="hidden md:block  md:col-span-3 ">
        <HomeLeftSidebar />
      </div>
      <div className=" col-span-12 md:col-span-6 ">
        <AllPosts />
      </div>
      <div className=" hidden md:block md:col-span-3 ">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default HomePage;
