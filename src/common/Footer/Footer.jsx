import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

import Script from "next/script";

import FooterStyle from "./Footer.module.css";
import LanguageSelector from "../Inputs/LanguageSelector/LanguageSelector";
import { useRouter } from "next/router";

function Footer() {
  const sitemap_data = [
    {
      title: "TBC Token",
      pages: [
        {
          link: "https://app.terablock.com/getstarted",
          name: "Stake TBC",
        },
        {
          link: "https://pancakeswap.finance/swap?inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&outputCurrency=0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
          name: "Buy TBC on PCS",
        },
        {
          link: "https://click.mlsend2.com/link/c/YT0yMTA1NzI2MjgzMTg1OTIxMDIyJmM9ejR1MyZlPTAmYj0xMDU0MzAzMTk4JmQ9ZjNmOGk3ZQ==.7sb6hIFO4lsz41ni_5mC5Jc4xnyVNLgfPJn2SZyd9AI",
          name: "Buy TBC on HitBTC",
        },
        {
          link: "https://fmfw.io/tbc-to-usdt",
          name: "Buy TBC on FMFW.io",
        },
        {
          link: "https://bscscan.com/token/0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
          name: "TBC on BSC",
        },
        {
          link: "https://etherscan.io/token/0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
          name: "TBC on Etherscan",
        },
        {
          link: "https://coinmarketcap.com/currencies/terablock/",
          name: "TBC on CMC",
        },
        {
          link: "https://www.coingecko.com/en/coins/terablock",
          name: "TBC on CoinGecko",
        }
      ],
    },
    {
      title: "Company",
      pages: [
        {
          link: "https://www.linkedin.com/company/myterablock/jobs/",
          name: "Careers",
        },
        {
          // link: "/",
          name: "Resources",
        },
        {
          // link: "/",
          name: "Press",
        },
        {
          link: "https://hacken.io/audits/#terablock",
          name: "Security",
        },
        {
          // link: "/",
          name: "Token Listing",
        },
        {
          link: "/products#supporters",
          name: "Supporters",
        },
        {
          link: "/tnc",
          name: "Terms of Use",
        },
      ],
    },
    {
      title: "Products",
      pages: [
        {
          link: "https://app.terablock.com/getstarted",
          name: "Get Started",
        },
        {
          link: "/products?tab=buysection",
          name: "Buy",
        },
        {
          link: "/coinslists",
          name: "CoinsList",
        },
        {
          link: "/swidge",
          name: "Swidge",
        },
        {
          link: "/",
          name: "Swap",
        },
        {
          link: "http://bridge.terablock.com",
          name: "Bridge",
        },
        {
          link: "/",
          name: "Link",
        },
        {
          link: "/",
          name: "Earn",
        },
        {
          link: "/community#rewards",
          name: "Rewards Program",
        },
        {
          // link: "/",
          name: "Referral Program",
        },
        {
          link: "/community",
          name: "Ambassador Program",
        },
      ],
    },
    {
      title: "Learn",
      pages: [
        {
          link: "/learn",
          name: "Blog",
        },
        {
          link: "https://app.terablock.com/getstarted",
          name: "Browse Cryptocurrencies",
        },
        {
          link: "/learn",
          name: "Crypto Basics",
        },
        {
          link: "https://blogv2.terablock.com/untitled-2/",
          name: "How to set up a web3 wallet?",
        },
        {
          link: "https://blogv2.terablock.com/what-is-ethereum/",
          name: "How to buy crypto?",
        },
        {
          link: "https://blogv2.terablock.com/what-is-bitcoin/",
          name: "What is Bitcoin & Ethereum?",
        },
        {
          link: "https://blogv2.terablock.com/what-is-decentralised-finance-defi/",
          name: "What is DeFi?",
        },
        {
          link: "https://blogv2.terablock.com/basics-of-blockchain-explained/",
          name: "What is Blockchain?",
        },
        {
          link: "https://blogv2.terablock.com/what-is-staking-all-about/",
          name: "What is staking?",
        },
      ],
    },
    {
      title: "Support",
      pages: [
        {
          link: "/",
          name: "Help Center",
        },
        {
          // link: "/",
          name: "Contacts",
        },
        {
          // link: "/",
          name: "Bug Bounty",
        },
        {
          // link: "/",
          name: "Status",
        },
      ],
    },
  ];
  const router = useRouter();
  const width = useScreenSize().width;

  const Newsletter = () => {
    return (
      <div className="text-center text-md-start">
        <img src="/assets/icons/logo-white.svg" />
        {/* <p className="h4 my-3">Newsletter</p>
        <p style={{ fontWeight: 300 }}>Signup to get the latest market news, company updates, new product releases and more.</p>
        <input type="text" placeholder="Email Address" className="w-75 px-3 py-1 rounded border-white mb-3" />
        {width > 767 && (
          <div className="d-flex justify-content-center justify-content-md-start">
            <button style={{ border: "1px solid #FFFFFF", borderRadius: "4px", padding: "5px 30px", background: "transparent", color: "white" }}>Sign Up</button>
          </div>
        )} */}
      </div>
    );
  };
  const Sitemap = ({ data }) => {
    return (
      <div>
        <p className="h4 mb-3" style={{ fontWeight: "bold" }}>
          {data.title}
        </p>
        <div className="flex flex-col">
        {data.pages.map((page, index) => (
          <div className="mb-1 fw-light my-2">
          <a href={page.link} target='_blank' key={index} className="mb-0 fw-light my-2 text-white" style={{ cursor: "pointer",textDecoration: "none" }}>
            {page.name}
          </a></div>
        ))}
        </div>
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
          {sitemap_data.map((data, index) => (
            <div className="col-6 col-md pt-5 pt-md-0" key={index}>
              <Sitemap data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-flex justify-content-center">
          <div className={FooterStyle.horizontal_line}></div>
        </div>
        <div className="d-flex justify-content-between px-4 px-md-5 pt-0 pb-5 pt-md-4 pb-md-3">
          <div className="ps-md-4">
            <a href="https://twitter.com/myterablock" target="_blank">
              <img src="/assets/icons/Tw.png" style={{width:33, height:33}}/>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/company/myTeraBlock/" target="_blank">
              <img src="/assets/icons/Li.png" style={{width:33, height:33}}/>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com/myterablock/" target="_blank">
              <img src="/assets/icons/I.png" style={{width:33, height:33}}/>
            </a>
            &nbsp;&nbsp;
            <a href="https://t.me/TeraBlock" target="_blank">
              <img src="/assets/icons/Tel.png" style={{width:33, height:33}}/>
            </a>
            &nbsp;&nbsp;
            <a href="mailto:support@terablock.com">
              <img src="/assets/icons/mail-ico-filled.svg" />
            </a>
          </div>
          <div className="pe-md-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="row mx-0 px-3 px-md-5 text-white text-center text-md-start pt-5 pt-md-0" style={{ fontWeight: 300 }}>
        <p className="mb-0 pb-3 col-12 col-md-4 px-4" style={{ textAlign: "justify" }}>
          This website is operated and maintained by TeraBlock Technologies Limited, Terms & Legal Privacy Policy. Unless otherwise specified, all return figures shown above are for illustrative purposes only, and are not actual customer or model returns. Actual returns will vary greatly and depend on personal and market circumstances.
          <br />
          <br />
          © TeraBlock Technologies Limited
        </p>
        <p className="mb-0 pb-3 col-12 col-md-4 px-4" style={{ textAlign: "justify" }}>
          Investments: Not FDIC Insured • No Bank Guarantee • May Lose Value. Investing in Digital Currencies involves risks, and there is always the potential of losing money when you invest in Digital Currencies. Before investing, consider your investment objectives and TeraBlock’ charges and expenses. TeraBlock internet-based services are
          designed to assist clients in achieving discrete financial goals. They are not intended to provide comprehensive tax advice or financial planning with respect to every aspect of a client&apos;s financial situation and do not incorporate specific investments that clients hold elsewhere. Past performance does not guarantee future results,
          and the likelihood of investment outcomes are hypothetical in nature. Not an offer, solicitation of an offer, or advice to buy or sell Digital Currencies in jurisdictions where TeraBlock is not registered.{" "}
        </p>
        <p className="mb-0 pb-3 col-12 col-md-4 px-4" style={{ textAlign: "justify" }}>
          TeraBlock is not a broker, financial institution or intermediary and is in no way your agent, advisor, or custodian. TeraBlock is not FDIC insured and does not give any Bank guarantee. You acknowledge, understand, agree, and assume the risks involved in transacting in digital assets, you may lose value. Before transacting, consider your investment objectives, TeraBlock’s charges and expenses. TeraBlock’s services are neither investment advise, nor financial planning or tax advisory. Past performance of any advise, does not guarantee future results, and the likelihood of investment outcomes are hypothetical in nature. Services of TeraBlock may not be construed as an offer, solicitation of an offer, or advice to transact in Digital assets in jurisdictions where TeraBlock is not registered. TeraBlock is a non-custodial platform. TeraBlock cannot initiate a transfer of any of your cryptocurrency or digital assets or otherwise access your digital assets. TeraBlock has no fiduciary relationship or obligation to you regarding any decisions or activities that you affect in connection with your use of the Services. Unless explicitly provided in writing, TeraBlock does not host or maintain ecosystem partners accessible on our Services, do not participate in any transactions on such ecosystem partners’ platforms, and TeraBlock does not recommend, endorse, or otherwise take a position on your use of these services.
        </p>
      </div>
    </div>
  );
}

export default Footer;
