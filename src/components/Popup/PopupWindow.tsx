import React from "react";
import Popup from "reactjs-popup";

import "./styles/popup.css";

interface PopupProps {
  vector: string;
  paragraph: string;
  email: string;
  display: boolean;
}

const PopupWindow: React.FC<PopupProps> = (props) => {
  return (
    <Popup
      open={props.display}
      overlayStyle={{
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.20)",
      }}
      className="popup-window"
    >
      <div className="window-container">
        <img className="vector" src={props.vector} alt="confetti" />
        <strong className="window-heading">Check Your Email</strong>
        <p className="window-paragraph">{props.paragraph}</p>
        <strong className="email-text">{props.email}</strong>
      </div>
    </Popup>
  );
};

export default PopupWindow;
