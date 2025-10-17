import React from "react";

export default function PrizeCard({ img, text }) {
  return (
    <div className="prize-card">
      <img src={img} alt={text} className="prize-image" />
      <p className="prize-text">{text}</p>
    </div>
  );
}
