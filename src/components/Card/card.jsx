import React from 'react';
  
function Card(props) {
    return ( 
      
        <div>
            <div className=' w-48 grid grid-cols-2 zz py-2 px-3 pr-20 border rounded-2xl bg-white'>
                 {/* <img src={require("./images.jfif" )}  alt="" className=' w-16 h-12'/> */}
                <div className='pl-3 text-start'>
                    <h4 className='font-bold'>300</h4>
                    <p className=' text-gray-500'>{props.description}</p>
                </div>
                <div className={props.className}>{props.icon}</div>

              </div>
        </div>
    );
}

export default Card;