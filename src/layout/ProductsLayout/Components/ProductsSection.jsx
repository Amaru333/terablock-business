import React, { useEffect, useRef, useState } from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import { useRouter } from "next/router";
import UIButton from "../../../widgets/UIButtons/UIButton";

import ProductStyle from "../Styles/ProductsSection.module.css";

function ProductsSection() {
  const width = useScreenSize().width;
  const [tab, setTab] = useState("Wallet Manager");
  const ref = useRef({});
  const [buttonText, setButtonText] = useState("Get Started");
  const query = useRouter();

  useEffect(() => {
    
    let tabq = query.asPath.split("?")[1]?.split("&")?.filter(q => q.split("=")[0] == 'tab')[0]?.split("=")[1]?.toLowerCase();
    tabq = tabq?.charAt(0).toUpperCase() + tabq?.slice(1)
    console.log(tabq)
    setTab(tabq)
  }, [query.asPath]);
  const tab_list = [
    {
      name: "Wallet Manager",
      icon: "./assets/icons/wallet-tab.svg",
    },
    {
      name: "CoinsList",
      icon: "./assets/icons/coin-bag.svg",
    },
    {
      name: "Swidge",
      icon: "./assets/icons/swidge.svg",
    },
    {
      name: "Buy",
      icon: "./assets/icons/bag.svg",
    },
    {
      name: "Swap",
      icon: "./assets/icons/swap.svg",
    },
    {
      name: "Bridge",
      icon: "./assets/icons/bridge.svg",
    },
    {
      name: "Link",
      icon: "./assets/icons/bridge.svg",
    },
    {
      name: "Earn",
      icon: "./assets/icons/money-bag.svg",
    },
    {
      name: "Learn",
      icon: "./assets/icons/learn.svg",
    },
  ];
  const openNewTab = (link) => {
    window.open(link, '_blank')
  }
  const WalletManagement = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Wallet Management</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Ultimate Defi asset management tool</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Track multiple wallets across blockchains and get a unified overview of your entire Web3 wealth with the wallet manager. It lets you build, track and manage your Web3 portfolio from one powerful non-custodial DeFi tool.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Track multiple wallets across multiple blockchains.</li>
            <li>Get an instant overview of your entire Web3 portfolio in real-time.</li>
            <li>Keep track of your trades with detailed transaction history.</li>
            <li>Get live price charts and information on your holdings.</li>
            <li>Get access to analytics-backed market insights on your portfolio through Lunarcrush.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/wallet.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const CoinsLists = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>CoinsList</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Invest with a long-term view of building crypto wealth.</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            CoinsList is our carefully selected portfolio of cryptocurrencies that reflects a theme, idea or goal. It exposes you to the most sought-after cryptocurrencies without requiring you to invest time and effort in learning about them.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Place orders for multiple cryptocurrencies in 1 click as CoinsList and save time.</li>
            <li>Start small budget investment for $100.</li>
            <li>CoinsList is non-custodial, so your funds are always in your control.</li>
            <li>Track and manage seamlessly with a real-time value on a multi-protocol unified platform.</li>
            <li>Invest in CoinsList every week, month, or quarter with systematic investment plans (SIPs).</li>
            <li>Keep more money in your portfolio with no advisory fee, only the fees associated with trading expenses.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover CoinsList</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/coinslists.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Swidge = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Swidge</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Powerful Web3 multi-protocol automation</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Swidge is a powerful Web3 multi-protocol automation that helps users buy, swap, bridge and transfer tokens from a multichain unified platform to a blockchain game (Play-to-earn) or a decentralised application (Dapp) in just a few clicks.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Onboard Dapps without the complexities of DeFi.</li>
            <li>Pay comparatively low fees through multi-protocol automation.</li>
            <li>Use a wide range of accepted cryptocurrencies and Swidge to popular altcoins.</li>
            <li>Buy crypto or use your existing funds and redeem them instantly in your chosen Dapp.</li>
            <li>Fully transparent, all the transactions are publicly available on the blockchain explorers.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary" onClick={()=>{open("https://app.terablock.com/login")}}>Launch App</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/swidge.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Buy = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" id="buysection" style={{ color: "#1b2b6b" }}>
            <b>Buy</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Jumpstart your crypto purchases in just a few clicks</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Buy a range of cryptocurrencies directly to your Web3 wallet with over 16 payment methods in 180 countries and more than 95 accepted fiat currencies.
            <br />
            <br />
            We've built intelligent order routing engines to increase the success rates of transactions. Smart onramp routing engine recommends the onramp that is most likely to result in a successful transaction.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>High transaction success rate.</li>
            <li>Buy crypto directly to your Web3 wallet, no need for a centralised exchange account.</li>
            <li>Get the lowest fees, option to choose from the cheapest onramp partner. </li>
            <li>KYC and AML compliance takes under 10mins and is handled by your chosen fiat onramp. </li>
            <li>TeraBlock doesn't have access to your KYC data and we don't cross-associate wallets.</li>
            <li>Powered by Onramper, the #1 fiat-to-crypto onramp aggregator.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Buy</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/buy.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Swap = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Swap</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Invest with a long-term view of building crypto wealth.</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            TeraBlock Swap is an innovative multi-chain liquidity aggregator that allows users to easily exchange one cryptocurrency for another at the best rates in the market across multiple blockchains.
          </p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Swap identifies the most efficient swapping routes by aggregating and comparing the best rates in the market across all leading DEXs across multiple blockchains.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Smart Multi-chain Aggregator.</li>
            <li>Best prices across multichain DEXs.</li>
            <li>Instant on-chain conversion.</li>
            <li>Pay comparatively low fees along with low slippage.</li>
            <li>Market Sentiments from LunarCrush.</li>
            <li>TeraBlock Swap is non-custodial, so your funds are always in your control.</li>
            <li>Fully transparent, all the transactions are publicly available on the blockchain explorers.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Swap</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/swap.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Bridge = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Bridge</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Connecting isolated blockchain infrastructures</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            TeraBlock Bridge is a decentralised token routing solution providing interoperability between different blockchain networks. It applies a cross-network bridging technique to ensure the secure movement of tokens between blockchains. The multi-layered security and dual setup approach make the integration between blockchains efficient and
            seamless.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Simple to use interface.</li>
            <li>High transaction success rate.</li>
            <li>Pay comparatively low fees along with low slippage. </li>
            <li>TeraBlock bridge is non-custodial, so your funds are always in your control.</li>
            <li>Fully transparent, all the transactions are publicly available on the blockchain explorers.</li>
            <li>Multi-asset and multichain bridging.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Bridge</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/bridge.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Link = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Link</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">An innovative way to link tokens and networks to a Web3 wallet</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Link is a dynamic connection protocol with a catalogue of verified tokens and EVN networks with the correct Chain ID and Network ID. Link helps you connect your Web3 wallet to verified tokens and EVM networks with a single click.
            <br />
            <br />
            Only some tokens and networks appear in a newly created Web3 wallet, and adding them can be tedious and complicated. We have simplified this process with Link.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Link removes the process of research and manually entering details to connect a token or a network to help you save time.</li>
            <li>Single-click dynamic automation to fetch all the necessary information required to add the desired token or a network.</li>
            <li>The Link catalogue is dynamically updated regularly to have verified and most accurate information about a token or network.</li>
            <li>The Link is entirely free to use.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Link</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/link.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Earn = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Earn</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">Wiser investments today for a better tomorrow</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            Earn is a series of staking pools that allow you to earn a percentage -rate reward over time simply by locking your idle cryptocurrencies for the stipulated lock-in period.
            <br />
            <br />
            Staking has the added benefit of contributing to the security and efficiency of the blockchain projects you support. By staking some of your funds, you make the blockchain more resistant to attacks and strengthen its ability to process transactions.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Simple to use interface.</li>
            <li>Staking is a “set and forget” approach to long-term investing.</li>
            <li>Stake TBC tokens to avail of transaction fee discounts on the TeraBlock platform.</li>
            <li>Earn is non-custodial, so your funds are always in your control.</li>
            <li>Fully transparent, all the transactions are publicly available on the blockchain explorers.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Earn</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/earn.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };
  const Learn = () => {
    return (
      <div className="row mx-0 d-flex flex-column-reverse flex-md-row px-0 px-md-0 px-xl-2">
        <div className="col-12 col-md-6 mt-3 px-3 pb-4 px-md-4">
          <h2 className="fw-normal text-center text-md-start" style={{ color: "#1b2b6b" }}>
            <b>Learn</b>
          </h2>
          <p className="text-primaryBlue text-center text-md-start fw-bold fst-italic m-0">The beginner-friendly guide to the world of blockchain</p>
          <p className="mt-2" style={{ color: "#5a5b5b" }}>
            TeraBlock Learn is a dedicated learning platform to help beginners understand the fundamental concepts of blockchain to kickstart their journey into the crypto ecosystem. A series of guides, tutorials, and blogs are focused on assisting users in getting answers to their questions about crypto.
          </p>
          <ul style={{ color: "#5a5b5b" }}>
            <li>Access tailor-made content to help you sharpen your skills and knowledge</li>
            <li>Learn basic, intermediate and advanced concepts in crypto with the help of descriptive blogs.</li>
            <li>Get a deeper insight into TeraBlock's ecosystem and products</li>
            <li>Learn how to interact with TeraBlock's Defi utilities through step-by-step guided processes.</li>
          </ul>
          <div className="mt-3 pt-2 d-flex justify-content-center justify-content-md-start">
            <UIButton type="primary" width="150px" onClick={() => openNewTab('https://app.terablock.com/getstarted')} onMouseOut={() => setButtonText("Get Started")}>
              {buttonText}
            </UIButton>
            <UIButton type="secondary">Discover Learn</UIButton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src="./assets/images/product/learn.png" style={{ width: "80%", objectFit: "contain" }} />
        </div>
      </div>
    );
  };

  // const TabBar = () => {
  //   const offset = 250;
  //   const scroll = (scrollOffset) => {
  //     ref.current.scrollLeft += scrollOffset;
  //   };
  //   return (
  //     <div className="d-flex align-items-center">
  //       {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(-offset)} src="./assets/icons/left-arrow-blue.svg" />}
  //       <div className={ProductStyle.tab_bar} ref={ref}>
  //         {tab_list.map((tabItem, index) => (
  //           <div key={index} onClick={() => setTab(tabItem.name)} className={[ProductStyle.tab_items, tabItem.name == tab ? ProductStyle.tab_active : ProductStyle.tab_inactive].join(" ")}>
  //             <img className={[ProductStyle.tab_icon, tabItem.name == tab && ProductStyle.tab_icon_active].join(" ")} src={tabItem.icon} />
  //             <p className={[ProductStyle.tab_name, tabItem.name == tab ? ProductStyle.tab_name_active : ProductStyle.tab_name_inactive].join(" ")}>{tabItem.name}</p>
  //           </div>
  //         ))}
  //       </div>
  //       {ref.current.scrollWidth > ref.current.offsetWidth && <img onClick={() => scroll(+offset)} src="./assets/icons/right-arrow-blue.svg" />}
  //     </div>
  //   );
  // };
  const TabBar = () => {
    return (
      <div className={ProductStyle.tab_container}>
        {tab_list.map((tabItem, i) => (
          <div style={{ display: "inline-block" }} className={tab == tabItem.name ? ProductStyle.active_tab : ProductStyle.inactive_tab} onClick={() => setTab(tabItem.name)}>
            {tabItem.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-5 pb-5 bg-white">
      <div className="py-4" style={{ maxWidth: "1700px", margin: "auto", width: width > 1499 ? "70%" : width > 940 ? "83%" : "95%" }}>
        <div className="text-center mb-2 px-4 px-md-2 pb-2">
          <h2 className="text-primaryTextDark fw-bolder">
            <b>Powerful products for Web3</b>
          </h2>
          <p className="text-primaryTextGray">A suite of progressive and advanced tools to help you interact with Web3 on a unified platform</p>
        </div>
        <div className="mb-5 px-2 px-md-0">
          <TabBar />
        </div>
        <div className="px-0 px-md-0">
          {tab == "Wallet Manager" && <WalletManagement />}
          {tab == "CoinsList" && <CoinsLists />}
          {tab == "Swidge" && <Swidge />}
          {tab == "Buy" && <Buy />}
          {tab == "Swap" && <Swap />}
          {tab == "Bridge" && <Bridge />}
          {tab == "Link" && <Link />}
          {tab == "Earn" && <Earn />}
          {tab == "Learn" && <Learn />}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
