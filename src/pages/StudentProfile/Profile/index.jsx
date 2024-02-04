import React from 'react';
import InputComponent from "../../../components/input";
import { Form } from "antd";
import ButtonComponent from "../../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,FaTwitter,FaLinkedin,FaYoutube } from "react-icons/fa";


function index(props) {
    return (
        <div className=' flex flex-col w-full'>
          <div className="flex flex-col gap-y-3 items-center justify-center border py-2"> 
            <p className="font-bold text-3xl">{props.title}</p>
            <p className="text-lg">{props.addinfo}</p>
          </div>
          <div>
           <p className="font-bold p-2">الاساسيات:</p>
           <Form>
          <div>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="الاسم الاول"
                id="user_name"
                className=" w-100"
              />
            </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="الاسم الاخير"
                id="user_name"
                className=" w-100"
              />
            </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="العنوان"
                id="user_name"
                className=" w-100"
              />
            </Form.Item>
            <hr />
            <p className='font-bold p-2'>الروابط:</p>
            <div className='grid grid-cols-2 '>
            <div>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="الموقع الالكتروني"
                id="user_name"
                className="w-full"
              />
            </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder=" Twiiter Profile"
                id="user_name"
                className=" w-100"
              />
              </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder=" Facebook Profile"
                id="user_name"
                className=" w-100"
              />
            </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="Linked profil"
                id="user_name"
                className=" w-100"
              />
            </Form.Item>
            <Form.Item name="userName">
              <InputComponent
                required
                placeholder="Youtube Profile"
                id="user_name"
                className=" w-100"
              />
            </Form.Item> 
              </div>
              <div className='grid justify-center'>
                <FcGoogle className=' bg-white rounded-full p-1' size={33} />
                <FaTwitter className=' text-blue-700 bg-white rounded-full p-1' size={33} />
                <FaFacebookF className=' text-blue-700  bg-white rounded-full p-1' size={33} />
                <FaLinkedin className=' text-blue-700  bg-white rounded-full p-1' size={33} />
                <FaYoutube className=' text-red-700  bg-white rounded-full p-1' size={33} />
              </div>
              </div>
              <ButtonComponent
                htmlType="submit"
                title="حــفظ"
                className="bg-primary text-textColorprimary rounded-full  text-lg"
              />
            
          </div>
        </Form>
          </div>
        </div>
    );
}

export default index;