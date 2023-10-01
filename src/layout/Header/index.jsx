import { Drawer, Space } from "antd";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import ButtonComponent from "../../components/Button";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-full flex justify-between items-center bg-white h-14 p-4 text-textColor text-xl"
    >
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Space direction="vertical">
          <Link to="#" className="text-textColor text-xl">
            تسجيل دخول
          </Link>
          <Link to="#" className="text-textColor text-xl">
            إنشاء حساب
          </Link>
        </Space>
      </Drawer>

      <div className="text-textColor hidden max-[700px]:block ">
        <ButtonComponent
          className="border-none"
          icon={<AiOutlineMenu className="text-textColor hover:text-primary" />}
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <img src={logo} alt="" width={50} height={50} />
        <h3>مكاوش</h3>
      </div>
      <div className="hidden max-[700px]:block">
        <Space>
          <AiOutlineSearch />
          <AiOutlineShoppingCart />
        </Space>
      </div>

      <div className=" max-[700px]:hidden ">
        <ul className="flex gap-6  ">
          <li>
            <Link to="#">الرئيسية</Link>
          </li>
          <li>
            <Link to="#">الكورسات</Link>
          </li>
          <li>
            <Link to="#">الجامعات</Link>
          </li>
          <li>
            <Link to="#">من نحن</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center max-[700px]:hidden ">
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="signup">أشتراك</Link>
        <Link className="bg-primary text-center rounded-full px-4 py-1 text-white ">
          تواصل معنا
        </Link>
      </div>
    </div>
  );
};

export default Header;
