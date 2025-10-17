import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PrizeGrid from "./components/PrizeGrid";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState("1st Place");

  const prizes = {
    "1st Place": [
      { img: "/first1.jpg", text: "Gold Medal with Certificate" },
      { img: "/first2.jpg", text: "Trophy of Excellence" },
      { img: "/first3.jpg", text: "Cash Prize ₹5000" },
    ],
    "2nd Place": [
      { img: "/second1.jpg", text: "Silver Medal with Certificate" },
      { img: "/second2.jpg", text: "Runner-up Trophy" },
      { img: "/second3.jpg", text: "Cash Prize ₹3000" },
    ],
    "3rd Place": [
      { img: "/third1.jpg", text: "Bronze Medal with Certificate" },
      { img: "/third2.jpg", text: "Achievement Trophy" },
      { img: "/third3.jpg", text: "Cash Prize ₹1500" },
    ],
    Participation: [
      { img: "/part1.jpg", text: "Certificate of Participation" },
      { img: "/part2.jpg", text: "Goodies Bag" },
      { img: "/part3.jpg", text: "Motivational Booklet" },
    ],
  };

  return (
    <div className="app-container">
      <Sidebar selected={selected} setSelected={setSelected} />
      <PrizeGrid prizes={prizes[selected]} />
    </div>
  );
}
