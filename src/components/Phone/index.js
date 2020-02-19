import React, { Component } from "react";
import Countdown from "react-countdown-now";
import "./style.css";
class Phone extends Component {
  render() {
    const time = ({ seconds, completed }) =>
      completed ? <span>Times Up!</span> : <span>0:{seconds}</span>;

    const Emojis = () => {
      if (this.props.emojis.length) {
        return (
          <div className="reply-speech-bubble">
            {this.props.emojis.map(emoji => (
              <img
                src={emoji.image}
                alt={emoji.name}
                id={emoji.id}
                width="30px"
              />
            ))}
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    return (
      <div className="card text-center smartphone">
        <div className="content">
          <div className="high-score">High Score: {this.props.highScore}</div>
          <div className="countdown">
            <Countdown date={Date.now() + 30000} renderer={time} />
          </div>
          <br />
          <div className="speech-bubble">Hi! How's it going?</div>
          <Emojis />
        </div>
      </div>
    );
  }
}

export default Phone;
