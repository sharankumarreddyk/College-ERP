import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDepartment, getAllSubject } from "../../../redux/actions/adminActions";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MarkAttendance = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllDepartment());
    dispatch(getAllSubject()); // Assuming you also need to fetch subjects
  }, [dispatch]);

  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col bg-[#f4f6fa] h-[95%] w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-hidden">
        <Header />
        <div className="flex flex-[0.95] overflow-hidden">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
