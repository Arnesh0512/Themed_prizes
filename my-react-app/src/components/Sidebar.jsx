import React from "react";

export default function Sidebar({ selected, setSelected }) {
  const entries = ["1st Place", "2nd Place", "3rd Place", "Participation"];

  return (
    <div className="sidebar">
      {entries.map((entry) => (
        <div
          key={entry}
          className={`sidebar-item ${selected === entry ? "active" : ""}`}
          onClick={() => setSelected(entry)}
        >
          {entry}
        </div>
      ))}
    </div>
  );
}
