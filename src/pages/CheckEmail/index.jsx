import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex justify-center ">
      <div className="p-2 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-lg">
        <div className="grid place-items-center justify-center gap-2 py-5 ">
          <div className=" my-4 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-full w-10 ">
            <AiOutlineMail className="text-primary m-3" />
          </div>
          <p className="font-bold">Check your email </p>
          <p className="text-textColor"> open mail app to verify</p>
        </div>

        <div>
          <Link to="/setNewPassword">
          <ButtonComponent
            htmlType="submit"
            title="Open email app"
            className="bg-primary text-textColorprimary rounded-full w-full"
          />
          </Link>
        </div>
        <div className="flex py-5">
         
          <Link
          to=""
          className=" text-primary"
          >Click to resend</Link>
           <p>
         ?Didn’t receive the email 
          </p>
        </div>

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
