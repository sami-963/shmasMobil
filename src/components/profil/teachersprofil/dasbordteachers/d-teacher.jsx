// استيراد ملف CSS الخاص بلوحة التحكم
import "./d-teacher.css";
import { Link } from "react-router-dom"; // لربط الصفحات داخل التطبيق

// استيراد مكون صندوق لوحة التحكم
import DashbordBox from "../../dashbordbox/DashbordBox";
import Myprofil from "../../Myprofil/Myprofil";
// استيراد مكون الدورات المسجلة
import CursersMain from "../../Enrolled_Courses/cursersMain";
import Wishlist from "../.././Wishlist/wishlist";
import OderHistory from "../.././oirder_history/orderHistory";
import MycoursesMain from "../../dashbordbox/mycourses";
import SettingsMain from "../../settings/settingsMain";
import { Navigate } from "react-router-dom";

// مكون Dashbord الرئيسي
function D_teacher({ dashbordData, section }) {
  const ativcarddata = [
    {
      info_label: " تاريخ البدا",
      info_value: "February 25, 2025 6:01 am",
    },
    {
      info_label: " الاسم ",
      info_value: "سامي ",
    },
    {
      info_label: " الكنيه ",
      info_value: "سميسمم ",
    },
    {
      info_label: " اسم المستخدم ",
      info_value: "سامي ",
    },
    {
      info_label: " الاسم ",
      info_value: "sami-963 ",
    },
    {
      info_label: " الايميل ",
      info_value: "simesmsami@gmail.com ",
    },
    {
      info_label: " رقم الجوال ",
      info_value: "+49 15210379018 ",
    },
    {
      info_label: " نبده عني ",
      info_value:
        " مرحبًا! اسمي سامي وأنا مبرمج شغوف وطموح. أتمتع بمهارات قوية في تطوير الويب والبرمجيات، وأسعى دائمًا لتحويل الأفكار إلى مشاريع واقعية ومبتكرة. أؤمن بالعمل الجاد والتعلم المستمر لتحقيق النجاح وإحداث فرق حقيقي في المجال التقني.  ",
    },
  ];

  return (
    <div className="dashobrd-contaniner">
      {" "}
      {/* الحاوية الرئيسية للوحة التحكم */}
      {/* رأس لوحة التحكم */}
      <div className="dashbord-header">
        <h4>لوحه التحكم</h4>
      </div>
      {/* عرض صناديق لوحة التحكم فقط إذا كان القسم "dashboard" */}
      {section === "dashboard" && (
        <div className="dashbord-boxs">
          {" "}
          {/* حاوية الصناديق */}
   
            {dashbordData.map((item, index) => (
              <DashbordBox
                key={index} // المفتاح الفريد لكل عنصر في الماب
                iconkreis={item.iconkreis} // أيقونة الصندوق
                number={item.number} // الرقم أو القيمة المعروضة في الصندوق
                name={item.name} // اسم الصندوق
                color={item.color} // لون الصندوق
              />
            ))}
          <MycoursesMain />
        </div>
      )}
      {/* عرض الدورات المسجلة إذا كان القسم "courses" */}
      {section === "courses" && (
        <div className="enrolled_Courses">
          <CursersMain /> {/* مكون الدورات */}
        </div>
      )}
      {/* عرض معلومات الملف الشخصي إذا كان القسم "profile" */}
      {section === "profile" && (
        <div className="personal-info-section">
          {ativcarddata.map((coursea) => (
            <Myprofil
              info_label={coursea.info_label}
              info_value={coursea.info_value}
            />
          ))}
        </div>
      )}
      {/* عرض العناصر المحفوظة إذا كان القسم "wishlist" */}
      {section === "wishlist" && (
        <div className="wishlist_c">
          <Wishlist /> {/* مكون الدورات */}
        </div>
      )}
      {/* عرض الطلبات إذا كان القسم "orders" */}
      {section === "orders" && (
        <div className="OderHistory">
          <OderHistory /> {/* مكون الدورات */}
        </div>
      )}
      {/* عرض الاعدادات إذا كان القسم "settings" */}
      {section === "settings" && (
        <div className="SettingsMain">
          <SettingsMain /> {/* مكون الدورات */}
        </div>
      )}
      {/* عرض تسجيل الخروج إذا كان القسم "logout" */}
      {section === "logout" && <Navigate to="/LongIn" />}
    </div>
  );
}

// تصدير المكون لاستخدامه في أجزاء أخرى من التطبيق
export default D_teacher;
