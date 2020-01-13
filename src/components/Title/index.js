import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

function subTitle(props) {
  return <h2 className="sub-title">{props.children}</h2>;
}

export { Title, subTitle };
