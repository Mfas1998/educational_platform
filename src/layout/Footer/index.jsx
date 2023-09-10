import styles from './footer.module.css'
import Compnan from '../../components/Card/card'
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsVoicemail } from "react-icons/bs";

const Footer = () => {
    return(
        <>
        <div className={styles.footer}>
            <div className='footer w-full flex items-center justify-around px-52 pb-48 ' >
              <Compnan description='محاضر'   background='bg-orange-500 rounded-full p-2'   icon="inst"  />
              <Compnan description='طالب'    background='bg-green-500 rounded-full  p-2'   icon="stud"  />
              <Compnan description='فيديو'   background='bg-sky-600 rounded-full    p-2'   icon="vid"  />
              <Compnan description='مستخدم'  background='bg-violet-600 rounded-full p-2'   icon="user"  />
            </div> 
            <div className='bg-violet-600 px-24 pt-16 pb-4 text-gray-300 -mt-56'>
              <div className='flex'>
              <div>
                 <div className=' flex '>
                    <img src={require("../../assets/icons/logo.png" )}  alt="" className=' w-16 h-12 rounded-full'/>
                    <h1 className=' font-bold pr-3 pt-3 text-lg text-white'>مكــــاوش</h1>
                 </div>
                 <p className=' w-96 text-sm py-8 text-start font-extralight'>You’re not connected
                    And the web just isn’t the same without you. 
                    Let’s get you back online
                    Check that your network cables are plugged in.
                    Make sure you’re not in airplane mode.
                    See if your wireless switch is turned on.
                    Restart your router.</p>
              </div> 
              <div className=' text-start px-24 py-6'>
                <h1 className='font-bold font-serif text-white'>الروابط السريعة</h1>
                  <div className='py-8 text-base text-start'>
                      <span>عنا</span><span className='pr-16 '>مـدونة</span>
                      <div className='pt-4'><span>كورسات</span><span className='pr-12'>اتصال</span></div>
                  </div>

              </div>
                <div className=' text-start pl-8 py-6'>
                  <h1 className='font-bold font-serif text-white'>أتصل بنا</h1>
                    <div className='py-8 text-sm'>
                      <div className='flex'><IoMdCall /><span className='pr-4'>739-158-148</span><div className='pr-28 flex'><CiLocationOn /><span className='pr-4'>40 Yem dr.Taiz gmall street </span></div></div>
                      <div className='flex pt-4'> <AiOutlineMail /><span className='pr-4'>Courseweb@gmail.com</span></div>
                    </div>
                </div>
              </div>
              <div className=' w-full h-0.5 bg-gray-500 mt-8'></div>
              <div className='flex justify-between pt-6 text-sm'><span>Copyright 2023 | All Rights Reserved</span><div className='flex justify-between w-28'><CiFacebook /><CiTwitter /><AiOutlineInstagram /><BsVoicemail /></div></div>
            </div>
              
        </div>
        </>
    )
   
  
}

export default Footer