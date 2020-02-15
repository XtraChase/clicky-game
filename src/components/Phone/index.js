import React, { Component } from "react";
import Countdown from "react-countdown-now";
import "./style.css";

const Completionist = () => <span>Times Up!</span>;

const renderer = ({ seconds, completed }) => {
  if (completed) {
    console.log("Times Up!");
    // window.location.reload();
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>0:{seconds}</span>;
  }
};

// By extending the React.Component class, Phoneinherits functionality from it
class Phone extends Component {
  // constructor(props) {
  //   super(props);

  // The render method returns the JSX that should be rendered
  render(props) {
    // console.log("props " + props);

    return (
      <div className="card text-center smartphone">
        <div className="content">
          <div className="high-score">High Score: {this.props.score}</div>
          <div className="countdown">
            <Countdown date={Date.now() + 30000} renderer={renderer} />
          </div>
          <br />
          <div className="speech-bubble">Hi! How's it going?</div>
          {/* <div className="reply-speech-bubble">...</div> */}
        </div>
      </div>
    );
  }
}

export default Phone;
