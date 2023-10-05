import {Card} from "../../components/Card/card";
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
    <div className="w-full mt-8">
      <div className="flex items-center justify-center gap-5 pb-48 ">
        <Card
          styles=" w-44 flex max-[700px]:w-28  max-[700px]:pr-2 items-center justify-center pr-14 py-2 border rounded-2xl bg-white "
          description="محاضر"
          counter="2000"
          className="bg-orange-500 rounded-full grid place-self-center p-1 "
          icon={
            <PiGraduationCapThin className=" w-8 h-8 items-center justify-center  text-white" />
          }
        />
        <Card
          styles=" w-44 flex max-[700px]:w-28  max-[700px]:pr-2 items-center justify-center pr-14 py-2 border rounded-2xl bg-white "
          description="طالب"
          counter="300"
          className="bg-green-500 rounded-full grid place-self-center p-1 "
          icon={
            <PiUsersLight className=" w-8 h-8 items-center justify-center text-white " />
          }
        />
        <Card
          styles=" w-44 flex max-[700px]:w-28  max-[700px]:pr-2 items-center justify-center pr-14 py-2 border rounded-2xl bg-white "
          description="فيديو"
          counter="400"
          className="bg-sky-600 rounded-full grid place-self-center p-1"
          icon={
            <PiVideoCameraLight className=" w-8 h-8 items-center justify-center text-white" />
          }
        />
        <Card
          styles=" w-44 flex max-[700px]:w-28  max-[700px]:pr-2 items-center justify-center pr-14 py-2 border rounded-2xl bg-white "
          description="مستخدم"
          counter="500"
          className="bg-primary rounded-full grid place-self-center p-1"
          icon={
            <PiUsersThreeThin className=" w-8 h-8 items-center justify-center text-white" />
          }
        />
      </div>
      <div className="bg-primary px-20 pt-16 pb-4 text-gray-300 text-sm -mt-56 w-full">
        <div className="grid grid-cols-4 max-[700px]:grid-cols-2 items-center justify-center">
          <div className="">
            <div className=" flex  gap-4 items-center justify-start">
              <img
                //src={require("../../assets/icons/logo.png")}
                alt=""
                className=" w-16 h-10 rounded-full"
              />
              <h1 className=" font-bold text-lg text-textColorprimary">
                مكــــاوش
              </h1>
            </div>
            <div className="text-xs pt-8 font-extralight">
              <p>
                You’re not connected And the web just isn’t the same without
                you. Let’s get you back online Check that your network cables
                are plugged in. Make sure you’re not in airplane mode. See if
                your wireless switch is turned on. Restart your router.
              </p>
            </div>
          </div>
          <div className=" grid text-start pt-6 font-bold items-center justify-center">
            <h1 className="font-bold text-lg font-serif text-white">
              الروابط السريعة
            </h1>
            <div className="py-8">
              <div className="grid grid-cols-2 gap-x-7 gap-y-5 ">
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
          <div className=" text-start pt-6  place-items-center justify-center">
            <h1 className="font-bold font-serif text-lg text-white">
              أتصل بنا
            </h1>
            <div className="grid py-8  gap-y-5">
              <div className="flex gap-3 ">
                <p>
                  <IoMdCall />
                </p>
                <p>
                  <Link to="#">739-158-148</Link>
                </p>
              </div>
              <div className="flex gap-3 ">
                <p>
                  <AiOutlineMail />
                </p>
                <p>
                  <Link to="#">Courseweb@gmail.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center pt-2">
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
            <span>Copyright 2023 | All Rights Reservedd</span>
          </div>
          <div className="flex justify-between text-start gap-7">
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
