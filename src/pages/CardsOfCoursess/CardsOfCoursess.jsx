import { useState } from "react";
import "../../styles/global.css";
import "./CardsOfCoursess.css";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa";
import CoursesHeroSection from "../../components/coursesHeroSection/coursesHeroSection.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";
// import sep1 from "../../../public/sep1.webp"

export default function CardsOfCoursess() {
  const { id } = useParams();

  //for playing video  icon-down
 const [activeCard, setActiveCard] = useState(0);

  //  بيانات الدورات
  const CoursesLessons = {
    1: {
      image:"/myCoursePageheroImg.png",
      title: "لوحة تعلم JavaScript",
      description: "هنا تجد جميع دروسك وواجباتك وكل ما تحتاجه لتعلم JavaScript",
      lessons: [
        { name: "مقدمة شاملة عن المتغيرات", time: "20 دقيقة", type: "تحليل", teacher: "الأستاذ علي حساني" },
        { name: "استخدام حلقات التكرار عمليًا", time: "40 دقيقة", type: "تدريب", teacher: "الأستاذ علي حساني" },
        { name: "بناء دوال احترافية في JavaScript", time: "30 دقيقة", type: "مشروع صغير", teacher: "الأستاذ علي حساني" },
        { name: "مقدمة شاملة عن المتغيرات", time: "20 دقيقة", type: "تحليل", teacher: "الأستاذ علي حساني" },
        { name: "استخدام حلقات التكرار عمليًا", time: "40 دقيقة", type: "تدريب", teacher: "الأستاذ علي حساني" },
        { name: "بناء دوال احترافية في JavaScript", time: "30 دقيقة", type: "مشروع صغير", teacher: "الأستاذ علي حساني" },
      ],
      url: "https://yourserver.com/videos/lesson2.mp4",
      homework : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae dignissimos rem accusantium. Minus quod aut nulla officiis fugiat hic excepturi consequuntur, veniam veritatis exercitationem!" 
    },

    2: {
      image:"/myCoursePageheroImg.png",
      title: "لوحة تعلم CSS",
      description: "هنا تجد جميع دروسك وواجباتك وكل ما تحتاجه لتعلم CSS",
      lessons: [
        { name: "شرح شامل لطرق تنسيق النصوص", time: "10 دقائق", type: "شرح", teacher: "الأستاذ علي حساني" },
        { name: "كيفية تصميم الأزرار باحترافية", time: "15 دقيقة", type: "مشروع صغير", teacher: "الأستاذ علي حساني" },
        { name: "تطبيقات عملية على Flexbox و Grid", time: "35 دقيقة", type: "تدريب", teacher: "الأستاذ علي حساني" },
        { name: "شرح شامل لطرق تنسيق النصوص", time: "10 دقائق", type: "شرح", teacher: "الأستاذ علي حساني" },
        { name: "كيفية تصميم الأزرار باحترافية", time: "15 دقيقة", type: "مشروع صغير", teacher: "الأستاذ علي حساني" },
        { name: "تطبيقات عملية على Flexbox و Grid", time: "35 دقيقة", type: "تدريب", teacher: "الأستاذ علي حساني" }
      ],
      url: "https://yourserver.com/videos/lesson1.mp4",
      homework : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae dignissimos rem accusantium. Minus quod aut nulla officiis fugiat hic excepturi consequuntur, veniam veritatis exercitationem!" 
    },

    3: {
      image:"/myCoursePageheroImg.png",
      title: "لوحة تعلم HTML",
      description:"هنا تجد جميع دروسك وواجباتك وكل ما تحتاجه لتعلم HTML",
      lessons: [
        { name: "كيفية تنسيق الفقرات والعناوين", time: "10 دقائق", type: "شرح", teacher: "الأستاذ علي حساني" },
        { name: "إنشاء ومعالجة النماذج Forms", time: "25 دقيقة", type: "تطبيق عملي", teacher: "الأستاذ علي حساني" },
        { name: "بناء وتنسيق الجداول Tables", time: "20 دقيقة", type: "شرح", teacher: "الأستاذ علي حساني" },
        { name: "كيفية تنسيق الفقرات والعناوين", time: "10 دقائق", type: "شرح", teacher: "الأستاذ علي حساني" },
        { name: "إنشاء ومعالجة النماذج Forms", time: "25 دقيقة", type: "تطبيق عملي", teacher: "الأستاذ علي حساني" },
        { name: "بناء وتنسيق الجداول Tables", time: "20 دقيقة", type: "شرح", teacher: "الأستاذ علي حساني" },
      ],
      url: "https://yourserver.com/lesson1.mp4",
      homework : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae dignissimos rem accusantium. Minus quod aut nulla officiis fugiat hic excepturi consequuntur, veniam veritatis exercitationem!" 
    }
  };

const course = CoursesLessons[id];

const initialProgress = {};
course.lessons.forEach((_, index) => {
  initialProgress[index] = 2;
});
const [progresses, setProgresses] = useState(initialProgress);

return (
  <section className="course-content">
    <div className="abstruct-design">
      <CoursesHeroSection
        image={course.image}
        title={course.title}
        description={course.description}
        buttonText="ارسل رسالة الان"
        buttonLink="https://wa.me/905399127498"
        subtext="نحن جاهزون لنتواصل معك دائماً"
        imageClass="cards-images"
      />
    </div>

    <div className="timeline-container flex">
      <div className="cards-column container flex">
        <div className="rightCol flex">
          <div className="timeline right-timeline"></div>
          {course.lessons.map((lesson, index) => (
            <div
              className={`video-card flex ${activeCard === index ? "open" : ""}`}
              key={index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
            
              {/* <div className="card-marker">
              {activeCard === index ? <FaAngleDown className="icon-down"/> : <FaAngleUp className="icon-down"/>}
              </div> */}

              <div className="video-informations flex">
                <div className="text flex">
                  <div className="videoNumber">
                    <p>{index + 1} -</p>
                  </div>
                  <div className="card-img"></div>
                  <div className="card-text">
                    <h3>{lesson.name}</h3>
                    <p>{lesson.time} - {lesson.type}</p>
                    <span>{lesson.teacher}</span>
                  </div>
                </div>

                <div className="progress-container flex">
                  <div className="compelted flex">
                  <div className="video-timeline">
                    <div
                      className="video-timeline-progress"
                      style={{ width: `${progresses[index]}%` }}
                    ></div>
                  </div>
                  <span className="card-progress">{progresses[index]}%</span>
                </div>

                <div className="card-marker flex">
                  {activeCard === index ? <FaAngleDown className="icon-down"/> : <FaAngleUp className="icon-down"/>}
                </div>
                </div>

              </div>

              {activeCard === index && (
                <>
                  <div className={`video-container ${activeCard === index ? "open" : ""}`}>
                    <video
                      controls
                      src={course.url}
                      onTimeUpdate={(e) => {
                        const current = e.target.currentTime;
                        const duration = e.target.duration;
                        if (duration > 0) {
                          const percent = (current / duration) * 100;
                          setProgresses((prev) => ({
                            ...prev,
                            [index]: percent
                          }));
                        }
                      }}
                    ></video>
                  </div>

                  <div className="homework-container">
                    <h3 className="homework-title flex">
                      <FaPlus />
                      واجب منزلي
                    </h3>
                    <p className="homework-explanation">{course.homework}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <TeamBanner
    text="تم تطوير هذه الصفحة من قبل الطالبتان لجين وشيماء"
    TeamClass="Container-team-son"
    />
  </section>
);
}