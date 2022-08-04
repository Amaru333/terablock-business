import React from "react";
import Script from "next/script";

import UIAccordionStyles from "./UIAccordion.module.css";

function UIAccordion({ index, expanded = false, title, children }) {
  return (
    <div className="my-3">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
      <div className="accordion" id={`accodiation${index}`}>
        <div className={["accordion-item", UIAccordionStyles.accordion_item].join(" ")}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button className={["accordion-button collapsed", UIAccordionStyles.header].join(" ")} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
              {title}
            </button>
          </h2>
          <div id={`collapse${index}`} className={`accordion-collapse collapse ${expanded ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent={`#accodiation${index}`}>
            <div className="accordion-body fs-6 text-cardDescriptionColor">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UIAccordion;
