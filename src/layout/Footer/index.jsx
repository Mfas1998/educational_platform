import Card from "../../components/Card/card";
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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 pb-48 ">
        <Card
          description="محاضر"
          className="bg-orange-500 rounded-full grid place-self-center p-1 "
          icon={
            <PiGraduationCapThin className=" w-8 h-8 items-center justify-center  text-white" />
          }
        />
        <Card
          description="طالب"
          className="bg-green-500 rounded-full  grid place-self-center p-1 "
          icon={
            <PiUsersLight className=" w-8 h-8 items-center justify-center text-white " />
          }
        />
        <Card
          description="فيديو"
          className="bg-sky-600 rounded-full    grid place-self-center p-1"
          icon={
            <PiVideoCameraLight className=" w-8 h-8 items-center justify-center text-white" />
          }
        />
        <Card
          description="مستخدم"
          className="bg-primary rounded-full    grid place-self-center p-1"
          icon={
            <PiUsersThreeThin className=" w-8 h-8  items-center justify-center text-white" />
          }
        />
      </div>
      <div className="bg-primary  px-20 pt-16 pb-4 text-textColor -mt-56 w-full">
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className=" flex  ">
              <img
                src={require("../../assets/icons/logo.png")}
                alt=""
                className=" w-16 h-12 rounded-full"
              />
              <h1 className=" font-bold pr-3 pt-3 text-lg text-textColorprimary">
                مكــــاوش
              </h1>
            </div>
            <p className=" grid w-96 text-sm py-8 text-start font-extralight sm:w-48 md:w-60 lg:w-96">
              You’re not connected And the web just isn’t the same without you.
              Let’s get you back online Check that your network cables are
              plugged in. Make sure you’re not in airplane mode. See if your
              wireless switch is turned on. Restart your router.
            </p>
          </div>
          <div className=" text-start px-24 py-6">
            <h1 className="font-bold font-serif text-white">الروابط السريعة</h1>
            <div className="text-textColor grid py-8 grid-cols-2">
              <Link className="block">عنا</Link>
              <Link className="block">مدونة</Link>
              <Link className="block">كورسات</Link>
              <Link className="block">تواصل</Link>
            </div>
          </div>
          <div className=" text-start pl-8 py-6">
            <h1 className="font-bold font-serif text-white">أتصل بنا</h1>
            <div className="py-8 text-sm">
              <div className="flex">
                <IoMdCall />
                <span className="pr-4">739-158-148</span>
                <div className="pr-28 flex">
                  <CiLocationOn />
                  <span className="pr-4">40 Yem dr.Taiz gmall street </span>
                </div>
              </div>
              <div className="flex pt-4">
                {" "}
                <AiOutlineMail />
                <span className="pr-4">Courseweb@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-0.5 bg-textColor "></div>

        <div className=" grid  justify-between pt-6 text-sm">
          <div className=" text-start w-auto">
            <span>Copyright 2023 | All Rights Reserved</span>
          </div>
          <div className="flex justify-between w-40 pr-16 text-start mr-96">
            <CiFacebook />
            <CiTwitter />
            <AiOutlineInstagram />
            <BsVoicemail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
