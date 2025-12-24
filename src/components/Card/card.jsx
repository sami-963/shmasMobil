import React, { useState } from "react";
import "./card.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

 export default  function Card({ imageSrc, price, rating, title, description, link }) {
  const filledStars = "★".repeat(rating);
  const emptyStars = "★".repeat(5 - rating);

  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>

      <div className="startsAndPrice">
        <div className="price">
          <p>
            <strong>$</strong>
            {price}
          </p>
        </div>

        <div className="starts">
          <p>
            <span className="empty-stars">{emptyStars}</span>
            <span>{filledStars}</span>
          </p>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <p className="card-description">{description}</p>

        {/*  زر الحفظ + اقرأ المزيد */}
        <div className="readMoreRow">
        

          <Link to={link} className="readMoreLink-inner">
            <p>اقرأ المزيد</p>
            <FaArrowLeft />
          </Link>

            <button
            type="button"
            className={`save-btn-inline ${saved ? "active" : ""}`}
            onClick={() => setSaved(!saved)}
            aria-label="حفظ"
          >
            {saved ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
    </div>
  );
}
