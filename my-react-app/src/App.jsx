import React, { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("First Place Winner");
  const [theme, setTheme] = useState("light");

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

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  const PrizeCard = ({ img, text }) => (
    <div className="prize-card">
      <img src={img} alt={text} className="prize-image" />
      <p className="prize-text">{text}</p>
    </div>
  );

  const PrizeGrid = ({ prizes }) => (
    <div className="prize-grid">
      {prizes.map((prize, index) => <PrizeCard key={index} img={prize.img} text={prize.text} />)}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

        :root {
          --font-sans: 'Nunito', sans-serif;
        }

        /* --- Light / Dark Theme Variables --- */
        .hackathon-background[data-theme='light'] {
          --bg-color: #EAE1FE;
          --card-bg-color: #FFFFFF;
          --primary-purple: #6124F0;
          --text-dark: #333;
          --text-light-grey: #666;
          --border-grey: #CCC;
          --shadow-color: rgba(97,36,240,0.2);
        }

        .hackathon-background[data-theme='dark'] {
          --bg-color: #100f1c;
          --card-bg-color: #1d1b31;
          --primary-purple: #8858F9;
          --text-dark: #f0f0f5;
          --text-light-grey: #a0a0b8;
          --border-grey: #4214AD;
          --shadow-color: rgba(136,88,249,0.2);
        }

        body, html {
          margin: 0;
          padding: 0;
          font-family: var(--font-sans);
        }

        .hackathon-background {
          background-color: var(--bg-color);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          gap: 40px;
          transition: background-color 0.3s ease;
        }

        /* --- Theme Toggle Button --- */
        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--card-bg-color);
          border: 1px solid var(--border-grey);
          border-radius: 30px;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 15px var(--shadow-color);
          z-index: 100;
        }
        .theme-toggle:hover { transform: translateY(-2px) scale(1.05); }
        .toggle-ball {
          width: 24px;
          height: 24px;
          background: var(--primary-purple);
          border-radius: 50%;
          position: absolute;
          transition: transform 0.4s ease;
        }
        .hackathon-background[data-theme='dark'] .toggle-ball {
          transform: translateX(34px);
        }

        /* --- Card Wrapper --- */
        .main-card-wrapper {
          background-color: var(--card-bg-color);
          border: 4px solid var(--primary-purple);
          border-radius: 30px;
          padding: 40px 30px;
          max-width: 950px;
          width: 100%;
          box-shadow: 0 15px 40px var(--shadow-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          transition: all 0.3s ease;
        }
        .main-card-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px var(--shadow-color);
        }

        /* --- Buttons --- */
        .button-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        .tab-button {
          padding: 10px 25px;
          font-size: 1rem;
          font-weight: 600;
          border: 2px solid var(--primary-purple);
          border-radius: 12px;
          background-color: transparent;
          color: var(--primary-purple);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px var(--shadow-color);
        }
        .tab-button:hover {
          background-color: var(--primary-purple);
          color: var(--card-bg-color);
          transform: translateY(-2px);
        }
        .tab-button.active {
          background-color: var(--primary-purple);
          color: var(--card-bg-color);
        }

        /* --- Prize Grid & Cards --- */
        .prize-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          width: 100%;
        }
        .prize-card {
          background-color: var(--card-bg-color);
          border: 2px solid var(--primary-purple);
          border-radius: 20px;
          padding: 15px;
          max-width: 250px;
          flex: 1 1 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 10px 20px var(--shadow-color);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prize-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px var(--shadow-color);
        }
        .prize-image {
          width: 100%;
          border-radius: 15px;
          object-fit: cover;
          margin-bottom: 10px;
        }
        .prize-text {
          text-align: center;
          font-size: 0.95rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        /* --- Prizes Heading & Description --- */
        .prizes-header-container {
	        background-color: var(--card-bg-color);
          border: 4px solid var(--primary-purple);
          border-radius: 30px;
          text-align: center;
          margin-bottom: 25px;
          padding: 20px 30px;
          border-radius: 30px;
          max-width: 950px;
          box-shadow: 0 15px 40px var(--shadow-color);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .prizes-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-purple);
          margin-bottom: 12px;
        }

        .prizes-description {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1.6;
        }

        .prizes-description .highlight-text {
          color: var(--primary-purple);
          font-weight: 700;
        }


        /* --- Responsive --- */
        @media (max-width: 768px) {
          .main-card-wrapper { padding: 30px 20px; }
          .tab-button { padding: 8px 18px; font-size: 0.95rem; }
          .prize-card { max-width: 200px; }
        }
        @media (max-width: 480px) {
          .tab-button { width: 100%; text-align: center; }
          .hackathon-background { padding: 20px 15px; }
        }
      `}</style>

      <div className="hackathon-background" data-theme={theme}>
        {/* --- Theme Toggle --- */}
        <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          <div className="toggle-ball"></div>
          <span>☀️</span>
          <span>🌙</span>
        </div>

        {/* --- Prizes Card --- */}
          {/* --- Heading & Description for Prizes --- */}
          <div className="prizes-header-container">
            <h1 className="prizes-title">Prizes</h1>
            <p className="prizes-description">
              The <span className="highlight-text">LockedIn</span> hackathon recognizes the ingenuity, dedication, and technical excellence displayed over the 24-hour sprint. Beyond the invaluable experience and portfolio additions, the top three teams will walk away with exciting prizes and lasting recognition.
            </p>
          </div>

        <div className="main-card-wrapper">

          {/* --- Buttons Above Prize Grid --- */}
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

          {/* --- Prize Grid --- */}
          <PrizeGrid prizes={prizes[selected]} />
        </div>

        {/* --- You can add other cards below (e.g., theme or journey) --- */}
      </div>
</>
  );
}
