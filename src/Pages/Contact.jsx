import React from "react";
import SiteMain from "../Components/SiteMain/SiteMain";

function Contact() {

  
  return (
    <>
      <div className="wrap_contact">
        <div className="wrap_contact_block">
          <div>
            <h3>Send Email</h3>
            <a href="mailto:mkstan7@gmail.com">fred@ziconimal.com</a>
          </div>
          <div>
            <h3>Call Us Now</h3>
            <a href="tel:+2347068265165">+2347068265165</a>
          </div>
        </div>
        <SiteMain />
      </div>
    </>
  );
}

export default Contact;
