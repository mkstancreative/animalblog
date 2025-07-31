import React from "react";
import img7 from "../../assets/image/img7.png";
import imgBack from "../../assets/image/back.gif";
import { BsInstagram } from "react-icons/bs";

function SiteMain() {
  return (
    <>
      <div className="wrap_site_main">
        <div
          className="wrap_instagram"
          style={{ backgroundImage: `url(${img7})` }}
        >
          <div>
            <span>
              <BsInstagram />
            </span>
            <span>Me On Instagram</span>
          </div>
        </div>

        <div
          className="wrap_contact_form"
          style={{ backgroundImage: `url(${imgBack})` }}
        >
          <div>
            <h3>Get All the Best Hands Delivered to your Inbox</h3>
            <p>Subcribe to Our Newsletter and stay updated</p>

            <form>
              <input type="text" placeholder="Subscribe Here..." />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteMain;
