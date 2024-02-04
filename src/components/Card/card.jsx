import { Rate } from "antd";
import  {AiFillPlayCircle}  from "react-icons/ai";
import  {Link}  from "react-router-dom";
export function Card(props) {
  return (
    <div className=" rounded-[20px] shadow-[0_0_7px_rgba(0,0,0,0.2)] hover:scale-110 ">
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
    </div>
  );
}

export function CourseCard(props) {
  return (
    <div className= "rounded-2xl  h-[255px] min-w-[260px] bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] hover:scale-110 ">
      <Link to="../course">
        <div className=" ">
          <img
            src={props.data.img}
            alt=""
            className="h-[100px] w-full  rounded-t-2xl "
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-3 h-[155px] ">
        <div className="flex items-center justify-between text-[10px]">
          <Rate
            allowHalf
            defaultValue={props.data.rate}
            className="text-[10px]"
          />
          <div className="flex items-center gap-2  ">
            <p>{props.data.lessonsNumber} </p>
            <AiFillPlayCircle className="text-green-500 text-[18px]" />
          </div>
        </div>

        <p className=" text-sm text-left my-2">{props.data.title}</p>
        <hr />
        <div className="flex items-center justify-between mt-2 h-max text-[10px] ">
          <p className="bg-primary rounded-full px-4 text-textColorprimary">
            Design
          </p> 

          <Link to="/teachersPage">
            <div className="flex items-center gap-2 ">
              <div>
                <p className="font-bold">{props.data.teacher}</p>
                <p>{props.data.field}</p>
              </div>
              <img
                src={props.data.teacherImage}
                alt=""
                className="h-8 w-8 rounded-full"
                loading="lazy"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-evenly">
          <p className="line-through">{props.data.oldPrice}</p>
          <p>{props.data.price}</p>
        </div>
      </div>
    </div>
  );
}
