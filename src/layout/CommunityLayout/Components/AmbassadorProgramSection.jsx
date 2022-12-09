import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIButton from "../../../widgets/UIButtons/UIButton";

function AmbassadorProgramSection() {
  const width = useScreenSize().width;
  const DescCard = ({ title, desc, img }) => {
    return (
      <div className="d-flex mb-4">
        <div>
          <img src={`/assets/icons/rewards/${img}.png`} style={{ width: "64px" }} />
        </div>
        <div className="ps-4" style={{ maxWidth: "400px", color: "#1b2b6b" }}>
          <p className="mb-1" style={{ fontSize: "16px", fontWeight: "600" }}>
            {title}
          </p>
          <p className="mb-0" style={{ fontSize: "13px" }}>
            {desc}
          </p>
        </div>
      </div>
    );
  };

  const desc_data = [
    {
      title: "Priority access to products",
      desc: "Assess and evalutate TeraBlock's products first-hand alongside the team.",
      img: "7",
    },
    {
      title: "Giveaways",
      desc: "Earn TBC tokens through exclusive airdrops and contests.",
      img: "8",
    },
    {
      title: "Result based bonuses",
      desc: "Meeting targets increases your earning potential being a TeraBlock Ambassador.",
      img: "9",
    },
    {
      title: "Networking opportunities",
      desc: "Meet and work alongside the TeraBlock team, partnets and industry-leading influencers.",
      img: "10",
    },
    {
      title: "Latest developments and updates",
      desc: "Be the first one to know about the latest company developments and updates.",
      img: "11",
    },
  ];
  return (
    <div className="bg-white px-0 px-md-2 px-xl-5 pb-3 pb-xl-5">
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "98%" }}>
        <div className="flex flex-column justify-content-center align-items-center pb-4">
          <h2 className="text-center pt-5 px-1 d-flex flex-column flex-md-row justify-content-center" style={{ color: "#1b2b6b" }}>
            <span>
              <b>Ambassador Program</b>
            </span>
          </h2>
          <p className="text-center" style={{ color: "#5a5b5b" }}>
            Ambassador Program plays an essential role in making DeFi accessible to the masses. It comes with several perks and benefits.
          </p>
        </div>
        <div className="row mx-2 justify-content-center">
          <div className="col-12 col-md-6 justify-content-center align-items-center d-flex">
            <img src="/assets/images/iphone-full.png" />
          </div>
          <div className="col-12 col-md-6 justify-content-center align-items-center d-flex">
            <div className="d-flex flex-column">
              {desc_data.map((data) => (
                <DescCard title={data.title} img={data.img} desc={data.desc} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="row mx-0 justify-content-center">
        {descriptionData.map((data, index) => (
          <div className="col-6 col-md-4 col-xl-3 px-3 px-md-5 pb-3 pb-md-5" key={index}>
            <DescriptionCard title={data.title} image={data.image} description={data.description} />
          </div>
        ))}
      </div> */}
        <div className="d-flex flex-row justify-content-center mb-5 mt-2">
          <UIButton type="primary">Apply Now</UIButton>
          <UIButton type="secondary">Learn More</UIButton>
        </div>
      </div>
    </div>
  );
}

export default AmbassadorProgramSection;

// function AmbassadorProgramSection() {
//   const width = useScreenSize().width;
//   const DataCard = ({ image, title, description }) => {
//     return (
//       <div className={`d-flex ${width > 768 && "w-75"}`}>
//         <div>
//           <img src={image} />
//         </div>
//         <div className="ms-4">
//           <h5 className="fw-bolder text-primaryTextDark">{title}</h5>
//           <p className="text-primaryTextGray">{description}</p>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="bg-white py-5">
//       <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}>
//         <div className="text-center mt-5 px-4 px-md-5">
//           <h3 className="text-primaryTextDark fw-bold">
//             <b>
//               Ambassador Program<span className="text-primaryViolet">.</span>
//             </b>
//           </h3>
//           <p className="text-primaryTextGray mb-0">
//             TeraBlock Ambassador Program comes with several perks and ways to get involved in the Community and contribute towards our goal of making DeFi easy for everyone! Our ambassadors would get priority access to our products, offerings, and giveaways, along with the opportunity to get deeply involved in our day-to-day operations.
//           </p>
//           <img src="/assets/icons/underline-gray.svg" width="90px" />
//         </div>
//         <div className="row mx-0 px-3 px-md-5 d-flex flex-column-reverse flex-md-row">
//           <div className="col-12 col-md-6 d-flex flex-column justify-content-around pt-0 pt-md-5 pb-0 pb-md-5">
//             <DataCard image="/assets/images/priority-access.png" title="Priority access to our products" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//             <DataCard image="/assets/images/giveaway.png" title="Take part in giveaways" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//             <DataCard image="/assets/images/operational.png" title="Work with operations team" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
//           </div>
//           <div className="col-12 col-md-6 d-flex justify-content-center">
//             <img src="/assets/images/ambassador-program.png" style={{ maxWidth: width > 768 ? "40vw" : "80vw", objectFit: "contain" }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AmbassadorProgramSection;
