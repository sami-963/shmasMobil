// استيراد المكونات والأيقونات اللازمة
import Stars from "./stars"; // مكون عرض التقييم بالنجوم
import BookmarkBtn from "./fibookmarkbtn"; // زر الحفظ أو الإضافة للمفضلة
import { FaBook } from "react-icons/fa"; // أيقونة الدروس
import { FaUsers } from "react-icons/fa"; // أيقونة الطلاب
import { Link } from "react-router-dom"; // لربط الصفحات داخل التطبيق
import "./cursesMain.css";
// مكون بطاقة الدورة المسجلة
function Enroled_couresescard({
  id, // معرف الدورة لربطه بالرابط
  couresesImg, // صورة الدورة
  title, // عنوان الدورة (لـ alt الصورة)
  titles, // العنوان المعروض في البطاقة
  reviewss, // تقييم النجوم
  lessonsNum, // عدد الدروس
  studentsNum, // عدد الطلاب المسجلين
  Percentage, // نسبة الإنجاز
  link, // رابط تحميل الشهادة
  reviews, // عدد التقييمات
  iconColor,
}) {
  return (
    // الرابط الكامل للبطاقة يؤدي إلى صفحة تفاصيل الدورة
    <div className="enroled_couresescard">
      {" "}
      {/* البطاقة الآن غير قابلة للنقر بالكامل */}
      {/* صورة الدورة */}
      <Link to={`/CardsOfCoursess/${id}`}>
        <img src={couresesImg} alt={title} />
      </Link>
      {/* قسم التقييمات والحفظ */}
      <div className="reviews">
        <Stars rating={reviewss} /> {/* مكون النجوم */}
        <span>(التقيمات {reviews})</span> {/* عدد التقييمات */}
        {/* زر الحفظ/المفضلة */}
        <span className="Fibookmark">
          {iconColor ? <BookmarkBtn fixedColor={iconColor} /> : <BookmarkBtn />}
        </span>
      </div>
      {/* عنوان الدورة */}
      <Link to={`/CardsOfCoursess/${id}`}>
        <h2>{titles}</h2>
      </Link>
      {/* عدد الدروس وعدد الطلاب */}
      <div className="numberOfStudents">
        <div className="lessons">
          <span>الدورس</span>
          {lessonsNum} {/* عدد الدروس */}
          <FaBook /> {/* أيقونة الكتاب */}
        </div>
        <div className="stundents">
          <span>الطلاب</span>
          {studentsNum} {/* عدد الطلاب */}
          <FaUsers /> {/* أيقونة الطلاب */}
        </div>
      </div>
      {/* قسم الإنجاز والنسبة المئوية */}
      <div className="comolete">
        <div className="completenamber flex">
          <span>مكتمل</span>
          <span>{Percentage}%</span> {/* النسبة المئوية للإنجاز */}
        </div>
        {/* الخط الذي يمثل نسبة الإنجاز */}
        <span
          className="copleteline"
          style={{ "--lineWidth": `${Percentage}%` }}
        ></span>
      </div>
      {/* رابط تنزيل الشهادة */}
      <div className="dawnlaad">
        <Link to={link}>
          <p> تنزيل الشهادة</p>
        </Link>
      </div>
    </div>
  );
}

// تصدير المكون لاستخدامه في أجزاء أخرى من التطبيق
export default Enroled_couresescard;
