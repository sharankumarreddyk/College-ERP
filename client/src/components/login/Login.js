import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen backdrop-blur-md flex justify-center items-center"
      style={{
        backgroundImage: `url('/loginimg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}> 
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold bg-black text-white w-full text-center py-3 bg-opacity-75 rounded-2xl mb-10">
          COLLEGE MANAGEMENT SYSTEM
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white">Admin</h1>
            <Link
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 mt-4">
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white">Faculty</h1>
            <Link
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 mt-4">
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold text-white">Student</h1>
            <Link
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 mt-4">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
