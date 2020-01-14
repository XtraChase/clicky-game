import React from "react";
import Countdown from "react-countdown-now";
import "./style.css";

const Completionist = () => <span>Times Up!</span>;

const renderer = ({ seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>0:{seconds}</span>;
  }
};

// By extending the React.Component class, Phoneinherits functionality from it
class Phone extends React.Component {
  // Setting the initial state of the Phone
  component;
  state = {
    count: 0,
    clicked: false
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center smartphone">
        <div className="content">
          <div className="high-score">High Score: {this.state.count}</div>
          <div className="countdown">
            <Countdown date={Date.now() + 30000} renderer={renderer} />
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
