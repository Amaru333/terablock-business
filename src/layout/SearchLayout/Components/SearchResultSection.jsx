import { useRouter } from "next/router";
import React, { useState } from "react";

import SearchResultStyle from "../Styles/SearchResult.module.css";

function SearchResultSection() {
  const router = useRouter();
  const ResultCard = ({ title, description, category, category_name }) => {
    return (
      <div className={SearchResultStyle.container}>
        <div className={SearchResultStyle.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={SearchResultStyle.description} dangerouslySetInnerHTML={{ __html: description }} />
        <div className={SearchResultStyle.category}>
          {category_name}&nbsp;&nbsp;&nbsp;{">"}
        </div>
      </div>
    );
  };
  const search_results =
    router.query.query == ""
      ? []
      : [
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
          {
            title: "<span>How to Transfer Crypto assets to Metamask <span class='text-primaryBlue'>wallet</span> - Related Query Title</span>",
            description:
              "<span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a <span class='text-primaryBlue'>Manage</span> professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>",
            category: "wallet-management",
            category_name: "Wallet Management",
          },
        ];
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="py-5 px-2 px-md-5 bg-white" style={{ minHeight: "60vh" }}>
      <div className="px-0 px-md-2 px-xl-5">
        {search_results.length > 0 ? (
          <>
            {search_results.slice((currentPage - 1) * 10, currentPage * 10).map((result, index) => (
              <ResultCard key={index} title={result.title} description={result.description} category={result.category} category_name={result.category_name} />
            ))}
            <div className="d-flex justify-content-center mt-4">
              <div onClick={() => currentPage != 1 && setCurrentPage(currentPage - 1)} className={SearchResultStyle.pagination_inactive}>
                {"<"}
              </div>
              <div onClick={() => setCurrentPage(1)} className={currentPage == 1 ? SearchResultStyle.pagination_active : SearchResultStyle.pagination_inactive}>
                1
              </div>
              <div onClick={() => setCurrentPage(2)} className={currentPage == 2 ? SearchResultStyle.pagination_active : SearchResultStyle.pagination_inactive}>
                2
              </div>
              <div onClick={() => currentPage != search_results.length / 10 + 1 && setCurrentPage(currentPage + 1)} className={SearchResultStyle.pagination_inactive}>
                {">"}
              </div>
            </div>
          </>
        ) : (
          <div className={SearchResultStyle.empty_container}>
            <div className={SearchResultStyle.empty_message}>
              <img src="/assets/images/help_center/empty-icon.svg" />
              <p className={SearchResultStyle.empty_title}>Sorry, No results found</p>
              <p className={SearchResultStyle.empty_desc}>We couldn't find what you're looking for search again on Help Center</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultSection;
