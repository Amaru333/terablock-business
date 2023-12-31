import React, { useState, useEffect } from "react";
import axios from "axios";
import HorizontalCards from "../../common/Cards/HorizontalCards/HorizontalCards";
import LearnHeroComponent from "./Components/LearnHeroComponent";
import PostsSection from "./Components/PostsSection";
import StartJourneyCard from "./Components/StartJourneyCard";
import TutorialCards from "./Components/TutorialCards";

function LearnLayout() {
  const [cryptoBasis, setCryptoBasis] = useState([]);
  const [cryptotips, setCryptotips] = useState([]);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&&filter=tag:cryptobasics&include=tags").then((res) => {
      setCryptoBasis(res.data.posts);
      console.log(res, "cryptoBasis from api....");
    });
  }, []);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&&filter=tag:tips&include=tags").then((res) => {
      setCryptotips(res.data.posts);
      console.log(res, "cryptoBasis from api....");
    });
  }, []);
  return (
    <div>
      <LearnHeroComponent />
      <PostsSection />
      <TutorialCards />
      <HorizontalCards
        id="cryptobasics"
        data={cryptoBasis}
        title="Crypto Basics"
        description_1="Cryptography is something you're new to."
        description_2="Not for long; begin with these instructions and explanations. "
      />
      <HorizontalCards
        id="tips"
        data={cryptotips}
        title="Tips & Tutorials"
        description_1="Cryptography is something you're new to."
        description_2="Not for long; begin with these instructions and explanations. "
      />
      {/* <HorizontalCards data={cryptotips} title="Market Updates" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " /> */}
      <StartJourneyCard />
    </div>
  );
}

export default LearnLayout;
