import { Link } from "react-router-dom";
import { Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";
import InputComponent, { InputPasswordComponent } from "../../components/input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center text-ellipsis">
      <div className="p-2 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-lg">
        <p className="text-xl text-center py-8">مرحبا بكم في مـنـصـة مُـتمـيز </p>
        <Form> 
          <div>
            <Form.Item name="email">
              <InputComponent
                placeholder="الايميل"
                id="email"
                className=" focus:border-primary "
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

            <div className="flex gap-3 justify-between items-center my-3">
              <div className="flex gap-3 items-center">
                <Form.Item className="m-0">
                  <Checkbox className="" />
                </Form.Item>
                <p>تذكرني</p>
              </div>
              <Link to='/ForgotPassword' className=" text-textColor font-bold hover:text-primary">نسيت كلمة المرور؟</Link>
            </div>
            <ButtonComponent
                htmlType="submit"
                title="Login"
                className="bg-primary text-textColorprimary rounded-full w-full"
              />
          </div>
        </Form>

        <p className="flex  items-center text-xl my-5 w-full  before:inline-block before:w-[40%] before:h-0.5 before:bg-primary before:ml-3 after:mr-4 after:inline-block  after:w-[40%] after:h-0.5 after:bg-primary ">
          or
        </p>
        <ButtonComponent
          title="دخول بإستخدام جوجل"
          icon={<FcGoogle  />}
          className="rounded-full w-full "
        />
        <ButtonComponent
          title="دخول بإستخدام فيسبوك"
          icon={<FaFacebookF className="text-blue-700" />}
          className="rounded-full w-full mt-3"
        />
        <p className="text-center mt-8">
          مستخدم جديد ؟ <Link to="/signUp" className="font-bold">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
