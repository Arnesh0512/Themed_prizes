import React, { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("First Place Winner");
  const [theme, setTheme] = useState("light");
  const [activeRound, setActiveRound] = useState(1);

  // --- Data for the page content ---
  const themeContent = {
  title: "Hackathon Theme: AI",
  description: (
    <>
      The <span className="highlight-text">LockedIn</span> hackathon challenges you to explore the limitless possibilities of Artificial Intelligence (AI). From building intelligent automation tools and enhancing decision-making systems to creating novel interactive experiences, your mission is to leverage cutting-edge AI technologies. This theme is your blank canvas to innovate in areas like Machine Learning, Deep Learning, and Generative AI. We're for projects that are not just technically sound, but also demonstrate impactful, creative, and responsible application of AI.
    </>
  )
};

  const roundsData = [
  {
    id: 1,
    title: "Round 1: Online Shortlisting",
    date: "October 24 – November 20",
    summary: "This initial phase is all about the idea and the plan.",
    sections: [
        {
            title: "What to Submit:",
            content: [
                "A clear definition of the problem you are solving.",
                "A description of your proposed AI solution and the specific technologies/models you plan to use.",
                "A rough system architecture or design flow.",
                "A brief timeline and task distribution for the 24-hour final round."
            ]
        },
        {
            title: "Evaluation:",
            content: "Submissions will be judged on innovation, feasibility, potential impact, and the clarity of the proposed AI approach."
        },
        {
            title: "Result:",
            content: "Only the top teams will be shortlisted and invited to participate in the physical 24-hour hackathon."
        }
    ]
  },
  {
    id: 2,
    title: "Round 2: The 24-Hour Final Hackathon",
    date: "November 25",
    summary: "The real challenge begins now! Shortlisted teams will gather for the ultimate coding marathon.",
    sections: [
        {
            title: "The Challenge:",
            content: "You will have 24 continuous hours to bring your Round 1 proposal to life. This means building a functional Minimum Viable Product (MVP) or a high-fidelity prototype."
        },
        {
            title: "Execution:",
            content: "Teams will code, collaborate, and refine their AI models in an intense, high-energy environment. Mentors will be available to guide your technical development."
        },
        {
            title: "The Showcase:",
            content: "The event culminates in a live presentation and demo of your working prototype to a panel of expert judges. Your presentation should clearly articulate your project's value and demonstrate its functionality."
        },
        {
            title: "Venue:",
            content: "Physical location (to be announced)."
        }
    ]
  }
  ];


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
          --dark-purple: #2F1273;
          --mid-purple: #4214AD;
          --light-purple-button: #E3D7FE;

          --bg-color: #EAE1FE;
          --card-bg-color: #FFFFFF;
          --primary-purple: #6124F0;
          --text-dark: #333;
          --text-light-grey: #666;
          --border-grey: #CCC;
          --dash-border: 2px dashed #D0A7F5;
          --divider-color: #e0e0e0;
          --shadow-color-light: rgba(97, 36, 240, 0.2);
          --shadow-color-dark: rgba(0, 0, 0, 0.15);
        }

        .hackathon-background[data-theme='dark'] {
          --bg-color: #100f1c;
          --card-bg-color: #1d1b31;
          --primary-purple: #8858F9;
          --text-dark: #f0f0f5;
          --text-light-grey: #a0a0b8;
          --border-grey: #4214AD;
          --dark-purple: #E3D7FE;
          --mid-purple: #AA87FD;
          --light-purple-button: #2F1273;
          --shadow-color-light: rgba(136, 88, 249, 0.2);
          --shadow-color-dark: rgba(0, 0, 0, 0.3);
          --dash-border: 2px dashed #4214AD;
          --divider-color: #2F1273;
        }

        body, html {
          margin: 0;
          padding: 0;
          font-family: var(--font-sans);
        }

        .hackathon-background, .hackathon-background body {
          background-color: var(--bg-color);
          min-height: 100vh;
          display: flex;


          flex-direction: column;


          align-items: center;
          padding: 40px 20px;
          gap: 40px;
          transition: background-color 0.3s ease;

          margin: 0;
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          justify-content: center;
          box-sizing: border-box;
          transition: background-color 0.3s ease;
          position: relative;
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

          transition: all 0.3s ease;
        }
        .theme-toggle:hover { 
          transform: translateY(-2px) scale(1.05);

          box-shadow: 0 6px 20px var(--shadow-color-dark);

          
        }

        .theme-toggle .icon {
            font-size: 1.2rem;
            transition: transform 0.4s ease;
        }
        

        .theme-toggle .light-icon { margin-right: 10px; }
        .theme-toggle .dark-icon { margin-left: 10px; }
        
        .toggle-ball {
          width: 24px;
          height: 24px;
          background: var(--primary-purple);
          border-radius: 50%;
          position: absolute;
          transition: transform 0.4s ease;

          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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
          box-shadow: 0 15px 40px var(--shadow-color-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          transition: all 0.3s ease;

          padding: 50px 30px;
          
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .main-card-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px var(--shadow-color-dark);
        }

        /* --- Decorative Dots at the Top --- */
        .decorative-dots {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 1;
        }

        .dot {
          width: 14px;
          height: 14px;
          background-color: var(--light-purple-button);
          border-radius: 50%;
          border: 2px solid var(--primary-purple);
        }


        /* --- Theme Section --- */
        .theme-section {
          position: relative;
          text-align: center;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }


        /* --- Section Divider --- */
        .section-divider {
            border: none;
            height: 2px;
            background-color: var(--divider-color);
            margin: 40px auto;
            width: 80%;
        }

        /* --- General Section Styles --- */
        .hackathon-section {
          padding: 20px 0;
          text-align: center;
        }


        .section-title-box {
          border: var(--dash-border);
          border-radius: 12px;
          padding: 15px 40px;
          display: inline-block;
          margin-bottom: 30px;
          position: relative;
          background-color: var(--card-bg-color);
          box-shadow: 0 4px 10px var(--shadow-color-light);
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .section-title-box h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--mid-purple);
          margin: 0;
        }

        .description-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-dark);
          max-width: 750px;
          margin: 0 auto 20px auto;
          font-weight: 600;
          text-align: left;
        }

        .highlight-text {
          color: var(--primary-purple);
          font-weight: 700;
        }

        /* --- Journey / Rounds Section --- */
        .journey-section {
          text-align: center;
          position: relative;
        }
        
        .journey-intro-text {
            font-size: 1.1rem;
            color: var(--text-light-grey);
            max-width: 600px;
            margin: -10px auto 30px auto;
        }

        .round-selector {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .round-btn {
          padding: 10px 30px;
          font-size: 1.1rem;
          font-weight: 700;
          border: 2px solid var(--border-grey);
          background-color: transparent;
          color: var(--text-dark);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px var(--shadow-color-light);
        }

        .round-btn:hover {
          border-color: var(--primary-purple);
          color: var(--primary-purple);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px var(--shadow-color-light);
        }

        .round-btn.active {
          background-color: var(--primary-purple);
          color: var(--card-bg-color);
          border-color: var(--primary-purple);
          box-shadow: 0 6px 15px var(--shadow-color-light);
        }

        .round-content-wrapper {
            text-align: left;
            padding: 20px;
            max-width: 700px;
            margin: 0 auto;
            border: 2px solid var(--border-grey);
            border-radius: 15px;
            box-shadow: 0 4px 15px var(--shadow-color-light);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .round-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 10px;
        }

        .round-title {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--dark-purple);
        }

        .round-date {
            background-color: #FFD700;
            color: #333;
            font-weight: 700;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
        }

        .round-summary {
            font-style: italic;
            color: var(--text-light-grey);
            margin-bottom: 20px;
        }

        .round-section h4 {
            font-size: 1.1rem;
            color: var(--mid-purple);
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        
        .round-section p, .round-section li {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-dark);
        }

        .round-section ul {
            list-style-type: '→ ';
            padding-left: 20px;
        }

        .round-section ul li {
            margin-bottom: 8px;
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

        


        /* --- Responsive --- */
        @media (max-width: 768px) {
          .main-card-wrapper { padding: 30px 20px; }
          .tab-button { padding: 8px 18px; font-size: 0.95rem; }
          .prize-card { max-width: 200px; }
          .section-title-box h1 { font-size: 1.8rem; }
          .description-text { font-size: 1rem; line-height: 1.6; }
          .round-title { font-size: 1.3rem; }
        }
        @media (max-width: 480px) {
          .tab-button { width: 100%; text-align: center; }
          .hackathon-background { padding: 20px 15px; }
          .main-card-wrapper { padding: 20px 15px; border-radius: 25px; }
          .section-title-box h1 { font-size: 1.5rem; }
          .round-selector { flex-direction: column; }
          .round-header { flex-direction: column; align-items: flex-start; }
          .theme-toggle { top: 10px; right: 10px; }
        }
      `}</style>


      <div className="hackathon-background" data-theme={theme}>
        {/* --- Theme Toggle --- */}
        <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          <div className="toggle-ball"></div>
          <span className="icon light-icon">☀️</span>
          <span className="icon dark-icon">🌙</span>
        </div>

        {/* Single Card Containing Both Sections */}
        <div className="main-card-wrapper">
          <div className="decorative-dots">
            {[...Array(15)].map((_, i) => <span key={i} className="dot"></span>)}
          </div>

          {/* Theme Section */}
          <section className="hackathon-section theme-section">
            <div className="section-title-box">
              <h1>{themeContent.title}</h1>
            </div>
            <p className="description-text">{themeContent.description}</p>
          </section>

          <hr className="section-divider" />

          {/* The Journey Section */}
          <section className="hackathon-section journey-section">
            <div className="section-title-box">
              <h1>The Journey</h1>
            </div>
            <p className="journey-intro-text">
                The hackathon will be conducted in two distinct rounds, designed to filter the most promising ideas and challenge the best teams to execute them.
            </p>
            <div className="round-selector">
              <button
                className={`round-btn ${activeRound === 1 ? 'active' : ''}`}
                onClick={() => setActiveRound(1)}
              >
                Round 1
              </button>
              <button
                className={`round-btn ${activeRound === 2 ? 'active' : ''}`}
                onClick={() => setActiveRound(2)}
              >
                Round 2
              </button>
            </div>
            <div className="round-content-wrapper">
                {roundsData.filter(r => r.id === activeRound).map(round => (
                    <div key={round.id}>
                        <div className="round-header">
                            <h3 className="round-title">{round.title}</h3>
                            <span className="round-date">{round.date}</span>
                        </div>
                        <p className="round-summary">{round.summary}</p>
                        {round.sections.map((section, index) => (
                            <div key={index} className="round-section">
                                <h4>{section.title}</h4>
                                {Array.isArray(section.content) ? (
                                    <ul>
                                        {section.content.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                ) : (
                                    <p>{section.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
          </section>



        </div>

        

        {/* --- Prizes Card --- */}
          {/* --- Heading & Description for Prizes --- */}
          <div className="main-card-wrapper">
            
            <div className="section-title-box">
              <h1>Prizes</h1>
            </div>
            <p className="description-text">
              The <span className="highlight-text">LockedIn</span> hackathon recognizes the ingenuity, dedication, and technical excellence displayed over the 24-hour sprint. Beyond the invaluable experience and portfolio additions, the top three teams will walk away with exciting prizes and lasting recognition.
            </p>
            <hr className="section-divider" />
          

        

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
