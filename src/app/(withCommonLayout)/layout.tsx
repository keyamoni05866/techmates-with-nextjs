import { Navbar } from "@/src/components/UI/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="  ">{children}</div>
    </div>
  );
};

export default layout;
