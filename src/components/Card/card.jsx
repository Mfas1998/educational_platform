import React from 'react';
import { PiUsersThreeThin } from "react-icons/pi"
import { PiVideoCameraLight } from "react-icons/pi"
import { PiUsersLight } from "react-icons/pi"
import { PiGraduationCapThin } from "react-icons/pi"
    
function Card(props) {
   let selectedIcon;
    switch(props.icon){
      case 'inst':
        selectedIcon= <PiGraduationCapThin  className=' w-8 h-8 items-center justify-center  text-white'/>;
        break;
      case 'stud':
        selectedIcon= <PiUsersLight className=' w-8 h-8 items-center justify-center text-white'  />;
        break;
      case 'vid':
        selectedIcon= <PiVideoCameraLight className=' w-8 h-8 items-center justify-center text-white' />;
        break;
      case 'user':
        selectedIcon= <PiUsersThreeThin   className=' w-8 h-8  items-center justify-center text-white' />;
        break;
      default:
        selectedIcon=null;
    }
    return ( 
      
        <div>
            <div className='footer w-48 flex py-2 px-3 pr-20 border rounded-2xl bg-white'>
                 {/* <img src={require("./images.jfif" )}  alt="" className=' w-16 h-12'/> */}
                <div className='pl-3 text-start'>
                    <h4 className='font-bold'>300</h4>
                    <h8 className=' text-gray-500'>{props.description}</h8>
                </div>
                <div className={props.background}>{selectedIcon}</div>

              </div>
        </div>
    );
}

export default Card;