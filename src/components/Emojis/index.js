import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-container">
      <img className="emoji" alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
