import React from "react";
import { Link } from "react-router-dom";
import { Form } from "antd";
import ButtonComponent from "../../components/Button";
import InputComponent from "../../components/input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

const Login = () => {
  return (
    <div className="flex justify-center text-ellipsis">
      <div className="p-2 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-lg items-center justify-center">
        <div className="grid place-items-center justify-center gap-2 ">
          <div className=" my-4 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-full w-10 ">
            <HiOutlineKey className="text-primary m-3" />
          </div>
          <p className="font-bold">Forget Password</p>
          <p className="text-textColor">
            No worries, we’ll send you reset instructions.
          </p>
        </div>
        <Form>
          <div>
            <Form.Item name="email">
              <InputComponent
                placeholder="الايميل"
                id="email"
                className=" focus:border-primary mt-3 "
              />
            </Form.Item>
            <Link to="/sendEmail">
              <ButtonComponent
                htmlType="submit"
                title="Reset password"
                className="bg-primary text-textColorprimary rounded-full w-full"
              /></Link>
              
          </div>
        </Form>

        <p className="flex  items-center text-xl my-5 w-full  before:inline-block before:w-[40%] before:h-0.5 before:bg-primary before:ml-3 after:mr-4 after:inline-block  after:w-[40%] after:h-0.5 after:bg-primary ">
          or
        </p>
        <ButtonComponent
          title="دخول بإستخدام جوجل"
          icon={<FcGoogle />}
          className="rounded-full w-full "
        />
        <ButtonComponent
          title="دخول بإستخدام فيسبوك"
          icon={<FaFacebookF className="text-blue-700" />}
          className="rounded-full w-full mt-3"
        />

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
