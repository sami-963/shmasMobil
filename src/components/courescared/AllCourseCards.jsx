import Card from "../../components/Card/card.jsx";
import "../../pages/courses/courses.css";
import "../Card/card.css"
import "../../styles/global.css";
import coursesImage3 from "../../../public/courses-image3.jpg"
import coursesImage4 from "../../../public/courses-image4.jpg"
import coursesImage5 from "../../../public/courses-image5.jpg"
import coursesImage6 from "../../../public/courses-image6.jpg"
import coursesImage1 from "../../../public/courses-image1.jpg"
import coursesImage2 from "../../../public/courses-image2.jpg"
function AllCourseCards() {
  const courses = [
    {
      imageSrc: coursesImage3,
      price: "$49",
      rating: 4,
      title: "HTML",
      description: "تعلم أساسيات بناء صفحات الويب باستخدام HTML من خلال خطوات عملية. تبدأ الدورة بشرح العناصر الدلالية وتنظيم هيكل الصفحة، ثم ستقوم ببناء صفحات كاملة مع النماذج والجداول والوسائط.",
      link: "/courses/html",
    },
    {
      imageSrc: coursesImage2,
      price: "$59",
      rating: 4,
      title: "CSS",
      description: "أضف الجمال والتنسيق إلى صفحاتك باستخدام CSS الحديثة بأسلوب عملي وممتع. تبدأ الدورة بأساسيات التنسيق والألوان، ثم تتقدم إلى تقنيات متقدمة مثل Flexbox وGrid وتصميم الصفحات المتجاوبة.",
      link: "/courses/css",
    },
    
    {
      imageSrc: coursesImage1,
      price: "69.00",
      rating: 4,
      title: "JavaScript",
      description: "حوّل صفحاتك من ساكنة إلى تفاعلية باستخدام JavaScript بطريقة عملية ومباشرة. تبدأ الدورة بالأساسيات مثل المتغيرات والدوال، ثم تتعلم التحكم في DOM والأحداث، والعمل مع البيانات عبر Fetch وPromises. ستطبق كل مفهوم في مشاريع صغيرة، لتتمكن بنهاية الدورة من بناء صفحات ديناميكية وتفاعلية بشكل كامل.",
      link: "/courses/javascript",
    },
    {
      imageSrc: coursesImage4,
      price: "79.00",
      rating: 4,
      title: "C#",
      description: "تعلم لغة C# لبناء تطبيقات قوية ومتعددة الاستخدامات عبر منهج عملي متدرج. تبدأ الدورة بأساسيات اللغة، ثم تنتقل إلى مفاهيم البرمجة الكائنية OOP وإدارة البيانات باستخدام LINQ. ستعمل على مشاريع تطبيقية تشمل أدوات Console وتطبيقات سطح المكتب، مع تعلم كيفية كتابة كود منظم وقابل للتوسع بطريقة احترافية.",
      link: "/courses/csharp",
    },
    {
      imageSrc: coursesImage5,
      price: "39.00",
      rating: 4,
      title: "Figma",
      description: "صمّم واجهات مستخدم احترافية خطوة بخطوة باستخدام Figma. نبدأ بتعلم الأدوات الأساسية ثم ننتقل إلى بناء مكونات وأطر عمل قابلة لإعادة الاستخدام.",
      link: "/courses/figma",
    },
    {
      imageSrc: coursesImage6,
      price: "69.00",
      rating: 4,
      title: "Mechanics",
      description: "افهم كيف تتحرك الأجسام وتتوازن القوى عبر الميكانيك الكلاسيكي بطريقة منهجية وعملية. تبدأ الدورة بالأساسيات مثل السكونيات، ثم تنتقل إلى الديناميكيات وقوانين الحركة والدوران. ",
      link: "/courses/mechanics",
    },
  ];

  return (
    <div className="cards">
      {courses.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.imageSrc}
            price={item.price}
            rating={item.rating}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
    </div>
  );
}

export default AllCourseCards;
