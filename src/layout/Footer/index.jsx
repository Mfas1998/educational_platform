import Card from "../../components/Card/card";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiLocationOn } from "react-icons/ci";
import { BsVoicemail } from "react-icons/bs";
import {
  PiGraduationCapThin,
  PiVideoCameraLight,
  PiUsersLight,
  PiUsersThreeThin,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-5 pb-48 ">
        <Card
          description="محاضر"
          className="bg-orange-500 rounded-full grid place-self-center p-1 "
          icon={
            <PiGraduationCapThin className=" w-8 h-8 items-center justify-center  text-white" />
          }
        />
        <Card
          description="طالب"
          className="bg-green-500 rounded-full grid place-self-center p-1 "
          icon={
            <PiUsersLight className=" w-8 h-8 items-center justify-center text-white " />
          }
        />
        <Card
          description="فيديو"
          className="bg-sky-600 rounded-full grid place-self-center p-1"
          icon={
            <PiVideoCameraLight className=" w-8 h-8 items-center justify-center text-white" />
          }
        />
        <Card
          description="مستخدم"
          className="bg-primary rounded-full grid place-self-center p-1"
          icon={
            <PiUsersThreeThin className=" w-8 h-8 items-center justify-center text-white" />
          }
        />
      </div>
      <div className="bg-primary px-20 pt-16 pb-4 text-textColor -mt-56 w-full">

        <div className="grid grid-cols-4 max-[700px]:grid-cols-2 place-items-center">

          <div className="" >
            <div className=" flex  gap-4 items-center justify-start">
              <img
                src={require("../../assets/icons/logo.png")}
                alt=""
                className=" w-16 h-10 rounded-full"
              />
              <h1 className=" font-bold text-lg text-textColorprimary">
                مكــــاوش
              </h1>
            </div>
            <div className="text-sm mt-2 font-extralight">
              <p>
                You’re not connected And the web just isn’t the same without
                you. Let’s get you back online Check that your network cables
                are plugged in. Make sure you’re not in airplane mode. See if
                your wireless switch is turned on. Restart your router.
              </p>
            </div>
          </div>
          <div className="text-start pl-8 py-6">
            <h1 className="font-bold font-serif text-white">الروابط السريعة</h1>
            <div className="py-8">
            <div className="grid grid-cols-2 gap-x-5 place-items-center justify-center">
              <p>
                <Link to="#">عنا</Link>
              </p>
              <p>
                <Link to="#">مـدونة</Link>
              </p>
              <p>
                <Link to="#">كورسات</Link>
              </p>
              <p>
                <Link to="#"> تواصل بنا</Link>
              </p>
              </div>
            </div>
          </div>
          <div className=" text-start pl-8 py-6">
            <h1 className="font-bold font-serif  text-white">أتصل بنا</h1>
            <div className="py-8">
              <div className="flex gap-3 items-center">
                <p>
                  {" "}
                  <IoMdCall />
                </p>
                <p>
                  <Link to="#">739-158-148</Link>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p>
                  {" "}
                  <AiOutlineMail />
                </p>
                <p>
                  <Link to="#">Courseweb@gmail.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <p>
              <CiLocationOn />
            </p>
            <p>
              <Link to="#">40 Yem dr.Taiz gmall street</Link>
            </p>
          </div>
        </div>
        <div className=" w-full h-0.5  mt-4 bg-textColor "></div>

        <div className=" flex justify-between pt-6 text-sm">
          <div className=" text-start w-auto">
            <span>Copyright 2023 | All Rights Reserved</span>
          </div>
          <div className="flex justify-between w-40 pr-16 text-start mr-96">
            <Link to="#" className=" block ">
              <CiFacebook />
            </Link>
            <Link to="#" className=" block ">
              <CiTwitter />
            </Link>
            <Link to="#" className=" block ">
              <AiOutlineInstagram />
            </Link>
            <Link to="#" className=" block ">
              <BsVoicemail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
