import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsSnapchat } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__scritte">
        <p>© 2023 Airbnb, Inc!</p>
        <p>Privacy · Terms · Sitemap · Company Details</p>
      </div>
      <div className="footer__icons">
        <BsTwitter />
        <BsInstagram />
        <BsFacebook />
        <FaSnapchatGhost />
      </div>
    </div>
  );
}

export default Footer;
