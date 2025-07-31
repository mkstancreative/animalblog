import React from "react";
import zicImage from "../../assets/image/zico.png";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_block">
        <div>
          <img src={zicImage} alt="zico" />
        </div>
      </div>

      <div className="hero_block2">
        <h1>Hey, I'm Ziconimal</h1>
        <p>
          Agulue Isaac is currently Professor of Zoology at University of
          Regensburg. "Zoology is an active and colorful biological discipline
          with a long history and a promising future.
        </p>

        <div className="icons">
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
    </div>
  );
}

export default Hero;
