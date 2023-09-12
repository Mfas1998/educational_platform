import React from 'react';
  
function Card(props) {
    return ( 
      
      
            <div className=' w-48 grid grid-cols-2 sm:pr-3 sm:w-32 lg:w-48 lg:pr-20 py-2 px-3 pr-20 border rounded-2xl bg-white'>
                 {/* <img src={require("./images.jfif" )}  alt="" className=' w-16 h-12'/> */}
                <div className='pl-3 text-start'>
                    <h4 className='font-bold'>300</h4>
                    <p className=' text-gray-500'>{props.description}</p>
                </div>
                <div className={props.className}>{props.icon}</div>

              </div>
       
    );
}

export default Card;