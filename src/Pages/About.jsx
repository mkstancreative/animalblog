import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import SiteMain from "../Components/SiteMain/SiteMain";

function About() {
  return (
    <>
      <div className="wrap_about">
        <div className="wrap_about_block">
          <h2>Hey there, what’s up?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eum optio dolores reprehenderit! Soluta sunt, itaque excepturi nobis
            exercitationem aspernatur. Non incidunt ab minus quod eveniet,
            debitis officiis illum maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eum optio dolores reprehenderit! Soluta sunt, itaque excepturi nobis
            exercitationem aspernatur. Non incidunt ab minus quod eveniet,
            debitis officiis illum maiores.
          </p>
          <div className="wrap_icons">
            <span>
              <BsFacebook />
            </span>
            <span>
              {" "}
              <BsInstagram />
            </span>
            <span>
              {" "}
              <BsTwitter />
            </span>
            <span>
              {" "}
              <BsGithub />
            </span>
          </div>
        </div>
        <SiteMain />
      </div>
    </>
  );
}

export default About;
