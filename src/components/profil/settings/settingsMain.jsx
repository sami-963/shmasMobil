// استيراد الهooks والمكونات والأيقونات
import { useState } from "react";
import "./settingsMain.css"; // CSS خاص بالدورات
import Settingprofil from "./setting_profil/settingprofil"; // CSS خاص بالدورات
import ChangePassword from "./setting_profil/pasword"; // CSS خاص بالدورات
function SettingsMain() {
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
            الملف الشخصي
          </li>
          {/* تبويب الدورات المسجّلة */}

          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)} // عند الضغط يتم تفعيل التبويب
          >
            كلمه المرور{" "}
          </li>
        </ul>
      </div>
      {/* محتوى الدورات */}
      <div className="courses-content">
        {activeTab === 1 && <ChangePassword/>}
        {activeTab === 0 && <Settingprofil  />}
      </div>
    </div>
  );
}

// تصدير المكون لاستخدامه في أجزاء أخرى من التطبيق
export default SettingsMain;
