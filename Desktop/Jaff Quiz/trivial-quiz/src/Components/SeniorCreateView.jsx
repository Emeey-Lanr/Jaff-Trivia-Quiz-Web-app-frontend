import CreateModal from "./CreateModal";
import DashbarNav from "./DashbarNav";
import Sidebar from "./Sidebar";
import CreatView from "./CreatView";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
import SideBarBack from "./SideBarBack";
const SeniorCreateView = () => {
  const { setSideBarBoxShadow, setShowCreateModal, setCurrentSet } =
    useContext(appContext);
  useEffect(() => {
    setSideBarBoxShadow(4);
    setCurrentSet("Senior");
    setShowCreateModal(false);
  }, []);
  return (
    <>
      <div className="w-100">
        <div className="w-10p bg-dashback-100">
          <CreatView />
        </div>
        <CreateModal />
        <SideBarBack />
        <DashbarNav />
        <Sidebar />
      </div>
    </>
  );
};

export default SeniorCreateView;
