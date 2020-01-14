import React from "react";
import Count from "./Count";
import "./Phone.css";
import Countdown from "react-countdown-now";

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
    count: 99
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center smartphone">
        <div className="content">
          <Count className="count" count={this.state.count} />
          <Countdown
            className="countdown"
            date={Date.now() + 30000}
            renderer={renderer}
          />
        </div>
      </div>
    );
  }
}

export default Phone;
