import React from "react";
import "./style.css";

function Emojis(props) {
  return (
    <div className="img-container">
      <img className="emoji" alt={props.name} src={props.image} />
    </div>
  );
}

export default Emojis;
