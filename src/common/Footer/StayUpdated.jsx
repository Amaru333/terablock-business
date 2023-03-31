import React from "react";
import { useScreenSize } from "../../functions/useScreenSize";
import UIButton from "../../widgets/UIButtons/UIButton";

function StayUpdated() {
  const width = useScreenSize().width;
  return (
    <div style={{ padding: "75px 0" }}>
      <p className="h4 mb-3 px-4 text-center" style={{ color: "#1b2b6b" }}>
        <b>Stay updated on the latest TeraBlock news</b>
      </p>
      <div className="d-flex align-items-center justify-content-center">
        {/* <input type="text" placeholder="Enter your email address" className="w-100 px-3 py-2 rounded border" style={{ maxWidth: width > 767 ? "300px" : "250px" }} />
        <div>
          <UIButton type="primary">Sign Up</UIButton>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html:
            "<script>"+
            "(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){"+
            "var c={ a:arguments,q:[]};var r=this.push(c);return \"number\"!=typeof r?r:f.bind(c.q);}"+
            "f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);"+
            "var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));"+
            "_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');"+
            "var ml_account = ml('accounts', '3712445', 'n4a2k0o1k0', 'load');"+
            "</script>"
        }} />
        <div class="ml-form-embed"
          data-account="3712445:n4a2k0o1k0"
          data-form="5253668:n7a1k9"
          style={{ minWidth: width > 767 ? "400px" : "300px" }}>
        </div>
      </div>
    </div>
  );
}

export default StayUpdated;
