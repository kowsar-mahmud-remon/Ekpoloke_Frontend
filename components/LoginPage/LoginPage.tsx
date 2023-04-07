import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lotties/login.json";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
// import { login } from "../../actions";
import { Checkbox, FormControlLabel } from "@mui/material";
// import ForgotPasswordModal from "./ForgotPasswordModal";
import { Helmet } from "react-helmet";
import Link from "next/link";
import { useAddLoginUserMutation } from "../rtkQuery/productApi";

const LoginPage = () => {
  // const [passwordShow, setPasswordShow] = useState(false);
  // const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addLoginUser] = useAddLoginUserMutation();

  // const auth = useSelector((state) => state.auth);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (data: any) => {
    addLoginUser(data);
    console.log(addLoginUser);
    // dispatch(login(data));
  };

  // if (auth.authenticate) {
  //   navigate(from, { replace: true });
  // }
  // if (auth.authenticating) {
  //   return <Loading />;
  // }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Login - Ekpoloke</title>
      </Helmet>
      <div className="flex justify-center items-center w-full bg-primary h-[120px]">
        <span>Ad</span>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col container mx-auto items-center justify-center lg:p-10 md:p-6 p-0">
        <div className="lg:w-[50%] md:w-[70%] w-[100%] flex items-center justify-center">
          <Lottie
            style={{ width: "70%" }}
            animationData={loginLottie}
            loop={false}
          />
        </div>
        <div className="lg:flex-1 w-full lg:p-0 p-6">
          <h2 className="text-center text-5xl font-bold">
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
            <span className="text-red-500 block">
              {errors?.email?.type === "required" && "Email is required"}
              {errors?.email?.type === "pattern" && "Valid Email is required"}
            </span>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              // type={passwordShow ? "text" : "password"}
              placeholder="Password"
            />
            <span className="text-red-500 block">
              {errors?.password?.type === "required" && "Password Is Required"}
              {errors?.password?.type === "minLength" &&
                "At least 6 characters required"}
            </span>
            <div className="flex items-center mt-[15px] justify-between">
              <FormControlLabel
                control={<Checkbox />}
                label="Show Password"
                // onChange={() => setPasswordShow(!passwordShow)}
              />
              <label
                htmlFor="forgotPasswordModal"
                // onClick={() => setForgotPasswordModal(true)}
                className="text-primary cursor-pointer"
              >
                Forgot Password?
              </label>
            </div>
            {/* <span className="text-red-500 block font-bold">{auth?.error}</span> */}
            <input
              type="submit"
              value="Login"
              className={`btn btn-primary text-white font-bold text-xl block w-full ${styles.loginSubmitBtn}`}
              disabled={errors.password || errors.email ? true : false}
            />
          </form>
          <div className="flex font-bold justify-between lg:px-8 px-0 mt-4">
            <Link href="/register" className="text-secondary">
              Register
            </Link>
            <Link href="/" className="text-secondary">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
      {/* {forgotPasswordModal && (
        <ForgotPasswordModal setForgotPasswordModal={setForgotPasswordModal} />
      )} */}
    </div>
  );
};

export default LoginPage;
