import { Navbar } from "@/src/components/UI/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className=" max-w-5xl mx-auto">{children}</div>
    </>
  );
};

export default layout;
