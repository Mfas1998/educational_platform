import { Drawer, Space } from "antd";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex justify-around items-center bg-white h-14 p-4
      text-textColor text-xl max-[700px]:justify-between "
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
          icon={<MenuOutlined className="text-textColor hover:text-primary" />}
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
          <SearchOutlined />
          <ShoppingCartOutlined />
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
      <div className="flex gap-6 items-center max-[700px]:hidden  ">
        <Link to="/login">تسجيل الدخول</Link>
        <Link className="bg-primary rounded-full px-4 py-1 text-white ">
          تواصل معنا
        </Link>
      </div>
    </div>
  );
};

export default Header;
