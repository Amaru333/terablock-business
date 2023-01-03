import React, { useState , useEffect} from "react";
import axios from "axios";
import HorizontalCards from "../../common/Cards/HorizontalCards/HorizontalCards";
import LearnHeroComponent from "./Components/LearnHeroComponent";
import PostsSection from "./Components/PostsSection";
import StartJourneyCard from "./Components/StartJourneyCard";
import TutorialCards from "./Components/TutorialCards";

function LearnLayout() {
  const [cryptoBasis, setCryptoBasis] = useState([])
  const [cryptotips, setCryptotips] = useState([])
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&limit=5&&filter=tag:cryptobasics&include=tags").then((res) => {
      setCryptoBasis(res.data.posts);
      console.log(res,'cryptoBasis from api....')
    });
  }, []);
  useEffect(() => {
    axios.get("https://blogv2.terablock.com/ghost/api/content/posts?key=0489294cc94510ae9335da2c7f&limit=5&&filter=tag:tips&include=tags").then((res) => {
      setCryptotips(res.data.posts);
      console.log(res,'cryptoBasis from api....')
    });
  }, []);
  const crypto = [
    {
      image: cryptoBasis[0]?.feature_image,
      title: cryptoBasis[0]?.title,
      description: cryptoBasis[0]?.excerpt,
      difficulty: cryptoBasis[0]?.tags[1].name,
      time: 18,
    },
    {
      image: cryptoBasis[1]?.feature_image,
      title: cryptoBasis[1]?.title,
      description: cryptoBasis[1]?.excerpt,
      difficulty: cryptoBasis[1]?.tags[1]?.name,
      time: 18,
    },
    {
      image: cryptoBasis[2]?.feature_image,
      title: cryptoBasis[2]?.title,
      description: cryptoBasis[2]?.excerpt,
      difficulty: cryptoBasis[2]?.tags[0].name,
      time: 18,
    },
    {
      image: cryptoBasis[3]?.feature_image,
      title: cryptoBasis[3]?.title,
      description: cryptoBasis[3]?.excerpt,
      difficulty: cryptoBasis[3]?.tags[0].name,
      time: 18,
    },
    {
      image: cryptoBasis[4]?.feature_image,
      title: cryptoBasis[4]?.title,
      description: cryptoBasis[4]?.excerpt,
      difficulty: cryptoBasis[4]?.tags[0].name,
      time: 18,
    },
  ];
  const tips= [
    {
      image: cryptotips[0]?.feature_image,
      title: cryptotips[0]?.title,
      description: cryptotips[0]?.excerpt,
      difficulty: cryptotips[0]?.tags[1].name,
      time: 18,
    },
    {
      image: cryptotips[1]?.feature_image,
      title: cryptotips[1]?.title,
      description: cryptotips[1]?.excerpt,
      difficulty: cryptotips[1]?.tags[1]?.name,
      time: 18,
    },
    {
      image: cryptotips[2]?.feature_image,
      title: cryptotips[2]?.title,
      description: cryptotips[2]?.excerpt,
      difficulty: cryptotips[2]?.tags[0].name,
      time: 18,
    },
    {
      image: cryptotips[3]?.feature_image,
      title: cryptotips[3]?.title,
      description: cryptotips[3]?.excerpt,
      difficulty: cryptotips[3]?.tags[0].name,
      time: 18,
    },
    {
      image: cryptotips[4]?.feature_image,
      title: cryptotips[4]?.title,
      description: cryptotips[4]?.excerpt,
      difficulty: cryptotips[4]?.tags[0].name,
      time: 18,
    },
  ];
  return (
    <div>
      <LearnHeroComponent />
      <PostsSection />
      <TutorialCards />
      {/* {cryptoBasis.map((title,index) => ( */}
      <HorizontalCards data={crypto} title="Crypto Basics" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " />
      {/* ))} */}
      <HorizontalCards data={tips} title="Tips & Tutorials" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " />
      {/* <HorizontalCards data={tips} title="Market Updates" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " /> */}
      <StartJourneyCard />
    </div>
  );
}

export default LearnLayout;
