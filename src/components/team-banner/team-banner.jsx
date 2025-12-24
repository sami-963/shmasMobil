import React from "react"; 
import "./team-banner.css"; 
import { Link } from "react-router-dom";
  import { FaArrowLeft } from "react-icons/fa";
export default function TeamBanner({ text, TeamClass }) {
  return (
    <div className={`team-banner flex ${TeamClass || ""}`}>
      <div className="team-glass flex">
        <span className="team-dot"></span>

        <p className="flex">
          {text}
          <Link to="/Team" className="flex">
            تعرّف على الفريق
            <FaArrowLeft className="team-arrow" />
          </Link>
        </p>
      </div>
    </div>
  );
}
