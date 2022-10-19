import React from "react";
import { useScreenSize } from "../../../functions/useScreenSize";
import UIAccordion from "../../../widgets/UIAccordion/UIAccordion";
import UIButton from "../../../widgets/UIButtons/UIButton";

function FAQSection() {
  const width = useScreenSize().width;
  return (
    <div className="pb-5 position-relative" style={{ backgroundColor: "#0251ff" }}>
      <div className="text-center pt-5 px-4 px-md-5 mx-0 mx-md-5 pb-3">
        <h3 className="text-white fw-bold">
          <b>Frequently asked questions</b>
        </h3>
      </div>
      <div className="mx-2 px-2 mx-md-5 px-md-5">
        <UIAccordion index={1} expanded title="What is a Defi (Decentralized Finance)?" homepage>
          DeFi or Decentralised finance, manages financial transactions using cryptocurrencies and blockchain technology. By displacing centralised institutions with peer-to-peer networks that can offer the whole range of financial services, from standard banking, loans, and mortgages, to complex contractual arrangements and asset trading, DeFi
          seeks to democratise finance.
          <br />
          <br />
          <b>Today's Centralised Finance</b>
          <br />
          Nearly all banking, lending, and trading facets are now controlled by centralised systems run by authorities and gatekeepers. To access anything from loans and mortgages to trading stocks and bonds, regular consumers must interact with a variety of financial middlemen. Consumers are unable to avoid middlemen like banks, exchangers, and
          lenders who profit from each financial and banking transaction by taking a cut.
          <br />
          <br />
          <b>Decentralized Finance Is The New Way</b>
          <br />
          By liberating common people through peer-to-peer trades and disarming intermediaries and gatekeepers, DeFi undermines the current centralised financial system.DeFi gives average people access to the essential components of the financial activity currently done by banks, exchanges, and insurers, such as lending, borrowing, and trading.
          <br />
          <br />
          <b>The Technology</b>
          <br />
          Decentralized finance is made possible by key technologies like blockchain and cryptocurrencies. Your banking transaction history is kept in a private ledger, which is owned and controlled by a financial institution when you make a transaction in your bank account. Blockchain is a distributed, decentralised public ledger where digital
          records of financial transactions are kept public. Any party utilising a DeFi application has access to the Blockchain public ledger.
          <br />
          <br />
          Giving users anonymity, payment verification, and a record of asset ownership that is (almost) impossible to change through fraudulent conduct, this secures the system.
          <br />
          <br />
          Blockchain is decentralised as no mediator or gatekeeper is overseeing the system. By resolving challenging math problems and adding fresh blocks of transactions to the chain, parties utilising the same blockchain can verify and record transactions. This makes financial transactions safer and more transparent than the private, secretive
          systems used in centralised finance.
          <br />
          <br />
          <b>DeFi gives the power of finance back to ordinary people.</b>
          <br />
        </UIAccordion>
        <UIAccordion index={3} title="How does TeraBlock work?" homepage>
          TeraBlock helps you navigate the Decentralised Finance (DeFi) world by consolidating every step of your Defi Journey into a single experience.
          <br />
          <br />
          TeraBlock is the simplest way to invest in Defi. From learning the fundamentals of blockchain to discovering new assets, building your portfolio in under 15mins, conducting trades, efficiently managing your Web3 wallet and much more, TeraBlock helps you invest wisely in the cryptocurrency ecosystem.
          <br />
          <br />
          TeraBlock assists you in several ways, regardless of whether you are directly transitioning from the realm of traditional finance, making the switch from centralised exchanges, or either.
          <br />
          <br />
          Build your crypto portfolio in under 15mins
          <br />
          <br />
          <div>
            <UIButton>Get started</UIButton>
            <UIButton type="primary-light">Explore Products</UIButton>
          </div>
        </UIAccordion>
        <UIAccordion index={2} title="What is a non-custodial Web3 wallet?" homepage>
          The blockchain-based version of the internet is known as Web3. Decentralisation is one of the fundamental tenets of the internet generation. Additionally, Web3 aims to provide internet users more authority and control over their data. A Web3 wallet is simply a digital wallet to store cryptocurrencies. It is a tool for accessing the web3
          economy, allowing users to interact with decentralised applications (dapps).
          <br />
          <br />
          In a non-custodial Web3 wallet, the owner can store cryptocurrencies themselves without the aid of a third party. It simply means that the wallet's owner has complete control over the funds. Additionally, the lack of a third party eliminates the requirement for KYC/AML, protecting the confidentiality and anonymity of wallet owners.
          <br />
          <br />
          A Web3 wallet comes with unique private keys or seed phrases used to access the wallet. The owner of a Web3 wallet is responsible for keeping the wallet secure.
          <br />
          <br />
          MetaMask is an excellent example of a non-custodial Web3 wallet service provider.
          <br />
          <br />
          Get started with the step-by-step process and create your own non-custodial Web3 wallet for free in under 10mins!
          <br />
          <br />
          <UIButton>Get started</UIButton>
        </UIAccordion>
        <UIAccordion index={4} title="What is TBC token?" homepage>
          Token name: TeraBlock Token Ticker: TBC Total supply: 400,000,000Blockchain: Binance Smart Chain Type: BEP-20 Listings: CoinMarketCap | CoinGecko
          <br />
          <br />
          TeraBlock DeFi Ecosystem is powered by the TeraBlock token (TBC) as its native asset. The TBC token functions as the primary utility inside the TeraBlock Ecosystem and offers discounts and exclusive access to TeraBlock products and services.
          <br />
          <br />
          Utilities Trading Fee Discounts across the TeraBlock Platform Paid out as Rewards through the multiple reward mechanisms Gives exclusive access to TeraBlock events TBC Token Staking with Rewards Program
          <br />
          <br />
          <div>
            <UIButton>Buy TBC</UIButton>
            <UIButton type="primary-light">Rewards</UIButton>
          </div>
        </UIAccordion>
      </div>
      {width > 768 && (
        <>
          <img src="./assets/icons/4x4-blue.svg" style={{ width: "40px", position: "absolute", top: "10rem", left: "0rem" }} />
          <img src="./assets/icons/6x4-pink.svg" style={{ width: "40px", position: "absolute", bottom: "2rem", right: "0rem" }} />
        </>
      )}
    </div>
  );
}

export default FAQSection;
