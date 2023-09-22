import { AiFillPlayCircle } from "react-icons/ai";
import img from "../../assets/images/lerning.jpg";
import { Rate } from "antd";
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

export function CourseCard(props) {
  return (
    <div
      className="rounded-2xl h-[250px] min-w-[260px] mt-4 bg-white"
    >
      <div>
        <img src={img} alt="" className="h-[100px] w-full rounded-t-2xl" />
      </div>
      <div className="p-3 h-[150px] ">
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
            <img src={img} alt="" className="h-7 w-7 rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
