const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default layout;
