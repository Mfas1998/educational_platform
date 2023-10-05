import logo from "../../assets/images/lerning.jpg";
import { CourseCard } from "../../components/Card/card";
//import { PiUsersLight } from "react-icons/pi";
import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ButtonComponent from "../../components/Button";
const StudentCourses = () => {
  const itemsStyle = {
    styleImage: "h-[100px] w-full rounded-t-2xl ",
    styleCourseCard:
      "rounded-2xl  h-[255px] min-w-[260px] bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] hover:scale-110 ",
    styleProfileImage: "h-8 w-8 rounded-full",
  };
  const data = {
    img: logo,
    rate: 3,
    lessonsNumber: 25,
    title: " Powerful mental tools to help you master tough subject",
    teacher: "Mohammed Fuad",
    field: "Web Developer",
    oldPrice: "150$",
    price: "100$",
    teacherImage: logo, 
  };
  const ref = useRef(null);
  const ref2 = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
  };

  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" bg-violet-50 p-2">
      <div className=" flex flex-col gap-4 justify-center p-8 m-10 rounded-2xl  bg-violet-700 ">
        <div className=" items-center justify-center font-bold text-textColorprimary text-2xl  ">
          {/* <Reveal> */}
          <p className="shadow-[0_0_7px_rgba(0,0,0,5)] border rounded-2xl p-2">
            الكرسات المشترك فيهــا
          </p>
          {/* </Reveal> */}
        </div>

        <div className="relative  items-center justify-center rounded-2xl border bg-violet-200 ">
          <div
            ref={ref}
            className="flex items-center justify-start gap-8  px-16 py-8 overflow-x-scroll scroll-w-1  "
          >
            {x.map((e) => {
              return <CourseCard key={e} data={data} itemsStyle={itemsStyle} />;
            })}
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponent
              onClick={() => {
                scroll(-340);
              }}
              title={
                <AiOutlineArrowRight className="text-5xl text-textColorprimary" />
              }
              className="max-[700px]:hidden absolute h-12 p-0 rounded-full bg-primary ml-14 text-5xl  z-50 "
            />
            <ButtonComponent
              onClick={() => {
                scroll(340);
              }}
              title={
                <AiOutlineArrowLeft className="text-5xl text-textColorprimary" />
              }
              className="max-[700px]:hidden absolute h-12 p-0 rounded-full bg-primary shadow-[0_0_7px_rgba(0,0,0,5)] mr-14 text-5xl z-50 "
            />
          </div>
        </div>
        <hr className="my-10" />
        <div className=" items-center justify-center font-bold text-textColorprimary text-2xl  ">
          <p className="shadow-[0_0_7px_rgba(0,0,0,5)] border rounded-2xl p-2">
            الكرسات المفضلة
          </p>
          {/* </Reveal> */}
        </div>

        <div className="relative  items-center justify-center rounded-2xl border bg-textColor ">
          <div
            ref={ref2}
            className="flex items-center justify-start gap-8 mt-5 px-16 py-8 overflow-x-scroll scroll-w-0  "
          >
            {x.map((e) => {
              return <CourseCard key={e} data={data} itemsStyle={itemsStyle} />;
            })}
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponent
              onClick={() => {
                scroll2(-300);
              }}
              title={
                <AiOutlineArrowRight className="text-5xl text-textColorprimary" />
              }
              className="max-[700px]:hidden absolute h-12 p-0 rounded-full bg-primary ml-14 text-5xl  z-50 "
            />
            <ButtonComponent
              onClick={() => {
                scroll2(300);
              }}
              title={
                <AiOutlineArrowLeft className="text-5xl text-textColorprimary" />
              }
              className="max-[700px]:hidden absolute h-12 p-0 rounded-full bg-primary mr-14 text-5xl z-50 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentCourses;
