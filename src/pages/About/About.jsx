import "./About.css";
import "../../styles/global.css";

/*import components */
import PartnerCompanies from "../../components/PartnerCompanies/PartnerCompanies"
import CoursesHeroSection from "../../components/coursesHeroSection/coursesHeroSection.jsx";
import MeethodsCries from "../../components/meethodeCreis/meethodecreis";
import JoinUs from "../../components/JoinUs/JoinUs";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Card from "../../components/Card/card.jsx";
import ShareOpinionCard from "../../components/shareOpinionCard/ShareOpinionCard.jsx"
import GroupMembers from "../../components/Team/GroupMemberCard.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";

/*import imgs*/
import aboutMainImg2 from "../../../public/aboutMainImg2.png"
import learnAndCreate from "../../../public/Copilot_20251211_204113.png";
import whatWedo1 from "../../../public/whatWedo1.png";
import whatWedo2 from "../../../public/whatWedo2.png";
import whatWedo3 from "../../../public/whatWedo3.png";
import GirlImg from "../../../public/teamGirlProfile-removebg-preview.png";
import img from "../../../public/handsome-guy.jpg";


/*import icons */
import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


// function PricingCard({ title, price, features }) {
//   // Split price and period for styling
//   const [amount, period] = price.split("/");

//   return (
//     <div className="pricingCard flex">
//       <h3 className="pricingtitle">{title}</h3>

//       <p className="pricingPrice">
//         <span className="priceAmount">{amount}</span>
//         <span className="pricePeriod">/{period}</span>
//       </p>

//       <hr />
//       <ul className="flex">
//         {features.map((item, index) => (
//           <li key={index} className="flex">
//             <FaAngleLeft className="angleIcon" />
//             {item}
//           </li>
//         ))}
//       </ul>

//       <Link to="/courses">
//         <button className="pricingBtn">اشتري الآن</button>
//       </Link>
//     </div>
//   );
// }

function About() {
  const whatWeDoCards = [
    {
      id: 1,
      img: whatWedo1,
      alt: "who are we card img",
      title: "من نحن",
      description: ["نحن فريق يسعى لتقديم تجربة تعليمية حديثة ومتنوعة، تجمع بين الإبداع والمعرفة العملية، وتمنح المتعلمين فرصة لتطوير مهاراتهم في أكثر من مجال. نؤمن أن التعليم هو أساس النمو الشخصي والمهني، لذلك نعمل على توفير بيئة واضحة وفعّالة تساعد على تحقيق التقدم بثقة."],
      link: ""
    },
    {
      id: 2,
      img: whatWedo2,
      alt: "our vision card img",
      title: "رؤيتنا",
      description: ["رؤيتنا هي بناء بيئة تعليمية مرنة وملهمة، تتيح للمتعلمين الوصول إلى المعرفة بسهولة وتدعم تطورهم المستمر. نطمح أن يكون التعليم وسيلة للتغيير الإيجابي، وأن يسهم في تعزيز الإبداع، توسيع الآفاق، وصناعة مستقبل أفضل للأفراد والمجتمعات."],
      link: ""
    },
    {
      id: 3,
      img: whatWedo3,
      alt: "our mission card img",
      title: "مهمتنا",
      description: ["مهمتنا هي تمكين المتعلمين من اكتساب مهارات جديدة عبر محتوى واضح وفعّال يساعدهم على تحقيق أهدافهم بثقة. ونؤمن بأن التعليم حق للجميع، لذا نتيح الفرصة لدعم الآخرين من خلال إهداء الدورات أو توفيرها للطلاب المحتاجين، ليصبح التعلم وسيلة للتطور الفردي والمجتمعي."],
      link: ""
    }
  ];

  const GroubMb = [
   
      
    {
    id: 5,
    GirlImg,
    title: "شيماء",
    text: "مبرمِجة تهتم بتطوير حلول رقمية واضحة وعملية، تركّز على كتابة كود منظّم وتجربة مستخدم متوازنة. لديها اهتمام بصناعة ومشاركة محتوى تقني يبسّط الأفكار البرمجية ويجعلها أقرب للتطبيق.",
    gender: "female",
    icons: [
      { type: "instagram", url: "https://www.instagram.com/seymaelali06" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/seyma-elali-876ba6334",
      },
      { type: "whatsapp", url: "https://wa.me/905363368731" },
    ],
  },
   {
    id: 3,
    img,
    title: "سامي",
    text: "مهتم بتجربة المستخدم واختبار المميزات الجديدة قبل نشرها. يساهم في تحسين الأداء وتقديم اقتراحات تطويرية مستمرة.",
    gender: "male",
    icons: [
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=simesimsami@gmail.com",
      },
      { type: "phone", url: "tel:+4915210379018" },
    ],
  },
  {
    id: 4,
    GirlImg,
    title: "لجين",
    text: "تعمل على تصميم العناصر البصرية للمنصّة وتطوير الهوية البصرية. تهتم بجعل الواجهات بسيطة وسهلة للمستخدم.",
    gender: "female",
    icons: [
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=lujainmamoun47@gmail.com",
      },
    ],
  }
  ];


  return (
    <div className="aboutPage">
      <CoursesHeroSection
        // containerClass="about-image-content flex"
        image={aboutMainImg2}
        title="معلومات عنا"
        description="نقدّم منصة تعليمية تهدف إلى توفير محتوى موثوق ومبسّط يساعد الطلاب والمتعلمين على اكتساب المهارات والمعرفة بسهولة."
        buttonText="تعرّف علينا أكثر"
        subtext="رحلتك التعليمية تبدأ من هنا، ومعنا تصبح أوضح وأسهل"
        imageClass="about-image-style"
      />

      <section className="container learnAndCreateSection flex">
        <div className="learnAndCreateSectionImg flex">
          <img src={learnAndCreate} alt="about Madesign img" />
        </div>
        <div className="sectionContent">
          <div className="smallTitle">
            <span>تعلم وابتكر</span>
          </div>
          <div className="sectionMainTitle">
            <h2>تعليم عصري يفتح لك أبواب المعرفة في مجالات مختلفة</h2>
          </div>
          <div className="sectionDescription">
            <p>نوفر تجربة تعليمية حديثة تجمع بين عدة مجالات، لنساعد المتعلمين على تطوير مهاراتهم واكتساب المعرفة بطريقة واضحة وفعّالة.</p>
          </div>
          <div className="progressItem">
            <div className="label">
              <span>تعلّم عن بُعد</span>
              <span>80%</span>
            </div>
            <div className="progressBar">
              <div className="progress progress1"></div>
            </div>
          </div>

          <div className="progressItem">
            <div className="label">
              <span>مهارات إبداعية</span>
              <span>92%</span>
            </div>
            <div className="progressBar">
              <div className="progress progress2"></div>
            </div>
          </div>

          <div className="progressItem">
            <div className="label">
              <span>رحلة ناجحة</span>
              <span>74%</span>
            </div>
            <div className="progressBar">
              <div className="progress progress3"></div>
            </div>
          </div>

          <Link to="/courses" className="readMore">اقرأ المزيد</Link>
        </div>
      </section>

      <section className="container whyChooseUs flex">
        <div className="smallTitle">
          <span>ماذا نفعل</span>
        </div>
        <div className="sectionMainTitle">
          <h2>نساعدك على التعلم وتطوير مهاراتك في أكثر من </h2>
        </div>
        <div className="sectionDescription">
          <p>نوفّر محتوى تعليمي متنوع يجمع بين الإبداع والمعرفة العملية، لنمنح المتعلمين فرصة لاكتساب مهارات جديدة، تعزيز خبراتهم، والانطلاق نحو مستقبل أفضل.</p>
        </div>

        <div className="sectionCards flex container">
          {whatWeDoCards.map((card) => (
            <div className="cardContainer flex">
              <div className="cardImg">
                <img src={card.img} alt={card.alt} />
              </div>

              <div className="cardFeatureName">
                <h2>{card.title}</h2>
              </div>

              <div className="cardSub">
                {card.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* <div className="readMoreLink flex">
                <Link to={card.link} className="flex">
                  <p>اقرأ المزيد</p>
                  <FaArrowLeft />
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <PartnerCompanies />
      <MeethodsCries />

      <div className="coursesSectionTitle">
        <SectionTitle
          subTitle="ميزات الدورات"
          mainTitle="أفضل الدورات المتاحة لك"
          description="نوفر لك دورات تعليمية شاملة تساعدك على تطوير مهاراتك بوضوح وسهولة. جميع الدروس مصممة لتناسب مختلف المستويات مع شرح مبسّط وتمارين تطبيقية."
        />
      </div>
      <div className="cards flex container">
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

      <div className="aboutShareOpinoin">
        <ShareOpinionCard />
      </div>


      <div className="ourTeam">
        <div className="sectionHeader container flex">

          <div className="headerText flex">
            <div className="smallTitle"><span>فريقنا</span></div>
            <div className="sectionMainTitle">
              <h2>الالتقاء بفريق الخبراء</h2>
            </div>
          </div>

          <Link to="/Team" className="loadMoreBtn">
            <button>تحميل المزيد</button>
          </Link>
        </div>

        <div className="Members flex">
            {GroubMb.map((person) => (
                <GroupMembers
                    key={person.id}
                    img={person.gender === "male" ? person.img : person.GirlImg}
                    title={person.title}
                    id={person.id}
                    icons={person.icons}
                />
            ))}
        </div>
      </div>

      <div className="aboutJoinUs">
        <JoinUs />
      </div>
       <TeamBanner
             text= "تم تطوير هذه الصفحة من قبل الطالبة شيماء"
         />
    </div>
  );
}
export default About;
