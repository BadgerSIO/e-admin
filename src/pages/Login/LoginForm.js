import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Login</h1>
      <form className="space-y-5" onSubmit={handleSubmit(login)}>
        <div>
          <label htmlFor="phoneNumber" className="text-sm capitalize">
            Phone number
          </label>
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "This field is required",
              pattern: {
                value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                message: "invalid number",
              },
            })}
            id="phoneNumber"
            className="w-full border rounded p-2 focus:border-green-400 focus:border focus:outline-none bg-white/50 "
          />
          {errors.phoneNumber && (
            <p className="text-red-500">
              <small>{errors?.phoneNumber?.message}</small>
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="text-sm capitalize">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Field is required" })}
            id="password"
            className="w-full border rounded p-2 focus:border-green-400 focus:border focus:outline-none bg-white/50 "
          />
          {errors.password && <p>{errors?.message}</p>}
        </div>
        <button className="w-full text-center bg-green-400 p-2 text-white rounded font-medium  text-md hover:bg-green-500 hover:w-24 block mx-auto transition-all">
          Login
        </button>
      </form>
      <p className="mt-5 text-sm text-slate-400 text-center">
        Not registered yet?
        <Link className="text-black hover:text-green-500" to="register">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
