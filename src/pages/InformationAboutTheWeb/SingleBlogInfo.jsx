import { Link, Navigate } from "react-router-dom";
import "./SingleBlogInfo.css";
import { CardPage } from "./Information";
import {
  FaCalendar,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import Planet from "../../../public/download.jpg";
import { useParams } from "react-router-dom";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";

function SingleBlogInfo() {
  const { id } = useParams();
  const PageId = Number(id);
  const date = new Date();
  const CurrentDate = `${date.getDate()}-${date.getMonth() + 1
    }-${date.getFullYear()}`;

  return (
    <>
    {/*
          <div className="Halil-InformationDiv">
        <div className="Halil-InformationDiv-main">
          <div className="Right-div">
            <div className="Rt-1">
              <p className="p p-1">Recent News</p>
              {CardPage.slice(0, 3).map((card) => (
                <div key={card.id}>
                  <Link to={`/Blog/BlogCard/${card.id}`}>
                    <div className="Card-div-1">
                      <img className="CardImg" src={card.img} alt="Photo" />
                      <div className="Card-div-2">
                        <p className="p p-2">{card.title}</p>
                        <div className="Card-div-3">
                          <p className="p p-3">{CurrentDate}</p>
                          <FaCalendar />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="bgForRightDiv">
              <div className="Rt-2 Right-div2">
                <p className="p Rt-p1">جرّب خدماتنا</p>
                <p className="p Rt-p2">
                  أنت تحصل على خدمة سريعة وواضحة تلبي حاجتك بدون تعقيد. نركز على
                  الجودة، ونهتم بالتفاصيل، ونقدّم حلول جاهزة تساعدك تنجز شغلك
                  بسهولة. كل ما عليك هو التواصل معنا، والباقي نكمله لك.
                </p>
                <div className="Right-div3">
                  <div className="Right-div4">
                    <FaLocationDot />
                    <p className="p Rt-p3">Hasan Kalyoncu University</p>
                  </div>
                  <div className="Right-div4">
                    <FaPhone />
                    <p className="p Rt-p4">(+62) 123-321-543</p>
                  </div>
                  <div className="Right-div4">
                    <FaEnvelope />
                    <p className="p Rt-p5">madesign@support.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Rt-3 Right-div5">
              <p className="Rt-p6">الفئات</p>
              <div className=" Right-div6">
                <Link to={"/"} className="Link Right-div7">
                  <FaArrowRight className="arrow" />
                  <p className="Link-p">الرئيسية</p>
                </Link>
                <Link to={"/courses"} className="Link Right-div8">
                  <FaArrowRight className="arrow" />
                  <p className="Link-p">الدورات</p>
                </Link>
                <Link to={"/about"} className="Link Right-div9">
                  <FaArrowRight className="arrow" />
                  <p className="Link-p">نبذة عنه</p>
                </Link>
                <Link to={"/contact"} className="Link Right-div10">
                  <FaArrowRight className="arrow" />
                  <p className="Link-p">تواصل معنا</p>
                </Link>
                <Link to={"/courses"} className="Link Right-div11">
                  <FaArrowRight className="arrow" />
                  <p className="Link-p">الدورات</p>
                </Link>
              </div>
            </div>
          </div>
          */}
          <div className="Halil-InformationDiv container flex">

       <div className="Left-div flex">
            <div>
              {" "}
              {CardPage.map((card) =>
                card.id == id ? (
                  <div className="Main-Left">
                    <div className="article-opening">
                      <p className="Left-p1">{card.title}</p>
                      <p className="Left-p2">{card.text}</p>
                    </div>

                    <div className="articleFirstPart flex">
                      <div className="Left-img-wrapper">
                      <img
                      className="Left-img"
                      src={card.img}
                      width={"250px"}
                      alt=""
                    />
                    </div>

                      <div className="partContent">
                        <p className="Left-p3">{card.text2}</p>
                        <p className="Left-p4">{card.text3}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <div className="Left-plan-div flex">
                <img src={Planet} className="plan-img" alt="img" />
                <div className="left-plan-div-content">
                  <div className="Left-plan-div-1">
                    <p className="Left-plan-p-1">
                      نوفّر لك أدوات تدعم تعلّمك وتطوّرك{" "}
                    </p>
                    <div className="Left-plan-div-2">
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>موارد تعليمية متنوعة</p>
                      </div>
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>دعم لكل التخصصات</p>
                      </div>
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>تنظيم سهل للمحتوى</p>
                      </div>
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>خصوصية وأمان كامل</p>
                      </div>
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>تفاعل فعلي مع المحتوى</p>
                      </div>
                      <div className="Left-plan-div-3">
                        <FaCheck className="icon" />
                        <p>راحة في التصفح والاستخدام</p>
                      </div>
                    </div>
                  </div>
                   <p className="Left-down-p-1">
                    منصة شمس توفّر تجربة تعليمية واضحة ومريحة، بمحتوى وأدوات ودروس عملية تساعدك تطوّر مهاراتك بثقة وسهولة وتدعم تقدّمك خطوة بخطوة.
                   {/* منصة شمس مصممة لتمنحك تجربة تعليمية مريحة وواضحة. نحرص على
                    تقديم أدوات، مقالات، ودروس تساعدك تتقدّم بثقة وتكتسب مهارات
                    حقيقية. نطوّر خدماتنا باستمرار لنوفر لك بيئة تعليمية تلائم
                    احتياجاتك وتسهّل عليك الوصول للمعلومة الصحيحة. */}
                  </p>
                </div>
              </div>
              <div className="Left-down-div1 ">
                <div className="Left-down-div2 flex">
                  <p className="Left-down-p-2">
                    وسوم المقال : <span className="Left-down-span">مشروع </span>
                  </p>
                  <div className="Left-down-div3">
                    <p className="Left-down-p-3">مشاركة  </p>
                    <div className="Left-down-div4">
                      <a href="">
                        {" "}
                        <FaFacebookF />
                      </a>
                      <a href="">
                        {" "}
                        <FaXTwitter />
                      </a>
                      <a href="">
                        <FaLinkedinIn />
                      </a>
                      <a href="">
                        {" "}
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="Left-Connect">
              <p className="Left-Connect-p1">اترك تعليقك</p>
              <p className="Left-Connect-p2">
                **بريدك الإلكتروني لن يتم نشره. الحقول المطلوبة مميزة بعلامة **
              </p>
              <form className="form">
                <div className="form-div">
                  <label className="form-div-label" htmlFor="comment">
                    **التعليق **
                  </label>
                  <textarea
                    className="textArea"
                    name="comment"
                    id="comment"
                  ></textarea>
                </div>
                <div className="form-div">
                  <label className="form-div-label" htmlFor="Name">
                    **الاسم **
                  </label>
                  <input className="Name" type="text" id="Name" />
                </div>
                <div className="form-div">
                  <label className="form-div-label" htmlFor="email">
                    **البريد الإلكتروني **
                  </label>
                  <input className="Email" type="email" id="email" />
                </div>
                <div className="form-div">
                  <label className="form-div-label" htmlFor="Website">
                    الموقع الإلكتروني
                  </label>
                  <input className="Website" type="Website" id="Website" />
                </div>
              </form>
              <div>
                <div className="CheckBox">
                  <p className="CheckBox-p">
                    احفظ اسمي وبريدي الإلكتروني وموقعي في هذا المتصفح لاستخدامهم
                    عند التعليق مرة أخرى.
                  </p>
                  <input type="checkbox" />
                </div>
                <button className="CheckBox-Link">
                  <p className="CheckBox-Link-p">انشر التعليق</p>
                </button>
              </div>
            </div> */}

            <section className="comment-section flex">
                <div className="comment-header">
                    <h3>اترك تعليقك</h3>
                    <p>بريدك الإلكتروني لن يتم نشره. الحقول المطلوبة مميزة بعلامة *</p>
                </div>

                <form className="comment-form flex">
                    <div className="form-group flex full-width">
                        <label htmlFor="comment">التعليق *</label>
                        <textarea id="comment" name="comment" rows="7"></textarea>
                    </div>

                    <div className="form-row flex">
                        <div className="form-group name-group flex">
                            <label htmlFor="name">الاسم *</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-group email-group flex">
                            <label htmlFor="email">البريد الإلكتروني *</label>
                            <input type="email" id="email" />
                        </div>
                    </div>

                    <div className="form-group flex">
                         <label htmlFor="website">الموقع الإلكتروني</label>
                         <input type="url" id="website" />
                    </div>

                    <div className="checkbox-group flex">
                        <input type="checkbox" id="save-info" />
                        <label htmlFor="save-info">
                            احفظ اسمي وبريدي الإلكتروني وموقعي في هذا المتصفح لاستخدامهم عند التعليق مرة أخرى.
                        </label>
                    </div>

                    <button type="submit" className="btn-submit">انشر التعليق</button>
                </form>
            </section>

          </div>
          </div>
      <JoinUs />
    </>
  );
}
export default SingleBlogInfo;
  