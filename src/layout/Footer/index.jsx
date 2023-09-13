import Card from '../../components/Card/card'
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail,AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook,CiTwitter,CiLocationOn } from "react-icons/ci";
import { BsVoicemail } from "react-icons/bs";
import { PiGraduationCapThin, PiVideoCameraLight,PiUsersLight,PiUsersThreeThin  } from "react-icons/pi"


const Footer = () => {
    return(
      
        <div className="w-full">   
            <div className='flex items-center justify-center gap-5 pb-48 '>
              <Card description='محاضر'   className='bg-orange-500 rounded-full grid place-self-center p-1 '   icon= {<PiGraduationCapThin  className=' w-8 h-8 items-center justify-center  text-white'/>} />
              <Card description='طالب'    className='bg-green-500 rounded-full  grid place-self-center p-1 '   icon={<PiUsersLight className=' w-8 h-8 items-center justify-center text-white '  />} />
              <Card description='فيديو'   className='bg-sky-600 rounded-full    grid place-self-center p-1'   icon={<PiVideoCameraLight className=' w-8 h-8 items-center justify-center text-white' />} />
              <Card description='مستخدم'  className='bg-primary rounded-full    grid place-self-center p-1'   icon={<PiUsersThreeThin   className=' w-8 h-8  items-center justify-center text-white' />}  />
            </div> 
            <div className='bg-primary  px-20 pt-16 pb-4 text-textColor -mt-56 w-full'>
              <div className='grid grid-cols-4 max-[700px]:grid-cols-2'>
              <div>
                 <div className=' flex '>
                    <img src={require("../../assets/icons/logo.png")}  alt="" className=' w-16 h-12 rounded-full' />
                    <h1 className=' font-bold pr-3 pt-3 text-lg text-textColorprimary'>مكــــاوش</h1>
                 </div>
                 <div>
                  <p className='w-auto text-sm py-8 text-start font-extralight'>You’re not connected
                    And the web just isn’t the same without you. 
                    Let’s get you back online
                    Check that your network cables are plugged in.
                    Make sure you’re not in airplane mode.
                    See if your wireless switch is turned on.
                    Restart your router.</p>
                 </div>
              </div> 
              <div className=' text-start px-24 py-6'>
                <h1 className='font-bold font-serif text-white'>الروابط السريعة</h1>
                  <div className=' grid py-8 text-start text-textColor grid-cols-2 max-[700px]:grid-cols-1 gap-6 place-items-center '>
                      <Link to="#" className=" block ">عنا</Link>
                      <Link to="#" className=" block ">مـدونة</Link>
                      <Link to="#" className=" block ">كورسات</Link>
                      <Link to="#" className=" block ">تواصل</Link>
               </div>
              </div>
                <div className=' text-start pl-8 py-6'>
                  <h1 className='font-bold font-serif text-white'>أتصل بنا</h1>
                    <div className='py-8 text-sm grid grid-cols-1 gap-2'>
                      <div className='flex'><IoMdCall /><span className='pr-4'> <Link to="#" className=" block ">739-158-148</Link></span></div>
                      <div className='flex'> <AiOutlineMail /><span className='pr-4'><Link to="#" className=" block ">Courseweb@gmail.com</Link></span></div>
                    </div>
                </div>
                <div className='grid place-items-center text-start pb-10'>
                  <div div className='flex'><CiLocationOn /><span className='pr-4'><Link to="#" className=" block ">40 Yem dr.Taiz gmall street</Link> </span></div>
                </div>
              </div>
              <div className=' w-full h-0.5 bg-textColor '></div>
             
              <div className=' flex justify-between pt-6 text-sm'>
                <div className=' text-start w-auto'><span>Copyright 2023 | All Rights Reserved</span></div>
                <div className='flex justify-between w-40 pr-16 text-start mr-96'>
                   <Link to="#" className=" block "> <CiFacebook /> </Link>
                   <Link to="#" className=" block "> <CiTwitter /></Link>
                   <Link to="#" className=" block "><AiOutlineInstagram /></Link>
                   <Link to="#" className=" block "> <BsVoicemail /></Link>
                 </div>
              </div>
            </div>
              
        </div>
     
    )
   
  
}

export default Footer