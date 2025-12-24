import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { useState } from "react"; 
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import CoursesHeroSection from "../../components/coursesHeroSection/coursesHeroSection.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";
import "../../styles/global.css";

export default function Contact() {
  let [formInput, setFormInput] = useState({
    Name: "",
    Email: "",
    YourSubject: "",
    YourMessage: ""
  });
  let handelFormsubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
  };
  return (
      <section className="Text-Contact-us">
    
     <CoursesHeroSection
        image="./imgForContact.png"
        title="تواصل معنا"
        description="يسعدنا أن نرى منك رسالة لكي نبني مستقبل مشرق. "
        buttonText="ارسل رسالة الان"
        buttonLink="https://wa.me/905399127498"
        subtext="نحن جاهزون لنتواصل معك دائماً"
      />

      <div className="Contact-layout">
        <form onSubmit={handelFormsubmit} className="form-login">
          <div className="inputs">
            <input
              value={formInput.Name}
              onChange={(e) =>
                setFormInput({ ...formInput, Name: e.target.value })
              }
              type="text"
              placeholder="الاسم"
            />

            <input
              value={formInput.Email}
              onChange={(e) =>
                setFormInput({ ...formInput, Email: e.target.value })
              }
              type="text"
              placeholder="الايميل"
            />

            <input
              value={formInput.YourSubject}
              onChange={(e) =>
                setFormInput({ ...formInput, YourSubject: e.target.value })
              }
              type="text"
              placeholder="الموضوع"
            />

            <textarea
              value={formInput.YourMessage}
              onChange={(e) =>
                setFormInput({ ...formInput, YourMessage: e.target.value })
              }
              placeholder="الرسالة"
              rows="10"
            ></textarea>

            <input type="submit" value="إرسال" className="submit" />
          </div>

          <div className="Icon-container-merged">
            <h1>تواصل معنا</h1>
            <span>تواصلك معنا هو خطوتك الاولى نحو تجربة افضل</span>
            <p>نحن بأنتظار رسالتك.</p>


            <div className="icon-box">
              <div className="icon-circle">
                <FaEnvelope size={24} />
              </div>
              <div className="icon-text">
                <h4>البريد الإلكتروني</h4>
                <p>madesign@support.com</p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-circle">
                <FaPhone size={24} />
              </div>
              <div className="icon-text">
                <h4>الهاتف</h4>
                <p>98 74 912 539 (90+)</p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-circle">
                <FaMapMarkerAlt size={24} />
              </div>
              <div className="icon-text">
                <h4>نحن معك </h4>
                <p>في كل مكان</p>
              </div>
            </div>


          </div>

          <div className="Contact-us-img">
            <img src="/photoOfContact.png" alt="صورة التواصل" />
          </div>
        </form>
      </div>
      <div className="contact-join-us">
       
      </div>

         {/*JoinUs component */}
            <JoinUs />
      
             <TeamBanner
               text= "تم تطوير هذه الصفحة من قبل الطالبة لجين"
               TeamClass="Container-team-son"
             />
    </section>
  );
}