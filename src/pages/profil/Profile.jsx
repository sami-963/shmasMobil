// استيراد useState لإدارة الحالة
import { useState } from "react";
import TeamBanner from "../../components/team-banner/team-banner.jsx";
// استيراد CSS
import "./Profile.css";
import "../../styles/global.css";
// استيراد بطاقة معلومات المستخدم
import UserInfoCard from "../../components/profil/UserInfoCard";
// استيراد أيقونات عامة
import { FaUser, FaBook, FaCertificate } from "react-icons/fa";
import {
  LuLayoutDashboard, // أيقونة لوحة التحكم
  LuUser, // أيقونة الملف الشخصي
  LuBookOpen, // أيقونة الدورات المسجّلة
  LuBookmark, // أيقونة المحفوظات
  LuFileText, // أيقونة الطلبات
  LuSettings, // أيقونة الإعدادات
  LuLogOut, // أيقونة تسجيل الخروج
} from "react-icons/lu";

// استيراد مكون لوحة التحكم
import Dashbord from "../../components/profil/dashbord/Dashbord";

function Profil() {
  const FullName = "Sami Simeism"; // اسم المستخدم

  // state لتحديد القسم المعروض حاليًا
  const [activeSection, setActiveSection] = useState("dashboard");

  // بيانات الصناديق في لوحة التحكم
  const dashbordData = [
    { iconkreis: <FaBook />, number: 10, name: "الدورات", color: "#ac01ff" },
    {
      iconkreis: <FaCertificate />,
      number: 4,
      name: "الشهادات",
      color: "#1dcffd",
    },
    {
      iconkreis: <FaCertificate />,
      number: 4,
      name: "الشهادات",
      color: "#1dcfbc",
    },
    {
      iconkreis: <FaCertificate />,
      number: 4,
      name: "الشهادات",
      color: "#1d4ffc",
    },
    {
      iconkreis: <FaCertificate />,
      number: 4,
      name: "الشهادات",
      color: "#1dccfc",
    },
    { iconkreis: <FaUser />, number: 1, name: "المستخدمين", color: "#ac01ff" },
  ];

  // روابط القائمة الرئيسية
  const menuLinks = [
    { label: "مركز التحكم", icon: <LuLayoutDashboard />, section: "dashboard" },
    { label: "الدورات", icon: <LuBookOpen />, section: "courses" },
    { label: "ملفي الشخصي", icon: <LuUser />, section: "profile" },
    { label: "المحفوظات", icon: <LuBookmark />, section: "wishlist" },
    // { label: "الطلبات", icon: <LuFileText />, section: "orders" },
  ];

  // روابط المستخدم (الإعدادات وتسجيل الخروج)
  const userLinks = [
    { label: "الاعدادات", icon: <LuSettings />, section: "settings" },
    { label: "تسجيل خروج", icon: <LuLogOut />, section: "logout" },
  ];

  return (
    <div className="profil flex container">
      {" "}
      {/* الحاوية الرئيسية */}
      {/* رأس الملف الشخصي */}
      <div className="profil_header">
        <img className="profilimgs" src="/public/profilheader.png" alt="" />

        <UserInfoCard
          profileImg="/public/prifil.img.png" // صورة المستخدم
          fullName={FullName} // الاسم الكامل
          coursesNum={5} // عدد الدورات
          certNum={4} // عدد الشهادات
          courseIcon={<FaBook />}
          certIcon={<FaCertificate />}
          Courses={"الدورات"}
          Certificates={"الشهادات"}
        />
        {/* صورة جانبية للملف الشخصي */}
      </div>
      {/* القسم الجانبي واللوحة */}
      <div className="bacsidebae">
        <div className="sidebae flex">
          {/* القائمة الجانبية */}
          <div className="dashboard-sidebae">
            <div className="menu-item">
              <h4>مرحبا: {FullName}</h4> {/* تحية المستخدم */}
              <ul>
                {/* روابط القائمة الرئيسية */}
                {menuLinks.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`linksboxMenu ${
                        activeSection === item.section ? "activees" : ""
                      }`}
                      onClick={() => setActiveSection(item.section)} // تغيير القسم عند الضغط
                    >
                      {item.icon} {/* أيقونة القسم */}
                      <span>{item.label}</span> {/* اسم القسم */}
                    </button>
                  </li>
                ))}
                <h5 className="userspan">تعديل</h5> {/* عنوان روابط المستخدم */}
                {/* روابط المستخدم */}
                {userLinks.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`linksboxMenu ${
                        activeSection === item.section ? "activees" : ""
                      }`}
                      onClick={() => setActiveSection(item.section)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* اللوحة الرئيسية */}
          <div className="mainn">
            <Dashbord dashbordData={dashbordData} section={activeSection} />
          </div>
        </div>
      </div>

       <TeamBanner
         text= "تم تطوير هذه الصفحة من قبل المبرمج سامي"
        />
    </div>
  );
}

// تصدير مكون الملف الشخصي
export default Profil;
