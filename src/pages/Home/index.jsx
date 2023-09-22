import Card from "../../components/Card/card";
import logo from "../../assets/images/lerning.jpg";
import { PiUsersLight } from "react-icons/pi";
import ButtonComponent from "../../components/Button";
import { Reveal } from "../../components/utils/Reveal";
import React from "react";
const Home = () => {
  return (
    <div>
    
      <div className=" flex flex-col items-center justify-center py-11">
      <Reveal>
        <div className="flex items-center justify-center font-bold text-3xl">
         
          <h1 className=" text-primary ml-1">Top Categories</h1>
          <h1>Explore</h1>
          
        </div>
        </Reveal>
        <Reveal>
        <p className=" text-gray-300 py-3">
          Click on the categories and explore all courses
        </p>
        </Reveal>
        <Reveal>
        <div className="my-7 flex gap-6 ">
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white  hover:text-primary "
            className="bg-green-500 rounded-full grid place-self-center p-1  "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white  " />
            }
          />
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white "
            className=" bg-slate-500 rounded-full grid place-self-center p-1  "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white " />
            }
          />{" "}
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white "
            className="bg-green-500 rounded-full grid place-self-center p-1 "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white " />
            }
          />{" "}
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white "
            className=" bg-orange-400 rounded-full grid place-self-center p-1 "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white " />
            }
          />{" "}
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white "
            className="bg-blue-500 rounded-full grid place-self-center p-1   "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white " />
            }
          />{" "}
          <Card
            text="طالب"
            styles=" w-44 flex flex-col gap-3 max-[700px]:w-32  items-center justify-center py-8  border rounded-2xl bg-white "
            className=" bg-red-600 rounded-full grid place-self-center p-1  "
            icon={
              <PiUsersLight className=" w-8 h-8 m-2  items-center justify-center text-white " />
            }
          />
        </div>
        </Reveal>
       
      </div>
     
      <Reveal>
      <div className="grid grid-cols-2 justify-center place-items-center">
        <div className=" text-left">
          <div className="flex flex-col font-bold text-4xl text-left">
            <h1>The number one factor in</h1>
            <h1 className=" text-primary ml-1 ">
              relevance drives out resista
            </h1>
          </div>
          <div className="flex text-left justify-end py-3 gap-3 ">
            <Card
              description="Public Specking"
              styles=" w-48 flex  gap-3 max-[700px]:w-32  items-center justify-end text-left py-1 rounded-2xl bg-white "
              icon={
                <PiUsersLight className=" w-6 h-6 my-2  items-center justify-center text-orange-400 " />
              }
            />
            <Card
              description="Career-Orineted"
              styles=" w-48 flex  gap-3 max-[700px]:w-32  items-center justify-end text-left py-1 rounded-2xl bg-white "
              icon={
                <PiUsersLight className=" w-5 h-5 my-2  items-center text-left text-orange-400 " />
              }
            />{" "}
            <Card
              description="Creative Thinking"
              styles=" w-48 flex  gap-3 max-[700px]:w-32  items-center justify-end text-left py-1 rounded-2xl bg-white "
              icon={
                <PiUsersLight className=" w-5 h-5 my-2  items-center justify-center text-orange-400 " />
              }
            />
          </div>
          <p>
            You’re not connected And the web just isn’t the same without you.
            Let’s get you back online Check that your network cables are plugged
            in. Make sure you’re not in airplane mode. See if your wireless
            switch is turned on. Restart your router.
          </p>
          <ButtonComponent
            htmlType="submit"
            title="Learn More"
            className="bg-primary text-textColorprimary rounded-full m-6 "
          />
        </div>
        <img src={logo} alt="" className="" />
      </div>
      </Reveal>
      
      <div className="grid grid-cols-1 items-center justify-end text-left py-10">
        <div className=" flex flex-col items-center  font-bold">
          <Reveal>
          <p className="text-2xl ">Testimonials</p>
          <p className=" text-gray-300 py-5 text-lg ">
            Whte our student say about us
          </p>
          </Reveal>
        </div>
      
        <div className="flex gap-10 items-center justify-center my-5 ">
        <Reveal>
          <Card
            description="Creative Thinking"
            styles=" w-80  py-6 px-8 max-[700px]:w-32 items-center justify-center rounded-2xl bg-white border "
            className=" bg-slate-500 rounded-full grid place-self-center p-3  hover:p-4 "
            icon={
              <PiUsersLight className=" w-5 h-5 m-1   items-center justify-center " />
            }
            text=" You’re not connected And the web just isn’t the same without you.
              Let’s get you back online Check that your network cables are plugged
              in. Make sure you’re not in airplane mode. See if your wireless
              switch is turned on. Restart your router."
            styleText="mt-3"
          />
          </Reveal>
          <Card
            description="Creative Thinking"
            styles=" w-80  py-6 px-8  max-[700px]:w-32 items-center justify-center rounded-2xl bg-white border "
            className=" bg-orange-400 rounded-full grid place-self-center p-3  hover:p-4 "
            icon={
              <PiUsersLight className=" w-5 h-5 m-1  items-center justify-center" />
            }
            text=" You’re not connected And the web just isn’t the same without you.
              Let’s get you back online Check that your network cables are plugged
              in. Make sure you’re not in airplane mode. See if your wireless
              switch is turned on. Restart your router."
            styleText="mt-3"
          />
          <Card
            description="Creative Thinking"
            styles=" w-80  py-6 px-6  max-[700px]:w-32 items-center justify-center  rounded-2xl bg-white border "
            className=" bg-rose-300 rounded-full grid place-self-center p-3  hover:p-4 "
            icon={
              <PiUsersLight className=" w-5 h-5 m-1items-center justify-center " />
            }
            text=" You’re not connected And the web just isn’t the same without you.
              Let’s get you back online Check that your network cables are plugged
              in. Make sure you’re not in airplane mode. See if your wireless
              switch is turned on. Restart your router."
            styleText="mt-3"
          />
          
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;
