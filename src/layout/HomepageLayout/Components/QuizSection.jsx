import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UICard from "../../../widgets/UICard/UICard";

function QuizSection() {
  const width = useScreenSize().width;
  const QuizCard = ({ image, title }) => {
    return (
      <UICard>
        <div className="p-1">
          <div>
            <img src={image} className="bg-cardImageBg border border-cardImageBorder rounded" style={{ "--bs-border-opacity": 0.2, width: "58px", padding: "12px" }} />
          </div>
          <p className="mt-4" style={{ fontWeight: 600, fontSize: width > 768 ? "24px" : "16px" }}>
            {title}
          </p>
          <p className="mb-0 mt-3 text-primaryBlue fw-bold" style={{ fontSize: width > 768 ? "18px" : "14px" }}>
            Continue →
          </p>
        </div>
      </UICard>
    );
  };
  const quizCardData = [
    {
      image: "/assets/icons/student.svg",
      title: "I'm a student",
    },
    {
      image: "/assets/icons/worker.svg",
      title: "I'm working",
    },
    {
      image: "/assets/icons/search.svg",
      title: "I'm unemployed",
    },
    {
      image: "/assets/icons/umbrella.svg",
      title: "I'm retired",
    },
  ];
  return (
    <div className="mb-5 pb-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark fw-bold">
          <b>
            Want to know how you can make the most of crypto investments? Take our quiz<span className="text-primaryViolet">.</span>
          </b>
        </h3>
      </div>
      <div className="row mx-0 px-0 mx-md-5 px-md-5">
        {quizCardData.map((data, index) => (
          <div key={index} className="col-6 col-xl-3">
            <QuizCard title={data.title} image={data.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizSection;
