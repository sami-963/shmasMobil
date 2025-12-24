// استيراد الهooks والمكونات والأيقونات
import { useState } from "react";
import "./cursesMain.css"; // CSS خاص بالدورات
import Ativcardcard from "./active_courserCard";
import Allcuourses from "./allcuourses";
function CursersMain() {
  const [activeTab, setActiveTab] = useState(0);
  // state لتحديد التبويب النشط: 0 = المسجّلة، 1 = النشِطة، 2 = جميع الدورات

  // بيانات الدورات

  return (
    <div className="courses-container">
      {" "}
      {/* الحاوية الرئيسية للدورات */}
      {/* تبويبات الدورات */}
      <div className="courses-header">
        <ul className="courses-tabs flex">
          {/* تبويب الدورات النشِطة */}

          <li
            className={activeTab === 0 ? "active" : ""}
            onClick={() => setActiveTab(0)}
          >
            الدورات النشِطة
          </li>
          {/* تبويب الدورات المسجّلة */}

          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)} // عند الضغط يتم تفعيل التبويب
          >
            جميع الدورات{" "}
          </li>
        </ul>
      </div>
      {/* محتوى الدورات */}
      <div className="courses-content">
        {activeTab ===  1&& <Allcuourses />}
        {activeTab === 0 && <Ativcardcard />}
      </div>
    </div>
  );
}

// تصدير المكون لاستخدامه في أجزاء أخرى من التطبيق
export default CursersMain;
