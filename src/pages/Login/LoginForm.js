import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Login</h1>
      <form className="space-y-5">
        <div>
          <label htmlFor="email" className="text-sm capitalize">
            Phone number
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border rounded p-2 focus:border-green-400 focus:border focus:outline-none bg-white/50 "
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm capitalize">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border rounded p-2 focus:border-green-400 focus:border focus:outline-none bg-white/50 "
          />
        </div>
        <button
          type="submit"
          className="w-full text-center bg-green-400 p-2 text-white rounded font-medium  text-md hover:bg-green-500 hover:w-24 block mx-auto transition-all"
        >
          Login
        </button>
      </form>
      <p className="mt-5 text-sm text-slate-400 text-center">
        Not registered yet? <Link to="register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
