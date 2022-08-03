import React from "react";
import UICard from "../../../widgets/UICard/UICard";

function QuizSection() {
  const QuizCard = ({ image, title }) => {
    return (
      <UICard>
        <div>
          <img src={image} className="bg-cardImageBg border border-cardImageBorder p-2 rounded" style={{ "--bs-border-opacity": 0.2 }} />
        </div>
        <h5 className="mt-3">{title}</h5>
        <p className="mb-0 mt-3 text-primaryBlue fw-bold">Continue →</p>
      </UICard>
    );
  };
  const quizCardData = [
    {
      image: "./assets/icons/student.svg",
      title: "I'm a student",
    },
    {
      image: "./assets/icons/worker.svg",
      title: "I'm working",
    },
    {
      image: "./assets/icons/search.svg",
      title: "I'm unemployed",
    },
    {
      image: "./assets/icons/umbrella.svg",
      title: "I'm retired",
    },
  ];
  return (
    <div className="mb-5 pb-5">
      <div className="text-center mt-5 px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-primaryTextDark">
          <b>
            Want to know how you can make the most of crypto investments? Take our quiz<span className="text-primaryViolet">.</span>
          </b>
        </h3>
      </div>
      <div className="row mx-0 px-0 mx-md-5 px-md-5">
        {quizCardData.map((data) => (
          <div className="col-6 col-md-3">
            <QuizCard title={data.title} image={data.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizSection;
