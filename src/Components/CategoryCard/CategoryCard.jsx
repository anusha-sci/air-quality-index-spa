import React from "react";
import "./CategoryCard.scss";

export default function CategoryCard({ category, range, text, color }) {
  return (
    <div className="card__container">
      <hr style={{ background: `${color}` }} />
      <h3 >{`${category.toUpperCase()}  ${range}`}</h3>
      <div className="img__description">
        <div className="img__container">
          <img src={`${category}.jpg`} alt="good" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
