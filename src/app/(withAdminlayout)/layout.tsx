import DashboardSidebar from "@/src/components/modules/Dashboard/DashboardSidebar/DashboardSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-200">
      <DashboardSidebar />

      <div className="  w-full m-4   ">
        <div className=" bg-white h-[80px] w-full p-10 rounded-xl  "></div>
        <div className="bg-white w-full mt-3 rounded-xl">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
