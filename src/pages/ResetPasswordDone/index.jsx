import React from "react";
import { Link } from "react-router-dom";

import ButtonComponent from "../../components/Button";
// import InputComponent from "../../components/input";
import { BsCheckCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex justify-center text-ellipsis">
      <div className="p-2 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-lg items-center justify-center">
        <div className="grid place-items-center justify-center gap-2 ">
          <div className="grid my-4 shadow-[0_0_7px_rgba(11,156,49,0.6)] rounded-full w-10 h-10 items-center justify-center">
            <BsCheckCircle className=" text-green-500  shadow-[0_0_7px_rgba(11,156,49,0.6)] rounded" />
          </div>
          <p className="font-bold">Password reset</p>
          <p className="text-textColor">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
        </div>

        <Link to="/login">
          <ButtonComponent
            htmlType="submit"
            title="Continue "
            className="bg-primary text-textColorprimary rounded-full w-full mt-3"
          />
        </Link>

        <Link
          to="/login"
          className="flex font-bold items-center justify-center mt-6"
        >
          <p className="text-center text-textColor ">
            الرجوع لصفحة تسجيل الدخول{" "}
          </p>

          <BiArrowBack className="mr-3" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
