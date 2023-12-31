import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";

import FeaturedInStyle from "../Styles/FeaturedIn.module.css";

function FeaturedInSection() {
  const width = useScreenSize().width;
  const router = useRouter();
  const ImageCard = ({ image }) => {
    return (
      <div className="mb-3 mb-md-3 mx-0 mx-md-0 d-flex justify-content-center align-items-center" style={{ height: "100px", zIndex: 1, border: "2px solid #f6f6f6" }}>
        <div style={{ cursor: "pointer" }} onClick={() => window.open(image.link, "_blank")}>
          <img src={image.src} style={{ width: "100%" }} />
        </div>
      </div>
    );
  };
  const images = [
    { src: "/assets/images/product/supporters/BFF.png", link: "https://blockchainff.com/" },
    { src: "/assets/images/product/supporters/Hacken.png", link: "https://hacken.io/wp-content/uploads/2022/04/TeraBlock_20042022_TBG_SCAudit_Report_2.pdf" },
    { src: "/assets/images/product/supporters/SPS.png", link: "https://cointelegraph.com/press-releases/terablock-and-splinterlands-collaborate-take-defi-gaming-to-new-heights" },
    {
      src: "/assets/images/product/supporters/Sheesha.png",
      link: "https://www.globenewswire.com/en/news-release/2021/04/19/2212604/0/en/Sheesha-Finance-Partners-with-TeraBlock-to-Bring-Machine-Learning-Driven-Trade-Automation-to-Cryptocurrency-Portfolios.html",
    },
    { src: "/assets/images/product/supporters/Shima.png", link: "https://www.shima.capital/" },
    { src: "/assets/images/product/supporters/MA.png", link: "https://marketacross.com/" },
    { src: "/assets/images/product/supporters/OR.png", link: "https://onramper.com/" },
    { src: "/assets/images/product/supporters/M.png", link: "https://myterablock.medium.com/terablock-and-moralis-join-hands-in-an-overarching-mission-to-accelerate-web3-adoption-eaf8bc679cd3" },
    { src: "/assets/images/product/supporters/FMFW.png", link: "https://myterablock.medium.com/listing-announcement-tbc-gets-listed-on-fmfw-io-37adc354c5da" },
    { src: "/assets/images/product/supporters/HBTC_.png", link: "https://twitter.com/MyTeraBlock/status/1485174833038376962" },
    { src: "/assets/images/product/supporters/LC.png", link: "https://www.lotuscapital.me/" },
    { src: "/assets/images/product/supporters/CT.png", link: "https://cointelegraph.com/press-releases/terablock-and-splinterlands-collaborate-take-defi-gaming-to-new-heights" },
    { src: "/assets/images/product/supporters/HBTC.png", link: "https://news.bitcoin.com/tag/terablock/" },
    { src: "/assets/images/product/supporters/OR-1.png", link: "" },
    { src: "/assets/images/product/supporters/HN.png", link: "https://hackernoon.com/" },
  ];
  const images2 = [
    { src: "/assets/images/product/supporters/YF.png", link: "https://finance.yahoo.com/news/ai-based-trade-automation-case-000000108.html" },
    { src: "/assets/images/product/supporters/DH.png", link: "https://dailyhodl.com/2021/05/24/terablock-raises-2-94-million-from-its-tbc-token-ido-on-bscpad/" },
    { src: "/assets/images/product/supporters/CC.png", link: "https://www.cryptocompare.com/coins/guides/terablock-is-gearing-up-for-it-s-ido-launch-on-bscpad/" },
    { src: "/assets/images/product/supporters/X21.png", link: "https://x21digital.com/" },
    { src: "/assets/images/product/supporters/PRC.png", link: "https://www.petrock.capital/" },
    { src: "/assets/images/product/supporters/MV.png", link: "https://master.ventures/" },
    { src: "/assets/images/product/supporters/BSV.png", link: "http://blocksync.com/" },
    { src: "/assets/images/product/supporters/BV.png", link: "https://www.brillianceventures.com/" },
    { src: "/assets/images/product/supporters/DC.png", link: "https://www.designated.capital/" },
    { src: "/assets/images/product/supporters/MC.png", link: "https://magnusdigitalassets.com/" },
    { src: "/assets/images/product/supporters/OP.png", link: "https://oropocket.com/" },
    { src: "/assets/images/product/supporters/MC-1.png", link: "https://manticore.vc/" },
    { src: "/assets/images/product/supporters/LC.png", link: "https://www.lotuscapital.me/" },
    { src: "/assets/images/product/supporters/AU21.png", link: "https://au21.capital/" },
    { src: "/assets/images/product/supporters/BTX.png", link: "https://www.btx.capital/" },
  ];

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    let init = 0;
    const timer = setInterval(() => {
      if (init == 0) {
        scroll(2000);
        init++;
      } else {
        scroll(-2000);
        init--;
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-5 position-relative px-0 px-md-2" style={{ backgroundColor: "#f5f6fa" }}>
      <div className="text-center px-4 px-md-5 mx-0 mx-md-5 pb-0 pb-sm-3 pb-md-4">
        <h2 className="text-primaryTextDark fw-bold" id="supporters">
          Supporters
        </h2>
        <p className="text-cardDescriptionColor mb-0">TeraBlock is supported by industry leading investors, partners, advisors and publications.</p>
      </div>
      <div ref={ref} className={["py-4", FeaturedInStyle.scroll].join(" ")} style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "95%" }}>
        <div style={{ display: "flex", width: "200%", overflow: "hidden" }}>
          <div className="row mx-0 mx-md-4" style={{ width: "100%", overflow: "hidden" }}>
            {images.map((image, index) => (
              <div className="col-6 col-sm-4 column20" key={index}>
                <div>
                  <ImageCard image={image} />
                </div>
              </div>
            ))}
          </div>
          <div className="row mx-0 mx-md-4" style={{ width: "100%", overflow: "hidden" }}>
            {images2.map((image, index) => (
              <div className="col-6 col-sm-4 column20" key={index}>
                <div>
                  <ImageCard image={image} />
                </div>
              </div>
            ))}
          </div>
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
