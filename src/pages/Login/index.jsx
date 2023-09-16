import React from "react";
import InputComponent from "../../components/input";
import {Checkbox, Form } from "antd";
import ButtonComponent from "../../components/Button";
import { PiUsersThreeThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex h-[100vh] items-center justify-center text-ellipsis">
      <div className=" flex flex-col">
        <div>
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
              <InputComponent
                placeholder="كلمة المرور"
                id="password"
                className=" focus:border-primary text-center"
              />
            </Form.Item>
          </Form>
          <div className="flex gap-x-3">
          <ButtonComponent
            title="تسجيل الدخول"
            className="bg-primary text-textColorprimary !rounded-full"
          />

          <Form.Item 
          className="m-0"
          label="I accept the terms & Conditions">
            <Checkbox />
          </Form.Item>
        </div>
        </div>

       
        <div className="flex pt-7">
          <p className="text-xs text-slate-400 ">لاتملك حساب حتى الان  ؟ </p>
          <Link to="/signup" className="font-bold pr-1 ">أشتراك</Link>
        </div>
        <div className=" grid grid-cols-1 place-items-center justify-center w-full">
          <div className=" w-full h-0.5 mt-9 bg-slate-400 "></div>
          <div className="text-center -mt-6 ">
            <p className="p-3 rounded-full border w-12 h-12 bg-textColorprimary">or</p>
          </div>
        <div className="flex  border rounded w-full items-end justify-end gap-10 pl-12 py-2 mt-3">
           <p>الدخول بستخدام جوجل</p>
           <PiUsersThreeThin className=" w-8 h-8 text-black" />
         
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;

// import { Button, Form, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import './login.css';
// const Login = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="container">
//       <Form>
//         <h1>تسجيل الدخول</h1>
//         <div >
//           <Form.Item name={"email"}>
//             <Input  placeholder="الايـميل" />
//           </Form.Item>
//         </div>
//         <div >
//           <Form.Item name={"password"}>
//             <Input  placeholder=" كلمة المرور" />
//           </Form.Item>
//         </div>
//         <div className="log-in">
//           <Form.Item>
//             <Button
//               className="button"
//               onClick={() => {
               
//                  navigate('/')
//               }}
//               htmlType="submit"
//             >
//               تسجيل الدخول
//             </Button>
//           </Form.Item>
//         </div>
//       </Form>
//     </div>
//   )
// }

// export default Login