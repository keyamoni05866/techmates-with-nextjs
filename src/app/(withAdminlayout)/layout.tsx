import DashboardHeader from "@/src/components/modules/Dashboard/DashboardSidebar/DashboardHeader";
import DashboardSidebar from "@/src/components/modules/Dashboard/DashboardSidebar/DashboardSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-gray-200">
      <DashboardSidebar />

      <div className="  w-full m-4   ">
        <DashboardHeader />
        <div className="bg-white w-full mt-3 rounded-xl">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
