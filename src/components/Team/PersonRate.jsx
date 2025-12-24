import "../../pages/Team/Team.css";
import { FaStar } from "react-icons/fa";

function PersonRate({ img, text, title, name }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-info">
          <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
          </div>
          <p className="reviewer-name">{name}</p>
          <p className="review-text">{text}</p>
          <p className="reviewer-title">{title}</p>
        </div>
         <div className="reviewer-image">
          <img
            src={img} alt="" width={"70px"} style={{ borderRadius: "50%", userSelect: "none" }}
            className="profile-img"
          />
        </div>
      </div>
    </div>  
  );
}
export default PersonRate;