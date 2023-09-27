import { AiFillPlayCircle } from "react-icons/ai";
import img from "../../assets/images/lerning.jpg";
import { Rate } from "antd";
import React from "react";
import {motion} from 'framer-motion'
 
function Card(props) {
  return (
    <motion.div
        style={{
          borderRadius: "20px",
          boxShadow:"0 0 7px rgba(0,0,0,0.2)"
        }}
        whileHover={{
          scale:1.1
        }}
    >
    <div className={props.styles}>
      <div className=" flex text-left items-center justify-end gap-3 ">
        <div className="grid grid-cols-1   ">
          <h4 className="font-bold">{props.counter}</h4>
          <p className=" text-gray-500 ">{props.description}</p>
        </div>
        <div className={props.className}>{props.icon}</div>
      </div>

      <p className={props.styleText}>{props.text}</p>
    </div>
    </motion.div>
  );
}

export function CourseCard(props) {
  return (
    <div
      className="rounded-2xl h-[255px] min-w-[230px] max-w-[260px] bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] hover:scale-110 "
    >
      <div>
        <img src={img} alt="" className="h-[100px] w-full rounded-t-2xl" />
      </div>
      <div className="p-3 h-[155px] ">
        <div className="flex items-center justify-between text-[10px]">
          <Rate allowHalf defaultValue={2.5} className="text-[10px]" />
          <div className="flex items-center gap-2  ">
            <p>25x Lesson</p>
            <AiFillPlayCircle className="text-green-500 text-[18px]" />
          </div>
        </div>

        <p className=" text-sm text-left my-2">
          Powerful mental tools to help you master tough subject
        </p>
        <hr/>
        <div className="flex items-center justify-between mt-2 h-max text-[10px] ">
            <p className="bg-primary rounded-full px-4 text-textColorprimary">Design</p>

          <div className="flex items-center gap-2 ">
           <div>
              <p className="font-bold">Wade Warren</p>
              <p>Web Developer</p>
           </div>
            <img src={img} alt="" className="h-8 w-8 rounded-full"/>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
            <p className="line-through">120$</p>
            <p>100$</p>
          </div>
      </div>
    </div>
  );
}
export default Card;
