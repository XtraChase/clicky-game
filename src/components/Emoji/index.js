import React from "react";
import "./style.css";

const Emoji = props => (
  <div className="img-container" id={props.id} onClick={props.handleImgClick}>
    <img className="emoji" alt={props.name} src={props.image} />
  </div>
);

export default Emoji;
