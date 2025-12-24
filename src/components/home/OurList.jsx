import React from "react";

function OurList({ imgs, our_titel, our_p, classNamess }) {
  return (
    <div className="our_list">
      <ul>
        <li>
          <div className={`our_creis ${classNamess}`}>{imgs}</div>
          <div className="text_our">
            <h2> {our_titel} </h2>
            <p>{our_p}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OurList;
