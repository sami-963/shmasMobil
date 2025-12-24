// استيراد ملف CSS الخاص بصندوق لوحة التحكم
import "./dashbordbox.css";

// مكون صندوق لوحة التحكم
function DashbordBox({ iconkreis, number, name, color }) {
  return (
    <div className="D-box" style={{ "--main-color": color }}>
      {/* تمرير اللون كمتحول CSS لكل صندوق */}
      <div className="iconkreis">{iconkreis}</div> {/* أيقونة الصندوق */}
      <div className="courses-number">{number}</div> {/* الرقم أو القيمة */}
      <div className="courses-name">{name}</div> {/* اسم الصندوق */}
    </div>
  );
}

// تصدير المكون لاستخدامه في لوحة التحكم
export default DashbordBox;
