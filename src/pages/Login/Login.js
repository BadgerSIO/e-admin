import React from "react";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <h1 className=" text-xl mb-5">Welcome to healthOS</h1>
      <div className=" bg-white flex justify-center items-center ">
        <div className="bg-white/25 backdrop-blur-xl w-96 px-5 py-10 rounded border border-gray-200">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Login;
