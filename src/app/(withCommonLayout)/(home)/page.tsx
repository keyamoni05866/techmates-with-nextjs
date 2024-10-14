import HomeSidebar from "@/src/components/modules/homeSidebar/homeSidebar";

const HomePage = () => {
  return (
    <div className="flex justify-between gap-10 mx-[50px] mt-10">
      <div className="w-[25%]  h-[330px]">
        <HomeSidebar />
      </div>
      <div className="w-[55%] bg-white   "></div>
      <div className="w-[20%] bg-white h-[380px]"></div>
    </div>
  );
};

export default HomePage;
