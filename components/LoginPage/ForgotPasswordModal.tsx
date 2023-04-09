import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import {
//   forgotPasswordAtLogin,
//   resetPasswordAtLogin,
// } from "../../actions/auth.action";
import {
  useForgotPasswordAtLoginMutation,
  useResetPasswordAtLoginMutation,
} from "../rtkQuery/productApi";
import ModalClose from "../ModalClose/ModalClose";
import { forgetPasswordToken } from "../app/tools/userSlice/userSlice";
import styles from "./LoginPage.module.css";

const ForgotPasswordModal = ({ setForgotPasswordModal }: any) => {
  // const auth = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state?.user);
  console.log("accessTokenaccessTokenaccessToken", accessToken);
  const [
    forgotPasswordAtLogin,
    { data: loginUserInfo, isError, isSuccess, error },
  ] = useForgotPasswordAtLoginMutation();
  console.log("forgotPasswordAtLogin loginUserInfo1", loginUserInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const dispatch = useDispatch();
  const handleForgotPassword = (data: any) => {
    // dispatch(forgotPasswordAtLogin(data));
    forgotPasswordAtLogin(data);
  };
  return (
    <>
      <input
        type="checkbox"
        id="forgotPasswordModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box relative">
          {accessToken ? (
            <OtpScreen setForgotPasswordModal={setForgotPasswordModal} />
          ) : (
            <EmailScreen setForgotPasswordModal={setForgotPasswordModal} />
          )}
        </div>
      </div>
    </>
  );
};

const EmailScreen = ({ setForgotPasswordModal }: any) => {
  // const auth = useSelector((state) => state.auth);
  const [
    forgotPasswordAtLogin,
    { data: loginUserInfo, isError, isSuccess, error },
  ] = useForgotPasswordAtLoginMutation();
  const token = loginUserInfo?.token;
  console.log("forgotPasswordAtLogin loginUserInfo2", loginUserInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  if (isSuccess) {
    dispatch(forgetPasswordToken({ token: token }));
  }

  const handleForgotPassword = (data: any) => {
    forgotPasswordAtLogin(data);
    // dispatch(forgotPasswordAtLogin(data));
  };
  return (
    <>
      <h2 className="text-3xl text-center font-bold">Enter Your Email</h2>
      <p className="text-center mb-5 mt-1 text-slate-500">
        Check Out Also Your Promotion Tab
      </p>
      <form
        onSubmit={handleSubmit(handleForgotPassword)}
        className={`${styles.loginForm}`}
      >
        <input
          type="text"
          id="forgotPasswordEmail"
          placeholder="Enter email here"
          style={{ marginTop: "5px", fontSize: "20px" }}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email",
            },
          })}
        />
        <span className="text-red-500">
          {errors?.email?.type === "required" && errors?.email?.message}
        </span>
        <span className="text-red-500">
          {errors?.email?.type === "pattern" && errors?.email?.message}
        </span>
        <span className="font-bold block text-red-500 text-center mt-4">
          {loginUserInfo?.forgotAndResetPassword?.error}
        </span>
        <input
          type="submit"
          className="btn btn-primary text-white text-xl"
          value="Send OTP Email"
          style={{ marginTop: "15px" }}
        />
      </form>
      <span
        onClick={() => setForgotPasswordModal(false)}
        className="p-2 bg-slate-200 rounded-full absolute cursor-pointer top-3 right-3"
      >
        <MdClose fontSize={25} />
      </span>
    </>
  );
};

const OtpScreen = ({ setForgotPasswordModal }: any) => {
  // const auth = useSelector((state) => state.auth);
  const { accessToken } = useSelector((state) => state?.user);
  const [
    resetPasswordAtLogin,
    { data: resetPasswordInfo, isError, isSuccess, error },
  ] = useResetPasswordAtLoginMutation();

  console.log("OtpScreenOtpScreen1", resetPasswordInfo);
  console.log("isSuccessisSuccessisSuccess", isSuccess);
  console.log("errorerrorerror", error);

  if (isSuccess) {
    console.log("OtpScreenOtpScreen222", resetPasswordInfo);
    setForgotPasswordModal(false);
    toast.success("Successfully Changed The Password", {
      hideProgressBar: true,
      position: "bottom-center",
      progress: undefined,
      theme: "dark",
      draggable: true,
      style: { borderRadius: 0 },
      autoClose: 6000,
      pauseOnHover: false,
    });
  }

  const inputContainerRef = useRef();
  const otherInputRef = useRef();
  const firstInputRef = useRef();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [passwordShow, setPasswordShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [firstInputRef]);
  const handleOtpChange = (e: any, index: any) => {
    setOtp([
      ...otp.map((value, i) =>
        i === index
          ? e.target.value.length > 1
            ? e.target.value.slice(0, 1)
            : e.target.value
          : value
      ),
    ]);

    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const handleBackSpace = (e: any) => {
    if (e.key === "Backspace") {
      setOtp(new Array(6).fill(""));
      inputContainerRef.current?.firstChild?.focus();
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const handleResetPassword = (data: any) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match", {
        hideProgressBar: true,
        progress: undefined,
        theme: "dark",
        draggable: true,
        style: { borderRadius: 0 },
        autoClose: 6000,
        pauseOnHover: false,
      });
    } else {
      const params = {
        otp: Number(otp.join("")),
        newPassword: data.password,
        resetPasswordToken: accessToken,
        // resetPasswordToken: resetPasswordInfo?.forgotAndResetPassword?.token,
      };
      resetPasswordAtLogin(params);
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center font-bold">Enter The OTP</h2>
      <p className="text-center mb-5 mt-1 text-slate-500">
        Check Out The Email We Sent To You. <br /> (Also Check The Promotion
        Tab)
      </p>
      <form
        onSubmit={handleSubmit(handleResetPassword)}
        className={`${styles.loginForm}`}
      >
        <div
          ref={inputContainerRef}
          className="flex items-center justify-center md:px-12"
        >
          {otp.map((o, index) => {
            console.log("ooooooooottttttppppp", o);
            return (
              <input
                type="number"
                ref={index === 0 ? firstInputRef : otherInputRef}
                maxLength={1}
                onChange={(e) => handleOtpChange(e, index)}
                value={o.length > 1 ? o.slice(0, 1) : o}
                key={index}
                style={{
                  margin: "0 5px",
                  height: "45px",
                  width: "100%",
                  textAlign: "center",
                  paddingLeft: 0,
                  fontSize: "23px",
                }}
                onKeyUp={(e) => handleBackSpace(e)}
                onFocus={(e) => e.target.select()}
                placeholder={0}
              />
            );
          })}
        </div>
        <div className="mt-6">
          <label htmlFor="newPassword" className="mt-6">
            New Password
          </label>
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="New Password"
            style={{ marginTop: 0 }}
            id="newPassword"
            autoComplete="new-password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          <span className="block text-red-500">
            {errors?.password?.type === "required" && "Password is required"}
          </span>
          <span className="block text-red-500">
            {errors?.password?.type === "minLength" &&
              "At least 6 characters needed"}
          </span>
        </div>
        <div className="mt-6">
          <label htmlFor="confirmNewPassword">Confirm New Password</label>
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="Confirm New Password"
            autoComplete="new-password"
            style={{ marginTop: 0 }}
            id="confirmNewPassword"
            {...register("confirmPassword", {
              required: true,
              minLength: 6,
            })}
          />
        </div>
        <FormControlLabel
          control={<Checkbox />}
          label="Show Password"
          onChange={() => setPasswordShow(!passwordShow)}
        />
        <span className="block text-red-500 text-center text-md">
          {resetPasswordInfo?.forgotAndResetPassword?.error}
        </span>
        <input
          type="submit"
          className="btn btn-primary text-white text-xl"
          value="Submit"
          style={{ marginTop: "15px" }}
          disabled={
            errors.password || errors.confirmPassword || otp.join("").length < 6
              ? true
              : false
          }
        />
      </form>
      <ModalClose rounded handleClose={() => setForgotPasswordModal(false)} />
    </>
  );
};

export default ForgotPasswordModal;
