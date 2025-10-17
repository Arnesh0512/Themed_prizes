import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PrizeGrid from "./components/PrizeGrid";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState("1st Place");

  const prizes = {
    "First Place Winner: Grand Prize ": [
      { img: "/first1.jpg", text: "Cash Prize: A significant cash reward for the champions. " },
      { img: "/first2.jpg", text: "Exclusive Swag: Premium Hackathon Merchandise Kit and exclusive IEEE GGSIPU goodies." },
      { img: "/first3.jpg", text: "Certificates of Excellence: Official certificates recognizing the team as the First Place Winners of LockedIn." },
    ],
    "Second Place Winner: Runner-Up ": [
      { img: "/second1.jpg", text: "Cash Prize: A substantial cash reward for your outstanding efforts. " },
      { img: "/second2.jpg", text: "Swag: Premium Hackathon Merchandise and exciting goodies." },
      { img: "/second3.jpg", text: "Certificates of Excellence: Official certificates recognizing the team as the Second Place Winners of LockedIn." },
    ],
    "Third Place Winner: Second Runner-Up ": [
      { img: "/third1.jpg", text: "Cash Prize: A commendable cash prize to celebrate your success. " },
      { img: "/third2.jpg", text: "Swag: Exclusive Hackathon Goodies." },
      { img: "/third3.jpg", text: "Certificates of Excellence: Official certificates recognizing the team as the Third Place Winners of LockedIn." },
    ],
    Recognition_for_All_Participants: [
      { img: "/part1.jpg", text: "Certificate of Participation: All registered members of the teams that submit a working prototype in the final round will receive an Official Certificate of Participation from IEEE GGSIPU." },
      { img: "/part2.jpg", text: "Networking: An opportunity to connect with industry experts, mentors, and fellow tech enthusiasts." },
      { img: "/part3.jpg", text: "Motivational Booklet" },
    ],
  };

  return (
    <div className="main-box">
      <div className="app-container">
        <Sidebar selected={selected} setSelected={setSelected} />
        <PrizeGrid prizes={prizes[selected]} />
      </div>
    </div>
  );
}
