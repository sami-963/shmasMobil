import GirlImg from "../../../../public/teamGirlProfile-removebg-preview.png";
import img from "../../../../public/handsome-guy.jpg";
import samiimg from "../../../../public/teamGirlProfile-removebg-preview.png"
import {
  FaRegEnvelope,
  FaMobileAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const GroubMb = [
  {
    id: 3,
    img: "../../../../public/samiimgs.jpeg",
    title: "سامي",
    text: "المشرف العام ومدير معهد شمس ",
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
    id: 1,
    img,
    title: "خليل",
    text: " تطوير الواجهة. تنظيم المحتوى.إدارة المشروع.المشروع قابل للتوسّع.يمكن إضافة دورات جديدة.يمكن دعم لغات متعددة.",
    gender: "male",
    icons: [
      { type: "instagram", url: "https://www.instagram.com/halilproskin" },
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=ismailhalil073@gmail.com",
      },
      { type: "whatsapp", url: "https://wa.me/905399879801" },
    ],
  },
  {
    id: 2,
    GirlImg,
    title: "أروى",
    text: "تشرف على تنظيم المحتوى وتنسيقه داخل المنصة، وتعمل على ضمان سهولة وصول الطلاب للمعلومة بطريقة واضحة ومباشرة.",
    gender: "female",
    icons: [
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=arwaar244@gmail.com",
      },
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
  },
  {
    id: 5,
    GirlImg,
    title: "شيماء",
    text: "مبرمِجة ويب تهتم بتطوير واجهات تفاعلية، كود منظّم، وتجربة مستخدم واضحة وعملية بتقنيات الويب الحديثة.",
    gender: "female",
    icons: [
      { type: "instagram", url: "https://www.instagram.com/seymaelali06" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/%C5%9Feyma-elali-876ba6334/?skipRedirect=true",
      },
      { type: "whatsapp", url: "https://wa.me/905363368731" },
    ],
  },
  {
    id: 6,
    GirlImg,
    title: "مها",
    text: "تساهم في إدارة المشروعات والتأكد من سير العمل بشكل منظم. تعمل على متابعة المهام وتنسيق التواصل بين أعضاء الفريق.",
    gender: "female",
    icons: [
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=mahaaburas65@gmail.com",
      },
    ],
  },
  {
    id: 7,
    img,
    title: "علي ",
    text: "مسؤول عن تطوير الميزات الخلفية للمنصّة وتحسين قواعد البيانات. يهتم بالأمان والأداء ليضمن تجربة ثابتة وسريعة.",
    gender: "male",
    icons: [
      {
        type: "email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=aboudsh267@gmail.com",
      },
      {
        type: "whatsapp",
        url: "https://wa.me/905362329475",
      },
    ],
  },
];

export const iconMap = {
  email: FaRegEnvelope,
  phone: FaMobileAlt,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};
