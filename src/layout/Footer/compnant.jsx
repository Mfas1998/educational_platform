import React from 'react';
import { IoMdCall } from "react-icons/io"
    
function Compnan(props) {
    
    return (
        <div>
            <div className=' w-52 flex py-2 px-3 pr-10 border rounded-2xl bg-white'>
             <div className=' flex w-16 h-16 rounded-full props.color items-center justify-center'><IoMdCall className=' text-center'/></div>
                 {/* <img src={require("./images.jfif" )}  alt="" className=' w-16 h-12'/> */}
                <div className='pl-3 text-start'>
                    <h4 className='font-bold'>300</h4>
                    <h8 className=' text-gray-500'>{props.text}</h8>
                </div>
              </div>
        </div>
    );
}

export default Compnan;