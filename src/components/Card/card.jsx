import React from 'react';
  
function Card(props) {
    return ( 
      
      
            <div className=' w-44 flex max-[700px]:w-28  max-[700px]:pr-2  items-center justify-center pr-14 py-2 border rounded-2xl bg-white'>
                 {/* <img src={require("./images.jfif" )}  alt="" className=' w-16 h-12'/> */}
                <div className='pl-1 text-start'>
                    <h4 className='font-bold'>3010</h4>
                    <p className=' text-gray-500'>{props.description}</p>
                </div>
                <div className={props.className}>{props.icon}</div>

              </div>
       
    );
}

export default Card;