import React, { useState } from "react";
import shirtIcon from "./shirt.png"; // Import the shirt icon
import babyIcon from "./onesie.png"; // Import the baby icon
import './ShareButtons.css'; // Add styles for the buttons

const ShareButtons = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the buttons are open

  // Toggle the open/close state
  const toggleButtons = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="share-container">
      {/* Main "CREATE" button */}
      <div className="share" onClick={toggleButtons}>
        <img src="/path/to/create-icon.png" alt="Create Icon" />
        <span>CREATE</span>
      </div>

      {/* Child buttons */}
      <div className={`child-buttons ${isOpen ? 'open' : ''}`}>
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
    </div>
  );
};

export default ShareButtons;
