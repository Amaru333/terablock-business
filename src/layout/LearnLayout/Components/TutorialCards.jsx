import React from "react";

import TutorialCardStyle from "../Styles/TutorialCards.module.css";

function TutorialCards() {
  const data = [
    {
      title: "Crypto Basics",
      icon: "basics",
    },
    {
      title: "Tips & Tutorials",
      icon: "tips",
    },
    {
      title: "Market Updates",
      icon: "market",
    },
  ];
  const DataCard = ({ icon, title }) => {
    return (
      <div className={TutorialCardStyle.data_card}>
        <div className={TutorialCardStyle.icon_container}>
          <img src={`/assets/icons/learn/${icon}.svg`} style={{ width: "28px" }} />
        </div>
        <div className="d-flex flex-column">
          <p className={TutorialCardStyle.title}>{title}</p>
          <p className={TutorialCardStyle.desc}>View more →</p>
        </div>
      </div>
    );
  };
  return (
    <div className="py-5 px-5" style={{ maxWidth: "1500px", margin: "auto" }}>
      <div className={TutorialCardStyle.container}>
        {data.map((individual, i) => (
          <div key={i} className={TutorialCardStyle.card_container}>
            <DataCard icon={individual.icon} title={individual.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialCards;
