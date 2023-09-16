import React from "react";
import InputComponent, { InputPasswordComponent } from "../../components/input";
import { Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center ">
      <div className="p-2">
        <Form>
          <div>
            <p className="text-xl">إنشاء حساب</p>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="إسم المستخدم"
                id="user_name"
                className=""
              />
            </Form.Item>
            <Form.Item name="email">
              <InputComponent
                required
                placeholder="الايميل"
                id="email"
                className=""
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
            <Form.Item name="passwordConfirmation">
              <InputPasswordComponent
               required
                placeholder="تأكيد كلمة المرور"
                id="passwordConfirmation"
                className=""
              />
            </Form.Item>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Form.Item className="m-0">
              <Checkbox className="" />
            </Form.Item>
            <p>I accept the terms & Conditions</p>
            <ButtonComponent
              htmlType="submit"
              title="SIGN UP"
              className="bg-primary text-textColorprimary rounded-full"
            />
          </div>
            <p className="text-xl my-3 w-full text-center  before:inline-block before:w-[46%] before:h-0.5 before:bg-primary  after:inline-block after:w-[46%] after:h-0.5 after:bg-primary ">
              or
              </p>
          <ButtonComponent
            title="تسجيل بإستخدام جوجل"
            icon={<FcGoogle />}
            className="rounded-full w-full"
          />
          <ButtonComponent
            title="تسجيل بإستخدام فيسبوك"
            icon={<FaFacebookF className="text-blue-700" />}
            className="rounded-full w-full mt-3"
          />
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
