import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState("First Place Winner");

  const prizes = {
    "First Place Winner": [
      { img: "/first1.jpg", text: "A significant cash reward for the champions." },
      { img: "/first2.jpg", text: "Exclusive Swag: Premium Hackathon Merchandise Kit and exclusive IEEE GGSIPU goodies." },
      { img: "/first3.jpg", text: "Certificates of Excellence for First Place Winners of LockedIn." },
    ],
    "Second Place Winner": [
      { img: "/second1.jpg", text: "A substantial cash reward for your outstanding efforts." },
      { img: "/second2.jpg", text: "Swag: Premium Hackathon Merchandise and exciting goodies." },
      { img: "/second3.jpg", text: "Certificates of Excellence for Second Place Winners of LockedIn." },
    ],
    "Third Place Winner": [
      { img: "/third1.jpg", text: "A commendable cash prize to celebrate your success." },
      { img: "/third2.jpg", text: "Swag: Exclusive Hackathon Goodies." },
      { img: "/third3.jpg", text: "Certificates of Excellence for Third Place Winners of LockedIn." },
    ],
    "All Other Participants": [
      { img: "/part1.jpg", text: "Certificate of Participation for teams submitting a working prototype in the final round." },
      { img: "/part2.jpg", text: "Networking opportunity to connect with industry experts, mentors, and fellow tech enthusiasts." },
    ],
  };

  const entries = Object.keys(prizes);

  // ---------------- PrizeCard Component ----------------
  const PrizeCard = ({ img, text }) => (
    <div className="prize-card">
      <img src={img} alt={text} className="prize-image" />
      <p className="prize-text">{text}</p>
    </div>
  );

  // ---------------- PrizeGrid Component ----------------
  const PrizeGrid = ({ prizes }) => (
    <div className="prize-grid">
      {prizes.map((prize, index) => (
        <PrizeCard key={index} img={prize.img} text={prize.text} />
      ))}
    </div>
  );

  // ---------------- Main App JSX ----------------
  return (
    <div className="hackathon-background">
      <div className="main-card-wrapper">
        {/* Buttons above the prize containers */}
        <div className="button-container">
          {entries.map((entry) => (
            <button
              key={entry}
              className={`tab-button ${selected === entry ? "active" : ""}`}
              onClick={() => setSelected(entry)}
            >
              {entry}
            </button>
          ))}
        </div>

        {/* Prize grid */}
        <PrizeGrid prizes={prizes[selected]} />
      </div>
    </div>
  );
}
