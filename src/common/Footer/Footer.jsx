import React from "react";
import { getScreenSize } from "../../functions/getScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

import Script from "next/script";

import FooterStyle from "./Footer.module.css";
import LanguageSelector from "../Inputs/LanguageSelector/LanguageSelector";

function Footer() {
  const sitemap_data = [
    {
      title: "TBC Token",
      pages: [
        {
          name: "Stake TBC",
        },
        {
          name: "Buy TBC on PancakeSwap",
        },
        {
          name: "Buy TBC on HitBTC",
        },
        {
          name: "Buy TBC on FMFW.io",
        },
        {
          name: "TBC on BSC",
        },
        {
          name: "TBC on Etherscan",
        },
        {
          name: "TBC on CoinMarketCap",
        },
        {
          name: "TBC on CoinGecko",
        },
        {
          name: "Tokenomics",
        },
        {
          name: "Utility",
        },
      ],
    },
    {
      title: "Company",
      pages: [
        {
          name: "About",
        },
        {
          name: "Careers",
        },
        {
          name: "Resources",
        },
        {
          name: "Press",
        },
        {
          name: "Security",
        },
        {
          name: "Token Listing",
        },
        {
          name: "Partners & Investors",
        },
        {
          name: "Legacy & Privacy",
        },
      ],
    },
    {
      title: "Products",
      pages: [
        {
          name: "Get Started",
        },
        {
          name: "Buy",
        },
        {
          name: "Coins List",
        },
        {
          name: "Earn",
        },
        {
          name: "Convert",
        },
        {
          name: "Bridge",
        },
        {
          name: "Rewards Program",
        },
        {
          name: "Referral Program",
        },
        {
          name: "Ambassador Program",
        },
      ],
    },
    {
      title: "Support",
      pages: [
        {
          name: "Help Center",
        },
        {
          name: "Contacts",
        },
        {
          name: "Bug Bounty",
        },
        {
          name: "Status",
        },
      ],
    },
    {
      title: "Learn",
      pages: [
        {
          name: "Blog",
        },
        {
          name: "Browse Cryptocurrencies",
        },
        {
          name: "Crypto Basics",
        },
        {
          name: "How to set up a web3 wallet?",
        },
        {
          name: "How to buy crypto?",
        },
        {
          name: "What is Bitcoin & Ethereum?",
        },
        {
          name: "What is DeFi?",
        },
        {
          name: "What is Blockchain?",
        },
        {
          name: "What is staking?",
        },
      ],
    },
  ];
  const width = getScreenSize().width;

  const Newsletter = () => {
    return (
      <div className="text-center text-md-start">
        <img src="./assets/icons/logo-white.svg" />
        <p className="h4 my-3">Newsletter</p>
        <p className="fw-lighter">Signup to get the latest market news, company updates, new product releases and more.</p>
        <input type="text" placeholder="Email Address" className="w-75 px-3 py-1 rounded border-white mb-3" />
        {width > 768 && (
          <div className="d-flex justify-content-center justify-content-md-start">
            <UIButton type="secondary">Sign Up</UIButton>
          </div>
        )}
      </div>
    );
  };
  const Sitemap = ({ data }) => {
    return (
      <div>
        <p className="h4 mb-3">{data.title}</p>
        {data.pages.map((page) => (
          <p className="mb-0 fw-light my-2">{page.name}</p>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-footerBg">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>

      <div className="px-4 px-md-5 py-5 text-white">
        <div className="row mx-0">
          <div className="col-12 col-md-3">
            <Newsletter />
          </div>
          {sitemap_data.map((data) => (
            <div className="col-6 col-md pt-5 pt-md-0">
              <Sitemap data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-flex justify-content-center">
          <div className={FooterStyle.horizontal_line}></div>
        </div>
        <div className="d-flex justify-content-between px-5 pt-0 pb-5 pt-md-4">
          <div>
            <img src="./assets/icons/twitter-ico-filled.svg" />
            &nbsp;&nbsp;
            <img src="./assets/icons/linkedin-ico-filled.svg" />
            &nbsp;&nbsp;
            <img src="./assets/icons/mail-ico-filled.svg" />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 px-md-5 text-white text-center text-md-start pt-5 pt-md-0">
        <p className="fw-lighter mb-0 pb-3 col-12 col-md-4 px-4">
          This website is operated and maintained by TeraBlock Technologies Limited, Terms & Legal Privacy Policy. Unless otherwise specified, all return figures shown above are for illustrative purposes only, and are not actual customer or model returns. Actual returns will vary greatly and depend on personal and market circumstances.
        </p>
        <p className="fw-lighter mb-0 pb-3 col-12 col-md-4 px-4">
          Investments: Not FDIC Insured • No Bank Guarantee • May Lose Value. Investing in Digital Currencies involves risks, and there is always the potential of losing money when you invest in Digital Currencies. Before investing, consider your investment objectives and TeraBlock’ charges and expenses. TeraBlock internet-based services are
          designed to assist clients in achieving discrete financial goals. They are not intended to provide comprehensive tax advice or financial planning with respect to every aspect of a client's financial situation and do not incorporate specific investments that clients hold elsewhere. Past performance does not guarantee future results, and
          the likelihood of investment outcomes are hypothetical in nature. Not an offer, solicitation of an offer, or advice to buy or sell Digital Currencies in jurisdictions where TeraBlock is not registered.{" "}
        </p>
        <p className="fw-lighter mb-0 pb-3 col-12 col-md-4 px-4 text-center text-md-end">
          The information provided by TeraBlock is educational only and is not investment or tax advice.
          <br />
          <br />© TeraBlock Technologies Limited
        </p>
      </div>
    </div>
  );
}

export default Footer;
