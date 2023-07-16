import React from "react";
import Sidebar from "./sidebar";
interface layoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="bg-white-900 py-6">
      <div className="  container mx-auto">
        <div className=" flex gap-10">
          <div className=" basis-[20%] px-10 py-6 bg-white-200">
            <Sidebar />
          </div>
          <div className=" basis-[75%]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;