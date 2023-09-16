import React from "react";
import { Link } from "react-router-dom";
import {Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";
import InputComponent, { InputPasswordComponent } from "../../components/input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center text-ellipsis">
      <div className=" flex flex-col">
        <div className="">
          <p className="text-xl text-center py-8">
            مرحبا بكم في
            مجتمع كود سكويد</p>
          <Form>
          
            <Form.Item name="email">
              <InputComponent
                placeholder="الايميل"
                id="email"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
            <Form.Item name="password">
              <InputPasswordComponent
               required
                placeholder="كلمة المرور"
                id="password"
                className=""
              />
            </Form.Item>
         
          <div className="flex gap-3 justify-between">
           <div className="flex gap-3">
           <Form.Item className="m-0">
              <Checkbox className="" />
            </Form.Item>
            <p>تذكرني</p>
           </div>
            <ButtonComponent
              htmlType="submit"
              title="SIGN UP"
              className="bg-primary text-textColorprimary rounded-full"
            />
          </div>
          </Form>
        </div>
        <p className="text-xl my-5 w-full text-center  before:inline-block before:w-[40%] before:h-0.5 before:bg-primary before:ml-4 after:mr-4 after:inline-block  after:w-[40%] after:h-0.5 after:bg-primary ">
              or
              </p>
          <ButtonComponent
            title="دخول بإستخدام جوجل"
            icon={<FcGoogle className="ml-6" />}
            className="rounded-full w-full "
          />
          <ButtonComponent
            title="دخول بإستخدام فيسبوك"
            icon={<FaFacebookF className="text-blue-700 ml-6" />}
            className="rounded-full w-full mt-3"
          />
         <p>مستخدم جديد ؟ <Link to="/signup">أشتراك</Link></p>
      </div>
    </div>
  );
};

export default Login;
