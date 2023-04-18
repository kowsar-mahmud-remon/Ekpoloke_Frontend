import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lotties/register.json";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Helmet } from "react-helmet";
import Link from "next/link";
import styles from "./RegisterPage.module.css";
import { useRouter } from "next/router";
import { useAddUserMutation } from "../features/auth/authApi";

const RegisterPage = () => {
  const [user, setUser] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addUser, { data: userInfo, isLoading, isError, isSuccess, error }] =
    useAddUserMutation();

  if (isSuccess) {
    const token = userInfo?.token;
    const user = userInfo?.user;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleFormSubmit = (data: any) => {
    console.log("dataaaaaaaa", data);
    addUser(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Register - Ekpoloke</title>
      </Helmet>
      <div className="flex justify-center items-center w-full bg-primary h-[120px]">
        <span>Ad</span>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col container mx-auto items-center justify-center lg:p-10 md:p-6 p-0">
        <div className="lg:w-[50%] md:w-[70%] w-[100%] flex items-center justify-center">
          <Lottie
            style={{ width: "70%" }}
            animationData={registerLottie}
            loop={false}
          />
        </div>
        <div className="lg:flex-1 w-full lg:p-0 p-6">
          <h2 className="text-center text-5xl font-bold">
            Regi<span className="text-primary">ster</span>
          </h2>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className={`${styles.loginForm} ${styles.registerForm} lg:px-[30px]`}
            autoComplete="off"
          >
            <div className="flex items-center sm:flex-row flex-col justify-center gap-x-3">
              <input
                type="text"
                {...register("firstName", {
                  required: true,
                })}
                placeholder="First Name"
              />
              <input
                type="text"
                {...register("lastName", {
                  required: true,
                })}
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              placeholder="Email"
            />
            <span className="text-red-500 block">
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
            <span className="text-red-500 block">
              {errors?.password?.type === "required" && "Password Is Required"}
              {errors?.password?.type === "minLength" &&
                "At least 6 characters required"}
            </span>
            <FormControlLabel
              control={<Checkbox />}
              label="Show Password"
              onChange={() => setPasswordShow(!passwordShow)}
            />
            <span className="text-red-500 block font-bold">
              {error?.data?.error}
            </span>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary text-white font-bold text-xl block w-full loginSubmitBtn"
              disabled={errors.password || errors.email ? true : false}
            />
          </form>
          <div className="flex font-bold justify-between lg:px-8 px-0 mt-4">
            <Link href="/login" className="text-secondary">
              Login
            </Link>
            <Link href="/" className="text-secondary">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
