import React from "react";

function Count(props) {
  return (
    <div className="card-body">
      <p className="card-text">High Score: {props.count}</p>
    </div>
  );
}

export default Count;
