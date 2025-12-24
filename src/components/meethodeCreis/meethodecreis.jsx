import "../../components/meethodeCreis/meethodecreis.jsx"; // جايب الكومبوننت تبع الدوائر من فولدر معين
import "../../components/meethodeCreis/metehddresi.css"; // جايب ملف الCSS اللي فيه ستايلات الدوائر
import Illustration from "../../../public/Illustration.png"; // جايب صورة ممكن تستخدمها
import { FaCheck } from "react-icons/fa"; // جايب الايقونة تبع الصح من مكتبة React Icons
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// كومبوننت صغير لكل دائرة فيها النسبة
function StatCircle({ percent, title }) {
  // هاد الكود بيعمل الخلفية التدرج اللوني للدائرة حسب النسبة
  const rotation = `conic-gradient(
   ${"#7c4dff"} 0%,
    ${"#00b4ff"} ${percent}%,
    rgba(255,255,255,0.08) ${percent}% 100%
  )`;

  return (
    <div className="statBoxx">
      {" "}
      {/* الصندوق اللي فيه الدائرة والنص */}
      <div className="circleWrapperr">
        {" "}
        {/* غلاف الدائرة */}
        <div className="circlee" style={{ background: rotation }}>
          {" "}
          {/* الدائرة نفسها */}
          <span>{percent}%</span> {/* الرقم اللي جوه الدائرة */}
        </div>
      </div>
      <h3>{title}</h3> {/* عنوان كل دائرة */}
    </div>
  );
}

// الكومبوننت الرئيسي تبع القسم كله
export default function MethodologySectionn() {
  return (
    <div className="methodologySection_text container">
      {" "}
      {/* الصندوق الكبير اللي فيه كل شي */}
      <div className="methodologySecti_container flex">
        {" "}
        {/* الحاوية اللي بتقسم القسم ليمين وشمال */}
        <div className="methodologySecti_contacht">
          {" "}
          {/* القسم اليسار فيه النصوص */}
          <p className="core-titel">الميزات الأساسية</p> {/* عنوان صغير */}
          <h2 className="more_baout-titel">
            تعرف على المزيد حول <span>منهجيتنا</span>{" "}
          </h2>{" "}
          {/* عنوان كبير مع تلوين جزء منه */}
          <p className="text_more">
            نقدّم لك محتوى تعليمي منظم وعملي، مصمم بطريقة تساعدك على فهم
            المهارات الجديدة بسهولة وتطبيقها في حياتك العملية.{" "}
          </p>{" "}
          {/* نص توضيحي */}
          <div className="featter_img flex">
            {" "}
            {/* القسم اللي فيه قائمة المميزات مع الصورة */}
            <ul className="featureLists">
              <li className="flex">
                <FaCheck color="#1DCFFC" size={20} /> {/* ايقونة صح */}
                <p>منصة موثوقة</p> {/* نص الميزة */}
              </li>
              <li className="flex">
                <FaCheck color="#1DCFFC" size={20} />
                <p>متعددة الأغراض </p>
              </li>
              <li className="flex">
                <FaCheck color="#1DCFFC" size={20} />
                <p>أمان مضمون</p>
              </li>
              <li className="flex">
                <FaCheck color="#1DCFFC" size={20} />
                <p>تفاعلات حقيقية</p>
              </li>
              <li className="flex">
                <FaCheck color="#1DCFFC" size={20} />
                <p>تجربة مستخدم</p>
              </li>
            </ul>
            <div className="featurimg">
              <img
                width="300px"
                src="/public/homeimgsss-removebg-preview.png"
                alt=""
              />{" "}
              {/* الصورة على اليمين */}
            </div>
          </div>
        </div>
        <div className="methodologyStatss">
          {" "}
          {/* القسم اليمين فيه الدوائر */}
          <StatCircle percent={85} title= "لغات البرمجة" />{" "}
          {/* دائرة 85% */}
          <StatCircle percent={88} title="تطوير مواقع" /> {/* دائرة 67% */}
          <StatCircle percent={35} title=" الهندسة " /> {/* دائرة 20% */}
          <StatCircle percent={76} title=" المهارات العملية والتطبيقية" />{" "}
          {/* دائرة 76% */}
        </div>
      </div>
    </div>
  );
}
