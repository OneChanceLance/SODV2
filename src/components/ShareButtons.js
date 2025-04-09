import React from "react";
import shirtIcon from "./shirt.png"; // Import the shirt icon
import babyIcon from "./onesie.png"; // Import the baby icon

const ShareButtons = () => {
  return (
    <div className="share-container">
      <div className="share">
        <img src="/path/to/create-icon.png" alt="Create Icon" />
        <span>CREATE</span>
      </div>

      <div className="one">
        <img src={shirtIcon} alt="Shirt Icon" />
        <span>SHIRTS</span>
      </div>
      <div className="two">
        <img src="/path/to/pants-icon.png" alt="Pants Icon" />
        <span>PANTS</span>
      </div>
      <div className="three">
        <img src="/path/to/hats-icon.png" alt="Hats Icon" />
        <span>HATS</span>
      </div>
      <div className="four">
        <img src="/path/to/jackets-icon.png" alt="Jackets Icon" />
        <span>JACKETS</span>
      </div>
      <div className="five">
        <img src={babyIcon} alt="Babies Icon" />
        <span>BABIES</span>
      </div>
    </div>
  );
};

export default ShareButtons;
