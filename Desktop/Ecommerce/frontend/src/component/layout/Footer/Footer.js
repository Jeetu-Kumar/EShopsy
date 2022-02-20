import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import pic from "../../../images/eshops.jpeg";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
       This websites created for Learning purposes.<br/>
       all content on this website is copied from another website
        <h1><img src= {pic} className="Eshopsy" alt="Eshopsy"/></h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; EShopsy</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/2001jeetukumar/">Instagram</a>
        <a href="No Youtube channel">Youtube</a>
        <a href="https://www.linkedin.com/in/jeetu-kumar-69b17a20b">Linked In</a>
      </div>
    </footer>
  );
};

export default Footer;
