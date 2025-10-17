import React from "react";
import PrizeCard from "./PrizeCard";

export default function PrizeGrid({ prizes }) {
  return (
    <div className="prize-grid">
      {prizes.map((prize, index) => (
        <PrizeCard key={index} img={prize.img} text={prize.text} />
      ))}
    </div>
  );
}
