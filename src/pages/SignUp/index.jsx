import React from "react";
import InputComponent from "../../components/input";
import { Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";

const SignUp = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center ">
      <div className=" flex flex-col ">
        <div>
          <p className="text-xl">إنشاء حساب</p>
          <Form>
            <Form.Item name="userName">
              <InputComponent
                placeholder="إسم المستخدم"
                id="user_name"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
            <Form.Item name="email">
              <InputComponent
                placeholder="الايميل"
                id="email"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
            <Form.Item name="password">
              <InputComponent
                placeholder="كلمة المرور"
                id="password"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
          </Form>
        </div>

        <div className="flex gap-x-3">
          <ButtonComponent
            title="SIGN UP"
            className="bg-primary text-textColorprimary !rounded-full"
          />

          <Form.Item 
          className="m-0"
          label="I accept the terms & Conditions">
            <Checkbox />
          </Form.Item>
        </div>

        <div>
          <p className="text-center">or</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
