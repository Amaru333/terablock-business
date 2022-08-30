import React, { useState } from "react";
import OutsideAlerter from "../../functions/OutsideAlerter";

import LanguageSelectorStyle from "./LanguageSelector.module.css";

function LanguageSelector() {
  const [active, setActive] = useState(false);
  const languages = [
    {
      name: "English",
      icon: "/assets/icons/eng.svg",
    },
    {
      name: "Spanish",
      icon: "/assets/icons/eng.svg",
    },
    {
      name: "German",
      icon: "/assets/icons/eng.svg",
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div style={{ width: "135px" }}>
      <OutsideAlerter func={() => setActive(false)}>
        <div className="position-relative">
          <div className="text-white d-flex align-items-center py-2 px-3 border-white border rounded" style={{ width: "135px", cursor: "pointer" }} onClick={() => setActive(!active)}>
            <img src={selectedLanguage.icon} />
            <p className="mb-0 px-2">{selectedLanguage.name}</p>
            <img src="/assets/icons/drop-down.svg" />
          </div>
          {active && (
            <div className="bg-white" style={{ width: "135px", position: "absolute", top: "42px" }}>
              {languages.map((language, index) => (
                <div
                  key={index}
                  className={["d-flex p-2", LanguageSelectorStyle.options].join(" ")}
                  onClick={() => {
                    setSelectedLanguage(language);
                    setActive(false);
                  }}
                >
                  <img src={language.icon} />
                  <p className="mb-0 ms-1">{language.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </OutsideAlerter>
    </div>
  );
}

export default LanguageSelector;
