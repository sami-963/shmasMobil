import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../dashbord/Dashbord.css";

function Stars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="star full" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }
  return <div className="stars-container">{stars}</div>;
}

export default Stars;
