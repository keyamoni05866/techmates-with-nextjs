import HomeSidebar from "../../../components/modules/homeSidebar/HomeSidebar";

import HomeLeftSidebar from "@/src/components/modules/homeLeftSidebar/HomeLeftSidebar";
import AllPosts from "@/src/components/modules/AllPosts/AllPosts";

const HomePage = () => {
  return (
    <div className="  grid grid-cols-12 mx-auto  gap-x-6 mt-3 lg:mt-12">
      <div className="hidden md:block  md:col-span-3 ">
        <HomeLeftSidebar />
      </div>
      <div className=" col-span-12 md:col-span-6 ">
        <AllPosts />
      </div>
      <div className=" hidden md:block md:col-span-2 ">
        <HomeSidebar />
      </div>
    </div>
  );
};

export default HomePage;
