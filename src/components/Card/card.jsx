import React from "react";

function Card(props) {
  return (
    <div className={props.styles}>
      <div className=" flex text-left items-center justify-end ">
        <div className="grid grid-cols-1 pl-2  ">
          <h4 className="font-bold">{props.counter}</h4>
          <p className=" text-gray-500 pl-3">{props.description}</p>
        </div>
        <div className={props.className}>{props.icon}</div>
      </div>

      <p className={props.styleText}>{props.text}</p>
    </div>
  );
}

export default Card;
