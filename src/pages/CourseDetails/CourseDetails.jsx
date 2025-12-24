import "./CourseDetails.css";
import { useParams } from "react-router-dom"
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import{FaClock} from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import courseImg from "../../../public/courseImg.png"
import TeamBanner from "../../components/team-banner/team-banner.jsx";

export default function CourseDetails() {
  const {id} = useParams();

  let courses = {
    html: {
      id: "html",
      title: "دورة HTML",
      description:"تعلم أساسيات بناء مواقع الويب من الصفر عبر HTML. ستتعرف على البنية الصحيحة للصفحات، العناصر الدلالية، وإدارة المحتوى بشكل منظم. خلال الدورة ستقوم ببناء صفحات كاملة خطوة بخطوة، مع تطبيقات عملية على النماذج والجداول والوسائط. بنهاية الدورة ستكون قادراً على إنشاء صفحات متوافقة مع محركات البحث وقابلة للتطوير ",
      image: courseImg,
      price: "$49.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "إتقان العناصر الدلالية وتنظيم هيكل الصفحة.",
        "التعامل مع النماذج وإضافة حقول الإدخال والتحقق الأساسي.",
        "إدراج الصور والفيديو والصوت بشكل متجاوب.",
        "أفضل الممارسات لكتابة كود نظيف ومتوافق مع محركات البحث."
      ],
      overview: {
        whatYouWillLearn: [
          "كيفية بناء صفحات ويب باستخدام عناصر HTML بشكل صحيح.",
          "تنظيم المحتوى وإضافة الروابط والجداول والنماذج.",
          "إدراج الوسائط المتعددة مثل الصور والفيديو والصوت.",
          "كتابة كود نظيف وقابل للتوسع ومتوافق مع محركات البحث."
        ],
        whoIsThisFor: [
          "المبتدئون الذين يرغبون في دخول عالم تطوير الويب.",
          "الطلاب الذين يحتاجون إلى أساس قوي قبل تعلم CSS وJavaScript.",
          "المصممون الذين يريدون فهم البنية الأساسية للصفحات.",
          "أي شخص يسعى لتأسيس قاعدة متينة في تطوير الويب."
        ]
      }
    },

    css: {
      id: "css",
      title: "دورة CSS",
      description:"أضف الجمال والاحترافية إلى صفحاتك عبر تعلم CSS بطرق بسيطة ومتدرجة. تبدأ الدورة بأساسيات التنسيق ثم تنتقل بك إلى تقنيات متقدمة مثل Flexbox وGrid. ستقوم ببناء صفحات متجاوبة تعمل على جميع الأجهزة مع تطبيقات عملية على الألوان، التأثيرات، والمسافات. كل درس مبني على الذي قبله لضمان فهم عميق وسهل للتصميم.",
      image: courseImg,
      price: "$59.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "تعلم أنظمة التخطيط الحديثة (Flexbox وGrid).",
        "إنشاء تصميمات متجاوبة تناسب جميع الأجهزة.",
        "تحسين النصوص والألوان والتأثيرات البصرية.",
        "ملفات موارد وقوالب جاهزة للاستخدام."
      ],
      overview: {
        whatYouWillLearn: [
          "كيفية استخدام CSS لتنسيق النصوص والألوان والمسافات.",
          "بناء تخطيطات متقدمة باستخدام Flexbox وGrid.",
          "تصميم صفحات متجاوبة تعمل على مختلف الأجهزة.",
          "إنشاء أنماط قابلة لإعادة الاستخدام وتحسين الأداء."
        ],
        whoIsThisFor: [
          "المبتدئون الذين أنهوا دورة HTML ويريدون تعلم التصميم.",
          "الطلاب الذين يسعون لبناء واجهات ويب جذابة.",
          "المصممون الذين يريدون تحسين مهاراتهم في CSS.",
          "أي شخص يرغب في تطوير صفحات ويب احترافية."
        ]
      }
    },

    javascript: {
      id: "javascript",
      title: "دورة JavaScript",
      description:"حوّل صفحاتك من ثابتة إلى تفاعلية عبر منهج عملي لتعلم JavaScript. نبدأ بالأساسيات مثل المتغيرات والدوال، ثم ننتقل تدريجياً للتعامل مع DOM وبناء وظائف حقيقية. ستقوم بإنشاء مشاريع صغيرة في كل مرحلة، مما يعزز الفهم ويجعلك تتعلم من خلال التجربة. الدورة تأخذك من مبتدئ إلى قادر على بناء صفحات ديناميكية بالكامل." ,
      image: courseImg,
      price: "$69.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "إتقان أساسيات اللغة مثل المتغيرات والدوال.",
        "التحكم في واجهة المستخدم عبر DOM والأحداث.",
        "التعامل مع البيانات باستخدام Fetch وPromises.",
        "مشاريع عملية صغيرة لتطبيق المفاهيم."
      ],
      overview: {
        whatYouWillLearn: [
          "أساسيات اللغة: المتغيرات، الدوال، الكائنات والمصفوفات.",
          "كيفية التحكم في عناصر الصفحة عبر DOM.",
          "التعامل مع الأحداث وإضافة وظائف تفاعلية.",
          "استخدام APIs لجلب البيانات من مصادر خارجية."
        ],
        whoIsThisFor: [
          "المبتدئون الذين أنهوا HTML وCSS.",
          "الطلاب الذين يريدون إضافة التفاعل لمواقعهم.",
          "المطورون الذين يسعون لفهم أساسيات JavaScript.",
          "أي شخص يرغب في بناء تطبيقات ويب ديناميكية."
        ]
      }
    },

    csharp: {
      id: "csharp",
      title: "دورة C#",
      description:"تعلم لغة C# بطريقة واضحة تعتمد على التطبيق العملي منذ اليوم الأول. تبدأ الدورة بالأساسيات وتنتقل بك تدريجياً إلى مبادئ البرمجة الكائنية (OOP) وبناء مشاريع حقيقية. ستعمل على مهام متنوعة تشمل التعامل مع البيانات، التحكم في التدفق، واستخدام LINQ. بنهاية الدورة ستكون قادرًا على إنشاء برامج قوية وتنظيم كودك بشكل احترافي.",
      image: courseImg,
      price: "$79.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "فهم البنية الأساسية للغة C#.",
        "إتقان مفاهيم البرمجة الكائنية (OOP).",
        "التعامل مع البيانات باستخدام LINQ.",
        "مشاريع عملية مثل أدوات Console وتطبيقات سطح المكتب."
      ],
      overview: {
        whatYouWillLearn: [
          "أساسيات اللغة: الأنواع، التحكم في التدفق، الدوال.",
          "مفاهيم البرمجة الكائنية مثل الوراثة والتعددية.",
          "التعامل مع المجموعات والاستعلامات باستخدام LINQ.",
          "إدارة الأخطاء وكتابة كود منظم وقابل للتوسع."
        ],
        whoIsThisFor: [
          "الطلاب الذين يرغبون في دخول عالم البرمجة.",
          "المطورون المبتدئون الذين يريدون تعلم لغة قوية.",
          "المهتمون بتطوير تطبيقات سطح المكتب أو الويب.",
          "أي شخص يسعى لتعلم لغة مستخدمة في بيئة مايكروسوفت."
        ]
      }
    },

    physics: {
      id: "physics",
      title: "دورة الفيزياء",
      description:"اكتشف عالم الفيزياء بطريقة سهلة ومنهجية تساعدك على فهم الحركة والقوى والطاقة. تعتمد الدورة على الشرح المبسط ثم التطبيق من خلال مسائل تدريبية ومشاريع قصيرة. نستخدم الرسوم البيانية والأمثلة الواقعية لتوضيح الأفكار المعقدة وتسهيل الاستيعاب. الهدف هو تحويل الفيزياء من مادة صعبة إلى علم ممتع وسهل الفهم.",
      image: courseImg,
      price: "$39.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "وصول كامل إلى جميع المحاضرات.",
        "واجبات ومسائل تدريبية مع حلول.",
        "مشاريع جماعية لتطبيق المفاهيم.",
        "ملخصات وقوائم معادلات للمراجعة."
      ],
      overview: {
        whatYouWillLearn: [
          "أساسيات الحركة والقوانين الفيزيائية.",
          "طرق حل المسائل خطوة بخطوة.",
          "استخدام الرسوم البيانية والمتجهات لتوضيح المفاهيم.",
          "أمثلة تطبيقية من الحياة اليومية والهندسة."
        ],
        whoIsThisFor: [
          "طلاب المدارس الذين يحتاجون إلى أساس قوي في الفيزياء.",
          "طلاب الجامعات في التخصصات العلمية والهندسية.",
          "الأشخاص المهتمون بفهم الظواهر الطبيعية.",
          "أي شخص يريد تحسين مهاراته في حل المسائل الفيزيائية."
        ]
      }
    },

  figma: {
  id: "figma",
  title: "دورة Figma",
  description: "صمّم واجهات مستخدم احترافية خطوة بخطوة باستخدام Figma. نبدأ بتعلم الأدوات الأساسية ثم ننتقل إلى بناء مكونات وأطر عمل قابلة لإعادة الاستخدام. ستعمل على مشاريع تصميم حقيقية تشمل تطبيقات كاملة وصفحات متعددة. الدورة تركّز على التفكير التصميمي وتنظيم العمل وإنشاء نماذج تفاعلية عالية الجودة.",
  image: courseImg,
  price: "$69.00",
  paymentType: "دفع لمرة واحدة",
  whatYouWillGet: [
    "واجبات عملية على تصميم واجهات.",
    "مشاريع جماعية لتصميم تطبيقات كاملة.","مكتبة موارد وقوالب جاهزة.",
    "وصول دائم إلى جميع الدروس."
  ],
  overview: {
    whatYouWillLearn: [
      "أساسيات تصميم واجهات المستخدم مثل الشبكات والألوان.",
      "إنشاء مكونات قابلة لإعادة الاستخدام.",
      "بناء أنظمة تصميم منظمة وقابلة للتوسع.",
      "إضافة التفاعلات والحركات للنماذج الأولية."
    ],
    whoIsThisFor: [
      "المصممون المبتدئون الذين يريدون تعلم أدوات حديثة.",
      "المطورون الذين يرغبون في فهم تصميم الواجهات.",
      "الطلاب المهتمون بتجربة تصميم التطبيقات.",
      "أي شخص يسعى لتطوير مهاراته في تصميم واجهات المستخدم."
    ]
  }
},
    mechanics: {
      id: "mechanics",
      title: "دورة الميكانيك",
      description:"تعلم أساسيات الميكانيك بشكل عملي يبدأ بالسكونيات ثم ينتقل إلى الديناميكيات. الدورة تقدم شروحات واضحة مدعومة بأمثلة هندسية واقعية، مع تطبيقات فورية لكل قانون تتعلمه. ستتدرّب على تحليل القوى، التوازن، الحركة، والدوران عبر مسائل عملية ومشاريع قصيرة. أسلوب الدورة يجعل المفاهيم المعقدة بسيطة ومباشرة.",
      image: courseImg,
      price: "$59.00",
      paymentType: "دفع لمرة واحدة",
      whatYouWillGet: [
        "واجبات عملية على مسائل السكونيات والديناميكيات.",
        "مشاريع جماعية لحل مشاكل هندسية.",
        "ملفات مرجعية ودراسات حالة.",
        "وصول مدى الحياة إلى محتوى الدورة."
      ],
      overview: {
        whatYouWillLearn: [
          "أساسيات السكونيات: المخططات والتوازن.",
          "الديناميكيات: قوانين الحركة والدوران.",
          "أساسيات المواد والإجهاد والانفعال.",
          "تطبيقات عملية تربط النظرية بالهندسة."
        ],
        whoIsThisFor: [
          "طلاب الهندسة الميكانيكية والمدنية.",
          "الطلاب الذين يدرسون العلوم التطبيقية.",
          "المهندسون المبتدئون الذين يحتاجون إلى أساس قوي.",
          "أي شخص مهتم بفهم الميكانيك بشكل عملي."
        ]
      }
    }

  };

let course = courses[id]
  if (!course){
    return <p></p>
}

  return (
    <>
      <div className="course-details container flex">
        <div className="right-col flex">
          <div className="left-side-header">
            <div className="courseDetails-title">
              <h1>{course.title}</h1>
            </div>

            <div className="courseDetails-description">
              <span className="course-description">
                {course.description}
              </span>
            </div>

            <div className="course-info-box">
              <div className="line-one">
                <div className="item">
                  <FaStar className="icon-star" />
                  <span>4.9</span>
                  <span className="Text-color">(المراجعات)</span>
                </div>

                <div className="item">
                  <AiOutlineUsergroupAdd className="icon" />
                  <span>10+</span>
                  <span className="Text-color">اعضاء</span>
                </div>
              </div>

              <div className="line-two">
                <div className="item">
                  <FaCheck className="icon" />
                  <span className="Text-color">
                    لا حاجة لخبرة سابقة
                  </span>
                </div>

                <div className="item">
                  <FaClock className="icon" />
                  <span className="Text-color">
                    4 أسابيع • بوتيرة ذاتية
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side-overview">
            <h2>نظرة عامة على الدورة</h2>

            <div className="overview-container flex">
              <div className="what-you-learn">
                <h3>ما سوف تتعلمه :</h3>
                <div className="listItems">
                  {course.overview.whatYouWillLearn.map((item, index) => (
                    <p key={index} className="flex">
                      <FaCheck className="icon" /> {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="who-this-course-for">
                <h3>لمن هذه الدورة؟</h3>
                <div className="listItems">
                  {course.overview.whoIsThisFor.map((item, index) => (
                    <p key={index} className="flex">
                      <AiOutlineUsergroupAdd className="icon" size={20} />{" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-col">
          <div className="course-img">
            <img src={courseImg} alt="course img" />
          </div>

          <div className="get-course">
            <div className="courseDetails-price flex">
              <p>{course.price}</p>
            </div>

            <span>الدفع لمرة واحدة</span>

            <a
              href="https://wa.me/905399127498"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-now flex"
            >
              <button>سجل الآن</button>
            </a>

            <div className="what-you-get">
              <h3>ما ستحصل عليه</h3>
              <div className="listItems flex">
                {course.whatYouWillGet.map((item, index) => (
                  <p key={index} className="flex">
                    <FaArrowLeft className="icon" size={15} /> {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="use-coupon flex">
              <h4>استخدم القسيمة</h4>
              <div className="coupon-input flex">
                <input
                  type="text"
                  className="write-coupon"
                  placeholder="أدخل القسيمة"
                />
                <button>استرداد</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="courseDetailsJoinUs">
       <JoinUs />
     </div>
     <TeamBanner
     text="تم تطوير هذه الصفحة من قبل الطالبتان شيماء ولجين"
     />
    </>
  );
}