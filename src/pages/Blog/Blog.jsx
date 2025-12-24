import "./Blog.css"
import BlogCard from "../../components/Blogs/BlogCard"
import img1 from "../../../public/BlogImg1.jpg";
import img2 from "../../../public/BlogImg2.jpg";
import img3 from "../../../public/BlogImg3.jpg"
import img4 from "../../../public/BlogImg4.jpg"
import img5 from "../../../public/BlogImg5.jpg"
import img6 from "../../../public/BlogImg6.jpg"
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";

import { Link } from "react-router-dom"
const BlogsCard = [
    { id: 1, img: img1, title: " كيف تبدأ رحلتك في البرمجة من الصفر ", text: "دليل عملي للطلاب المبتدئين لاختيار أول لغة برمجة وبناء أول مشروع" },
    { id: 2, img: img2, title: " مهارات ستحتاجها قبل الدخول لسوق العمل ", text: " أهم المهارات التقنية التي ترفع فرص التوظيف للطلاب والخريجين" },
    { id: 3, img: img3, title: " تنجح في تخصص الهندسة من السنة الأولى ", text: "نصائح دراسية وأدوات عملية تساعدك على التفوق في الهندسة " },
    { id: 4, img: img4, title: " بناء ملف أعمال قوي في التصميم ", text: "خطوات عملية لبناء الملف الشخصي يجذب الشركات والعملاء" },
    { id: 5, img: img5, title: " الدراسة والعمل الحر في نفس الوقت ", text: "كيف تجمع بين الدراسة الجامعية والعمل عبر الإنترنت دون ضغط " },
    { id: 6, img: img6, title: " كيف تختار تخصصك الجامعي بثقة", text: " دليل لاتخاذ قرار التخصص بناء على ميولك وسوق العمل " },
]

function Blog() {
    return (
        <div className="cnt container">
            <div className="up-part">
                <p className="up-part-p1">مدوّنتنا</p>
                <p className="up-part-p2">آخر المقالات والأخبار</p>
                <p className="up-part-p3">نقدّم لك مجموعة من المقالات والأفكار التي نسلّط فيها الضوء على أحدث مشاريعنا، تجارب عملائنا، وأهم المعلومات في مجالات التصميم، التكنولوجيا، ريادة الأعمال، وغيرها. تصفّح آخر التحديثات وتعرّف على المزيد.</p>
            </div>
            <div className="down-card flex">
                {BlogsCard.map((card) =>
                    <Link to={`/Blog/BlogCard/${card.id}`}>
                        <BlogCard key={card.id} img={card.img} title={card.title} text={card.text} icon={card.icon} />
                    </Link>
                )}
            </div>
            <div className="blogJoinUs">
                <JoinUs />
            </div>
         

         <TeamBanner
             text= "تم تطوير هذه الصفحة من قبل الطالب خليل"
         />

        </div>
    );
}
export default Blog