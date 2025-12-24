import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "../Team/Team.css";
import "../Home/home.css";
import "..//../styles/global.css";

import "..//../components/header/header.jsx";
import CourseCard from "..//../components/courescared/Course3d.jsx";
import PartnerCompanies from "../../components/PartnerCompanies/PartnerCompanies";
import MethodologyS from "../../components/meethodeCreis/meethodecreis.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PersonRate from "../../components/Team/PersonRate.jsx";
import Card from "../../components/Card/card.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";
import BlogCard from "../../components/Blogs/BlogCard"

import { FaPlay } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { LuPercent } from "react-icons/lu";


import img1 from "../../../public/tablet-and-computers.jpg";
import img2 from "../../../public/printer-in-modern.jpg";
import img3 from "../../../public/house-interior.jpg";
import blogImg2 from "../../../public/BlogImg2.jpg";
import blogImg3 from "../../../public/BlogImg3.jpg"
import blogImg4 from "../../../public/BlogImg4.jpg"
import Our_lis from "../../components/home/Our_lis.jsx";
import Elementor from "../../components/home/Elementor.jsx";

import "swiper/css";

// const Blog_cardd = [
//   {
//     id: 1,
//     img: img1,
//     title: "أساسيات التعلّم الذاتي",
//     text: "مقال يقدم نظرة شاملة حول كيف تبدأ رحلتك التعليمية خطوة بخطوة وبأسلوب مبسط.",
//   },

//   {
//     id: 2,
//     img: img2,
//     title: "طرق فعّالة لتنظيم وقت الدراسة",
//     text: "تعرف على أفضل الأساليب والطرق التي تساعدك على إدارة وقتك وتحسين إنتاجيتك في التعلم.",
//   },

//   {
//     id: 3,
//     img: img3,
//     title: "كيف تختار الدورة المناسبة لك؟",
//     text: "مقال يشرح أهم المعايير التي تساعدك في اختيار الدورة المناسبة حسب مستواك واهتماماتك.",
//   },
// ];
const BlogsCard = [
    { id: 2, img: blogImg2, title: " مهارات ستحتاجها قبل الدخول لسوق العمل ", text: " أهم المهارات التقنية التي ترفع فرص التوظيف للطلاب والخريجين" },
    { id: 3, img: blogImg3, title: " تنجح في تخصص الهندسة من السنة الأولى ", text: "نصائح دراسية وأدوات عملية تساعدك على التفوق في الهندسة " },
    { id: 4, img: blogImg4, title: " بناء ملف أعمال قوي في التصميم ", text: "خطوات عملية لبناء الملف الشخصي يجذب الشركات والعملاء" },
]
const TotalPersonRate = [
        {
            id: 1,
           img:"./Man-team.png",
            title: "عميل",
            name: "Halil",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 2,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Arwa",
             text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 3,
            img:"./Man-team.png",
            title: "عميل",
            name: "Sami",
             text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 4,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Lujain",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 5,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Sheyma",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 6,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Maha",
            text: "كانت تجربة مميزة وانصح بها ",
        },

        {id: 7,
            img:"./Man-team.png",
            title: "عميل",
            name: "Abdulrahman",
            text: "كانت تجربة مميزة وانصح بها ",
        },
];

function Home() {
  return (
    <div className="g-home">

       <TeamBanner
          text= "تم تطوير هذا الموقع من قبل طلاب هذه المنصة التعليمية."
      />
      <main className="container flex">
        <div className="main_img">
          <img src="/Working-at-Office.png" alt="" />
        </div>
        <div className="main_text">
          <p>معًا لبناء مستقبلٍ رقميٍّ مشرق</p>
          <h3>
            دعونا نتعلم <span> مهارات جديدة </span> بسرعة وبطريقة إبداعية
          </h3>
          <p>
            نقدّم لك مجموعة متكاملة من الدورات التعليمية المصممة خصيصًا لمساعدتك
            على تطوير مهاراتك في مختلف المجالات، مع محتوى مناسب لجميع
            المستويات—من المبتدئ الذي يبدأ من الصفر، إلى المتقدم الذي يريد
            الاحتراف.
          </p>
          <div className="startd_box">
            <div className="learn_more flex">
              <Link className="" to="/">
                تعرف علي مزيد{" "}
              </Link>
              <div className="play">
                <span>
                  <FaPlay className="faplay" />
                </span>
              </div>
            </div>
            <Link className="buttun" to="/Courses">
              <span>البدا</span>
            </Link>
          </div>
        </div>
      </main>
      <div className="container d3-curses ">
        <div className="boxs_tob flex">
          <div className="box_text">
            <h5>ماذا نقدّم؟</h5>

            <h3>
              نحن نقدّم لك دورة
              <span> شاملة ومتكاملة</span>
            </h3>
            <p>
              {" "}
              هنا تتعلّم جميع الأساسيات بطريقة احترافية، مع أفضل المدرّسين
              المتخصصين في المجال.
            </p>
            <button>اقرا المزيد</button>
          </div>
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس جافا سكريبت"
            imgSrc="/icon-1.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-2.png"
          />
        </div>
        <div className="boxs_tob flex">
          <CourseCard
            className=""
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس جافا سكريبت"
            imgSrc="/icon-3.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-6.png"
          />
          <CourseCard
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            title="كورس React"
            imgSrc="/icon-7.png"
          />
          <CourseCard
            title="كورس التصميم 3D"
            description="    هنا تتعلم جميع أساسيات الجافا سكربت بشكل احترافي، مع أفضل المدرسين
              المتخصصين في المجال."
            imgSrc="/icon-5.png"
          />
        </div>
      </div>
      {/*  */}
      <PartnerCompanies />
      {/*  */}
      <MethodologyS />
      {/*  */}
      <div className="coursesSectionTitle">
        <SectionTitle
          subTitle="ميزات الدورات"
          mainTitle="أفضل الدورات المتاحة لك"
          description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
        />
      </div>
      <div className="cards container">
        <Card
          imageSrc="/courses-image3.jpg"
          price="49.00"
          rating="4"
          title="HTML"
          description="تعلم أساسيات بناء صفحات الويب باستخدام HTML من خلال خطوات عملية. تبدأ الدورة بشرح العناصر الدلالية وتنظيم هيكل الصفحة، ثم ستقوم ببناء صفحات كاملة مع النماذج والجداول والوسائط."
          link="/courses/html"
        />
        <Card
          imageSrc="/courses-image2.jpg"
          price="59.00"
          rating="4"
          title="CSS"
          description="أضف الجمال والتنسيق إلى صفحاتك باستخدام CSS الحديثة بأسلوب عملي وممتع. تبدأ الدورة بأساسيات التنسيق والألوان، ثم تتقدم إلى تقنيات متقدمة مثل Flexbox وGrid وتصميم الصفحات المتجاوبة."
          link="/courses/css"
        />
        <Card
          imageSrc="/courses-image1.jpg"
          price="69.00"
          rating="5"
          title="JavaScript"
          description="حوّل صفحاتك من ساكنة إلى تفاعلية باستخدام JavaScript بطريقة عملية ومباشرة. تبدأ الدورة بالأساسيات مثل المتغيرات والدوال، ثم تتعلم التحكم في DOM والأحداث، والعمل مع البيانات عبر Fetch وPromises. ستطبق كل مفهوم في مشاريع صغيرة، لتتمكن بنهاية الدورة من بناء صفحات ديناميكية وتفاعلية بشكل كامل."
          link="/courses/javascript"
        />
      </div>
      <div className="our_working container flex">
        <div className="our_container">
          <p>كيف نعمل؟</p>
          <h3>آلية سير العمل</h3>
          <p className="pour">
            نقدّم لك طريقة عمل بسيطة وواضحة تساعدك على فهم خطواتنا من البداية
            وحتى النهاية. نحرص على أن تكون كل مرحلة منظمة وسهلة لضمان تجربة سلسة
            وفعّالة للمستخدم.
          </p>
            <div className="liner"></div>
          <div className="working-steps flex">
              <Our_lis
                classNamess="akivs"
                imgs={<FaRunning />}
                our_titel="اختر دورتك"
                our_p="نقدّم لك مجموعة واسعة من الدورات المصممة بعناية لتناسب جميع ..."
              />

              <Our_lis
                imgs={<FaRegFileAlt />}
                our_titel=" ارسل معلوماتك "
                our_p="بعد ارسل معلوماتك  يمكنك   بدء التعلم بسهولة..."
              />

              <Our_lis
                imgs={<FaRegCreditCard />}
                our_titel="أكمل عملية الشراء"
                our_p="قم بإتمام عملية التسجيل والدفع بخطوات بسيطة وسريعة..."
              />

              <Our_lis
                imgs={<FaTools />}
                our_titel="ابدأ رحلتك وتعلم"
                our_p="ابدأ الآن رحلتك التعليمية معنا! ستتمكن من الوصول إلى الدروس..."
              />
          </div>
        </div>
        <div className="working_img">
          <img src= "/HomePhoto.png" width={"300px"} alt="" />
        </div>
      </div>
      <div className="elementor-section container flex ">
        <Elementor
          color={"#7c4dff"}
          namber="8"
          el_icon={<MdCalendarToday />}
          eltext="سنوات الخبرة"
        />
        <Elementor
          color={"#00b4ff"}
          namber="35"
          el_icon={<FaTrophy />}
          eltext="تم انهاء المشروع"
        />
        <Elementor
          color={"#00b4ff"}
          namber="80"
          el_icon={<LuPercent />}
          eltext="استعادة الأموال"
        />
        <Elementor
          color={"#00b4ff"}
          namber="30"
          el_icon={<LuUsers />}
          eltext="  فريق الخبراء"
        />
        <Elementor
          color={"#7c4dff"}
          namber="150"
          el_icon={<MdAccessTime />}
          eltext="الممارسة الإبداعية"
        />
      </div>

        <div className="Testimonial container">
          <div className="testimonial-header flex">
            <div className="text flex">
              <p className="testimonial-label">شهادة العملاء</p>
                    <p className="testimonial-title">رأي عملائنا</p>
                    <p className="testimonial-desc">
                        خدمة مميزة وجودة عالية جعلت تجربتنا أفضل مما توقّعنا.
                    </p>
            </div>
            <div className="readMore">
              <Link className="read-more-btn" to={"/"}>
                اقرأ المزيد
              </Link>
            </div>
          </div>
          <div className="testimonial-slider">
                    <Swiper
                        className="my-swiper"
                        slidesPerView={"auto"}
                        spaceBetween={25}
                        loop={true}
                        freeMode={true}
                    >
                        {TotalPersonRate.map((person) => (
                            <SwiperSlide key={person.id} style={{width: 'auto'}}>
                                <PersonRate
                                    img={person.img}
                                    text={person.text}
                                    name={person.name}
                                    title={person.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </div>
      {/* </div> */}
      <SectionTitle
        subTitle="ميزات الدورات"
        mainTitle="أفضل الدورات المتاحة لك"
        description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
      />
      <div className="cnt container">
        <div className="down-card flex">
            {BlogsCard.map((card) =>
                <Link to={`/Blog/BlogCard/${card.id}`}>
                    <BlogCard key={card.id} img={card.img} title={card.title} text={card.text} icon={card.icon} />
                </Link>
            )}
        </div>
      </div>{" "}

       <TeamBanner
          text= "تم تطوير هذه الصفحة من قبل المبرمج سامي"
      />
    </div>
  );
}
export default Home;
