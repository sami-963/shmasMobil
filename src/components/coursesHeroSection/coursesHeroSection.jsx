import React from "react";
import "./coursesHeroSection.css";

export default function CoursesHeroSection({
  containerClass,
  image,
  title,
  description,
  buttonText,
  buttonLink,
  subtext,
imageClass
}) {
  return (
    <div className="coursesHero">
      <div className={`courses-image-content ${containerClass || ""}`}>
        
        <div className="courses-hero-content flex">
          <h1 className="courses-hero-title">{title}</h1>
          <p className="courses-hero-description">{description}</p>

          {buttonText && (
            buttonLink ? (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="page-title-hero-btn"
              >
                {buttonText}
              </a>
            ) : (
              <button className= "page-title-hero-btn">
                {buttonText}
              </button>
            )
          )}

          <div className="courses-hero-line"></div>

          <p className="courses-hero-subtext">
            {subtext}
          </p>
        </div>

        <div className={`courses-hero-image flex ${imageClass|| ""}`}>
          <img src={image} alt="hero visual" />
        </div>

      </div>
    </div>
  );
}
