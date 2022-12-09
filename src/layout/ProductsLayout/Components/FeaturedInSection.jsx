import React from "react";
import StartCryptoJourneyCard from "../../../common/Cards/StartCryptoJourneyCard/StartCryptoJourneyCard";
import { useScreenSize } from "../../../functions/useScreenSize";

function FeaturedInSection() {
  const width = useScreenSize().width;
  const ImageCard = ({ image }) => {
    return (
      <div className="p-3 mb-3 mb-md-3 mx-0 mx-md-0 d-flex justify-content-center align-items-center" style={{ height: "100px", zIndex: 1 }}>
        <div>
          <img src={image} style={{ width: "235px", height: "103px" }} />
        </div>
      </div>
    );
  };
  const images = [
    "/assets/images/product/supporters/BFF.png",
    "/assets/images/product/supporters/Hacken.png",
    "/assets/images/product/supporters/SPS.png",
    "/assets/images/product/supporters/Sheesha.png",
    "/assets/images/product/supporters/Shima.png",
    "/assets/images/product/supporters/MA.png",
    "/assets/images/product/supporters/OR.png",
    "/assets/images/product/supporters/M.png",
    "/assets/images/product/supporters/FMFW.png",
    "/assets/images/product/supporters/HBTC_.png",
    "/assets/images/product/supporters/LC.png",
    "/assets/images/product/supporters/CT.png",
    "/assets/images/product/supporters/HBTC.png",
    "/assets/images/product/supporters/OR-1.png",
    "/assets/images/product/supporters/HN.png",
  ];
  const images2 = [
    "/assets/images/product/supporters/YF.png",
    "/assets/images/product/supporters/DH.png",
    "/assets/images/product/supporters/CC.png",
    "/assets/images/product/supporters/X21.png",
    "/assets/images/product/supporters/PRC.png",
    "/assets/images/product/supporters/MV.png",
    "/assets/images/product/supporters/BSV.png",
    "/assets/images/product/supporters/BV.png",
    "/assets/images/product/supporters/DC.png",
    "/assets/images/product/supporters/MC.png",
    "/assets/images/product/supporters/OP.png",
    "/assets/images/product/supporters/MC-1.png",
    "/assets/images/product/supporters/LC.png",
    "/assets/images/product/supporters/AU21.png",
    "/assets/images/product/supporters/BTX.png",
  ];
  return (
    <div className="py-5 position-relative px-0 px-md-2 px-xl-5" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center px-4 px-md-5 mx-0 mx-md-5 pb-5">
        <h3 className="text-white fw-bold">Supporters</h3>
        <p className="text-white mb-0 mt-3">TeraBlock is supported by industry leading investors, partners, advisors and publications.</p>
      </div>
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : "83%" }}>
        <div className="row mx-3 mx-md-4">
          {images.map((image, index) => (
            <div className="col-6 col-sm-4 column20" key={index}>
              <div>
                <ImageCard image={image} />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row mx-3 mx-md-4">
          {images2.map((image, index) => (
            <div className="col-6 col-sm-4 column20" key={index}>
              <div>
                <ImageCard image={image} />
              </div>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="d-flex flex-row justify-content-center">
        <img src="/assets/icons/left-block-arrow.svg" />
        <img src="/assets/icons/right-block-arrow.svg" />
      </div> */}
      {/* <StartCryptoJourneyCard /> */}
    </div>
  );
}

export default FeaturedInSection;
