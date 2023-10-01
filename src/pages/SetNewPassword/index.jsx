import { Link } from "react-router-dom";
import {  Form } from "antd";
import ButtonComponent from "../../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { InputPasswordComponent } from "../../components/input";
import { BiArrowBack } from "react-icons/bi";


const Login = () => {
  return (
    <div className="flex justify-center "> 
      <div className="p-2 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-lg">
      <div className="grid place-items-center justify-center gap-2 ">
          <div className=" my-4 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-full w-10 ">
            <AiOutlineMail className="text-primary m-3" />
          </div>
          <p className="font-bold">Set new password  </p>
          <p className="text-textColor"> Your new password must be different to previously used passwords.</p>
        </div>
       
        <Form>
          <div>
            <Form.Item name="password">
              <InputPasswordComponent
                required
                placeholder=" كلمة المرور الجديدة"
                id="password"
                className=""
              />
            </Form.Item>
            <Form.Item name="password">
              <InputPasswordComponent
                required
                placeholder="تاكيد كلمة المرور"
                id="password"
                className=""
              />
            </Form.Item>
             <Link to="/passwordReset">
            <ButtonComponent
              htmlType="submit"
              title="Reset password"
              className="bg-primary text-textColorprimary rounded-full w-full"
            /></Link>
          </div>
        </Form>

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
