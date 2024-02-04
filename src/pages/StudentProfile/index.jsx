
import React ,{useState} from "react";
import VeiwProfile from './VeiwProfile'
import Profile from './Profile'
import loge from "../../assets/images/teatcher2.png";
import ButtonComponent from "../../components/Button";
import { PiUsersLight } from "react-icons/pi";

 function StudentProfile(props) {
  const [currentPage, setCurrentPage] = useState("home");
  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };
  let content;
  if (currentPage === "veiwProfile") {
    content = <VeiwProfile title="الحساب العام" addinfo="اضف معلــومات حول نفسك" />;
  } else if (currentPage === "profile") {
    content = <Profile title="الحساب العام" addinfo="اضف معلــومات حول نفسك"/>; 
  } else if (currentPage === "imageProfile") {
    content = <VeiwProfile />;
  } else {
    content = (
      <div>
        <h1>الصفحة الرئيسية</h1>
        <p>اختر صفحة لعرضها</p>
      </div>
    );
  }
  return (
    <div className=" bg-violet-500">
      <div className="flex border h-auto w-300 px-20 py-10  ">
        <div className=" flex flex-col border bg-primary border-black w-52 py-5 items-center ">
          <img
            src={loge}
            alt=""
            width={100}
            height={100}
            className=" rounded-full p-3 text-center"
          /> 
          <div className="flex flex-col items-start gap-y-2">

          <ButtonComponent
            onClick={() => {handleButtonClick("veiwProfile")}}
            title="عرض الملف الشخصي"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />{" "}
          <ButtonComponent
            onClick={() => {handleButtonClick("profile")}}
            title=" الملف الشخصي"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />{" "}
          <ButtonComponent
            onClick={() => {handleButtonClick("imageProfile")}}
            title="الصورة"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />
             <ButtonComponent
            onClick={() => {}}
            title="امان الحساب"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            /> 
            <ButtonComponent
            onClick={() => {}}
            title=" الاشتراكات"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />
             <ButtonComponent
            onClick={() => {}}
            title=" طرق الدفع"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />
             <ButtonComponent
            onClick={() => {}}
            title="  الخصوصية"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />
            <ButtonComponent
            onClick={() => {}}
            title="الخروج من الحساب"
            icon={<PiUsersLight className="text-2xl text-textColorprimary" />}
            className="flex max-[700px]:hidden  h-12 p-3 rounded-1xl bg-primary  text-1xl text-textColorprimary  font-bold"
            />
            </div>
        </div>

        <div className="w-full flex flex-col justify-start p-10  border border-l-fuchsia-600 bg-slate-50 ">
          
        {content}
        </div>
       
      </div>
    </div>
  );
}
export default StudentProfile
