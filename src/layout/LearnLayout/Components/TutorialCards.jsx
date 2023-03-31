import axios from "axios";
import React, { useEffect } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import TutorialCardStyle from "../Styles/TutorialCards.module.css";
import Link from "next/link";

function TutorialCards() {
  const width = useScreenSize().width;
  const [crypto_basis, setCryptobasis] = React.useState([]);
  const [tips, setTips] = React.useState([]);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&limit=1&&filter=tag:cryptobasics").then((res) => {
      setCryptobasis(res.data.posts);
      console.log(crypto_basis, "api crypto.....");
    });
  }, []);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&limit=1&&filter=tag:tips").then((res) => {
      setTips(res.data.posts);
      console.log(tips, "tips from api....");
    });
  }, []);
  const data = [
    {
      title: "Crypto Basics",
      icon: "basics",
      link: "cryptobasics",
    },
    {
      title: "Tips & Tutorials",
      icon: "tips",
      link: "tips",
    },
    {
      title: "Market Updates",
      icon: "market",
      link: "market-updates",
    },
  ];
  const DataCard = ({ icon, title, desc, link }) => {
    return (
      <a href={"#" + link} style={{ textDecoration: "none" }}>
        <div className={TutorialCardStyle.data_card}>
          <div className={TutorialCardStyle.icon_container}>
            <img src={`/assets/icons/learn/${icon}.svg`} style={{ width: "28px" }} />
          </div>
          {/* {crypto_basis.map((post, i) => ( */}
          <div className="d-flex flex-column">
            <p className={TutorialCardStyle.title}>{title}</p>
            {/* <p className={TutorialCardStyle.desc}>{desc}</p> */}
            <p className={TutorialCardStyle.desc}>View more →</p>
          </div>
          {/* ))} */}
        </div>
      </a>
    );
  };
  return (
    <div className="py-5 px-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "100%" }}>
      <div className={TutorialCardStyle.container}>
        {data.map((individual, i) => (
          <div key={i} className={TutorialCardStyle.card_container}>
            <DataCard icon={individual.icon} title={individual.title} link={individual.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialCards;
