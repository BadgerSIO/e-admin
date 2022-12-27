import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  //recaptcha verify fuction
  const onRecaptchaVerify = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (data) => {
    const phoneNumber = "+8801534744785";
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    onRecaptchaVerify();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        const code = window.prompt("Enter password");
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log("user signed in");
            navigate("/dashboard");
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };
  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Login</h1>

      <form className="space-y-5" onSubmit={handleSubmit(onSignInSubmit)}>
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
          {errors.password && <p>{errors}</p>}
        </div>
        <button
          type="submit"
          className="w-full text-center bg-green-400 p-2 text-white rounded font-medium  text-md hover:bg-green-500 block mx-auto transition-all"
        >
          Login
        </button>
      </form>
      <p className="mt-5 text-sm text-slate-400 text-center">
        Not registered yet?
        <Link className="text-black hover:text-green-500" to="register">
          Register here
        </Link>
      </p>
      <div id="sign-in-button" className="absolute bottom-0 left-0"></div>
    </div>
  );
};

export default LoginForm;
