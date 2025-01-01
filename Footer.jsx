import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best riad to visit.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Marrakech , Old Medina.</span>
          <div className="flexCenter f-menu">
            <button>Property</button>
            <button>Services</button>
            <button>Product</button>
            <button>About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
