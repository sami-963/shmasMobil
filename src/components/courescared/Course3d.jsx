import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CourseCard({ title, description, imgSrc , link}) {
  return (
    <div className="box" >
      <div className="border_box">
        <img src={imgSrc} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <Link className="ReadMore" to={link}>
          اقرأ المزيد < FaArrowLeft className="FaArrow" />
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
