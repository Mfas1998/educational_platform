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

export default Card;
