import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestResult } from "../../../redux/actions/studentActions";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Body from "./Body";

const TestResult = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch test results based on user's department, year, and section
    dispatch(
      getTestResult(
        user.result.department,
        user.result.year,
        user.result.section
      )
    );
  }, [dispatch, user.result.department, user.result.year, user.result.section]);

  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col bg-[#f4f6fa] h-[95%] w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default TestResult;
