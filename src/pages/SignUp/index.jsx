import React from "react";
import InputComponent, { InputPasswordComponent } from "../../components/input";
import { Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center ">
      <div className="p-2">
      <p className="text-xl">إنشاء حساب</p>
        <Form>
          <div>
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
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <Form.Item className="m-0">
                <Checkbox className="" />
              </Form.Item>
              <p>اوافق على الاحكام والشروط</p>
            </div>

            <ButtonComponent
              htmlType="submit"
              title="SIGN UP"
              className="bg-primary text-textColorprimary rounded-full"
            />
          </div>
        </Form>

        <p className="text-xl my-5 w-full text-center  before:inline-block before:ml-3 before:w-[40%] before:h-0.5 before:bg-primary  after:inline-block after:mr-3 after:w-[40%] after:h-0.5 after:bg-primary ">
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
        <p className="text-center mt-8 ">
         لديك حساب بالفعل ؟ <Link to="/Login" className="font-bold">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
