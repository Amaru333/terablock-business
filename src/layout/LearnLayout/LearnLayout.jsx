import React from "react";
import HorizontalCards from "../../common/Cards/HorizontalCards/HorizontalCards";
import LearnHeroComponent from "./Components/LearnHeroComponent";
import PostsSection from "./Components/PostsSection";
import StartJourneyCard from "./Components/StartJourneyCard";
import TutorialCards from "./Components/TutorialCards";

function LearnLayout() {
  const tips = [
    {
      image: "/assets/images/learn/learn_1.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      difficulty: "Advanced",
      time: 18,
    },
    {
      image: "/assets/images/learn/learn_2.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      difficulty: "Beginner",
      time: 18,
    },
    {
      image: "/assets/images/learn/learn_3.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      difficulty: "Intermediate",
      time: 18,
    },
    {
      image: "/assets/images/learn/learn_4.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      difficulty: "Beginner",
      time: 18,
    },
    {
      image: "/assets/images/learn/learn_5.png",
      title: "What is Etherium?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      difficulty: "Intermediate",
      time: 18,
    },
  ];
  return (
    <div>
      <LearnHeroComponent />
      <PostsSection />
      <TutorialCards />
      <HorizontalCards data={tips} title="Crypto Basics" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " />
      <HorizontalCards data={tips} title="Tips & Tutorials" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " />
      <HorizontalCards data={tips} title="Market Updates" description_1="Cryptography is something you're new to." description_2="Not for long; begin with these instructions and explanations. " />
      <StartJourneyCard />
    </div>
  );
}

export default LearnLayout;
