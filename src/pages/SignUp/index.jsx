import React from "react";
import InputComponent from "../../components/input";
import { Checkbox, Form,  } from "antd";
import ButtonComponent from "../../components/Button";
import { GoogleOutlined } from "@ant-design/icons";

const SignUp = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center bg-slate-400 ">

      <div className="bg-white p-2">
       <Form>
        <div>
          <p className="text-xl">إنشاء حساب</p>
            <Form.Item name="userName">
              <InputComponent
              required
                placeholder="إسم المستخدم"
                id="user_name"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
            <Form.Item name="email">
              <InputComponent
               required
                placeholder="الايميل"
                id="email"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
            <Form.Item name="password">
              <InputComponent
               type='password'
                placeholder="كلمة المرور"
                id="password"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
        </div>
        <div className="flex gap-3">
        <ButtonComponent
          htmlType='submit'
            title="SIGN UP"
            className="bg-primary text-textColorprimary !rounded-full"
          />
          <Form.Item 
          className="m-0"
          label="I accept the terms & Conditions">
            <Checkbox/>
          </Form.Item>
        </div>

        <div className="text-xl flex gap-2 items-center justify-center">
          <p className="w-full h-0.5 bg-primary"></p>
          <p className="text-center">or</p>
          <p className="w-full h-0.5 bg-primary"></p>
        </div>
       <ButtonComponent title='Sign Up with Google' icon={<GoogleOutlined/>} className='rounded-full w-full' />
      </Form>
      </div>

    </div>
  );
};

export default SignUp;
