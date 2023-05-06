import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lotties/login.json";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Checkbox, FormControlLabel } from "@mui/material";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAddLoginUserMutation } from "../features/auth/authApi";

const LoginPage = () => {
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [
    addLoginUser,
    { data: loginUserInfo, isLoading, isError, isSuccess, error },
  ] = useAddLoginUserMutation<any>();

  console.log("useAddLoginUserMutation", loginUserInfo);

  console.log("data:isSuccess", isSuccess);
  console.log("data:isError", isError);
  console.log("data:error.data", error);
  console.log("data.isLoading", isLoading);

  if (isSuccess) {
    const token = loginUserInfo?.token;
    const user = loginUserInfo?.user;
    console.log("token user", token, user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("data:loginUserInfo1", loginUserInfo);
    router.push("/");
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleFormSubmit = (data: any) => {
    addLoginUser(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Login - Ekpoloke</title>
      </Helmet>
      <div className="flex justify-center items-center w-full bg-primary h-[120px]">
        <span>Ad</span>
      </div>
      <div className="container flex flex-col items-center justify-center p-0 mx-auto lg:flex-row md:flex-row lg:p-10 md:p-6">
        <div className="lg:w-[50%] md:w-[70%] w-[100%] flex items-center justify-center">
          <Lottie
            style={{ width: "70%" }}
            animationData={loginLottie}
            loop={false}
          />
        </div>
        <div className="w-full p-6 lg:flex-1 lg:p-0">
          <h2 className="text-5xl font-bold text-center">
            Log<span className="text-primary">in</span>
          </h2>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className={`${styles.loginForm} lg:px-[30px]`}
          >
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              placeholder="Email"
            />
            <span className="block text-red-500">
              {errors?.email?.type === "required" && "Email is required"}
              {errors?.email?.type === "pattern" && "Valid Email is required"}
            </span>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
            />
            <span className="block text-red-500">
              {errors?.password?.type === "required" && "Password Is Required"}
              {errors?.password?.type === "minLength" &&
                "At least 6 characters required"}
            </span>
            <div className="flex items-center mt-[15px] justify-between">
              <FormControlLabel
                control={<Checkbox />}
                label="Show Password"
                onChange={() => setPasswordShow(!passwordShow)}
              />
              <label
                htmlFor="forgotPasswordModal"
                onClick={() => setForgotPasswordModal(true)}
                className="cursor-pointer text-primary"
              >
                Forgot Password?
              </label>
            </div>
            <span className="block font-bold text-red-500">
              {error?.data?.error}
            </span>
            <input
              type="submit"
              value="Login"
              className={`btn btn-primary text-white font-bold text-xl block w-full ${styles.loginSubmitBtn}`}
              disabled={errors.password || errors.email ? true : false}
            />
          </form>
          <div className="flex justify-between px-0 mt-4 font-bold lg:px-8">
            <Link href="/register" className="text-secondary">
              Register
            </Link>
            <Link href="/" className="text-secondary">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
      {forgotPasswordModal && (
        <ForgotPasswordModal setForgotPasswordModal={setForgotPasswordModal} />
      )}
    </div>
  );
};

export default LoginPage;
