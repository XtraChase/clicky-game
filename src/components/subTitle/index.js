import React from "react";
import "./style.css";

function subTitle(props) {
  return <h2 className="subTitle">{props.children}</h2>;
}

export default subTitle;
