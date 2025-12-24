import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function BlogCard({ img, title, text }) {
    return (
  
    <div className="container-Halil-BlogCard">
   <div className="Halil-BlogCard">
                <img src={img} alt="" className="imgCard" />
                <p className="BlogCard-p2">{title}</p>
                <p className="BlogCard-p3">{text}</p>
                <div className="BlogDiv2">
                    <div className="BlogDiv2-div-1">
                        <p className="BlogCard-p4">اقرأ المزيد</p>
                        <FaArrowLeft className="ArrowIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard