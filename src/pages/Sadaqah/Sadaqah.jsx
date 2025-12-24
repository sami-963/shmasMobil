import "./Sadaqah.css";
import "../../styles/global.css";
import TeamBanner from "../../components/team-banner/team-banner.jsx";
import AllCourseCards from "../../components/courescared/AllCourseCards.jsx";

import { FaPhone, FaComments, FaEnvelope } from "react-icons/fa";

export default function Sadaqah() {
  return (
    <main className="SadaqahPage">
      {/*hero section */}
      <div className="sadaqah-hero-section">
        <h1>المساهمة في نشر العلم</h1>
        <p>
          ساهم في نشر العلم عبر شراء دورة وإهدائها لمن يحتاجها.
           يمكنك اهداء الدورة لشخص تختاره، أو تركها
          لمنصتنا كي نوصلها إلى من يسعى للتعلّم ولا يملك القدرة عليه. مبادرة
          صغيرة منك قد تفتح بابًا كبيرًا في حياة أحدهم.
          <strong>
            {" "}
            قال رسول الله ﷺ: «من سلك طريقًا يلتمس فيه علمًا، سهّل الله له به
            طريقًا إلى الجنة»
          </strong>
        </p>
      </div>

      {/*cards */}
      <AllCourseCards />

      {/* قسم تواصل معنا */}
      <div className="sadaqah-Contact-options">
        {/* النص العلوي */}
        <div className="sadaqah-Contact-text">
          <h2>تواصل معنا</h2>
          <p>
            لأي استفسار يتعلق بالمساهمة أو دعم التعليم، يسعدنا التواصل معكم.
          </p>
        </div>

        {/* كروت تواصل معنا */}
        <div className="sadaqah-Contact-cards">
          {/* كرت الاتصال */}
          <div className="sadaqah-contact-card">
            <div className="floating-icon">
              <FaPhone />
            </div>
            <h3>اتصل بنا</h3>
            <p>للاستفسارات المباشرة المتعلقة بالتبرع أو الدعم.</p>
            <span className="card-info">+90 000 000 0000</span>
          </div>

          {/* كرت المحادثة */}
          <div className="sadaqah-contact-card">
            <div className="floating-icon">
              <FaComments />
            </div>
            <h3>محادثة عبر الرسائل</h3>
            <p>تواصل معنا عبر الرسائل وسنقوم بالرد في أقرب وقت.</p>
            <span className="card-info">متاح من 9 ص حتى 6 م</span>
          </div>

          {/* كرت الإيميل */}
          <div className="sadaqah-contact-card">
            <div className="floating-icon">
              <FaEnvelope />
            </div>
            <h3>إرسال بريد إلكتروني</h3>
            <p>يمكنك إرسال استفسارك وسنجيب خلال 24 ساعة.</p>
            <span className="card-info">support@madesign.com</span>
          </div>
        </div>
      </div>

    <TeamBanner
        text= "تم تطوير هذه الصفحة من قبل الطالبة أروى "
      />

    </main>
  );
}
