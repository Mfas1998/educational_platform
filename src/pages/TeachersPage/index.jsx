import React, { useRef } from "react";
import logo from "../../assets/images/teatcher1.png";
import { CourseCard } from "../../components/Card/card";

const TeachersPage = () => {
  const ref = useRef(null);
  let length = 20;
  const items = Array.from(Array(length).keys());
  const itemsStyle = {
    styleImage: "h-[130px] w-[130px] rounded-full my-3",
    styleCourseCard:
      "flex flex-col items-center rounded-2xl justify-center h-[300px] min-w-[260px] bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] hover:scale-110 ",
    styleProfileImage: "",
  };
  const data = {
    img: logo,
    rate: 3,
    lessonsNumber: 25,
    title:
      " Powerful mental tools to help you master tough subject Powerful mental tools to help you master tough subject",
    teacher: "Mohammed Fuad",
    field: "Web Developer",
  };
  return (
    <div
      ref={ref}
      className=" grid-auto-fit grid items-center place-items-center gap-8  px-16 py-8 my-6    "
    >
      {items.map((item, e) => {
        return <CourseCard key={e} data={data} itemsStyle={itemsStyle} />;
      })}
    </div>
  );
};

export default TeachersPage;
