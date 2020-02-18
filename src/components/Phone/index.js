import React, { Component } from "react";
import Countdown from "react-countdown-now";
import "./style.css";
class Phone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Completionist = () => <span>Times Up!</span>;

    const renderer = ({ seconds, completed }) => {
      if (completed) {
        console.log(completed);
        // Render a completed state
        return <Completionist />;
      } else {
        console.log(completed);
        // Render a countdown
        return <span>0:{seconds}</span>;
      }
    };

    return (
      <div className="card text-center smartphone">
        <div className="content">
          <div className="high-score">High Score: {this.props.highScore}</div>
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
