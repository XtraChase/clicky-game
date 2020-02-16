import React from "react";
import Countdown from "react-countdown-now";
import "./style.css";

const Completionist = () => <span>Times Up!</span>;

const renderer = ({ seconds, completed }) => {
  if (completed) {
<<<<<<< HEAD
    console.log("Times Up!");
    // window.location.reload();
=======
>>>>>>> parent of d1815dd... emojis now shuffle
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>0:{seconds}</span>;
  }
};

// By extending the React.Component class, Phoneinherits functionality from it
<<<<<<< HEAD
class Phone extends Component {
  // constructor(props) {
  //   super(props);
=======
class Phone extends React.Component {
  // Setting the initial state of the Phone
  component;
  state = {
    count: 0,
    clicked: false
  };
>>>>>>> parent of d1815dd... emojis now shuffle

  // The render method returns the JSX that should be rendered
  render(props) {
    // console.log("props " + props);

    return (
      <div className="card text-center smartphone">
        <div className="content">
<<<<<<< HEAD
          <div className="high-score">High Score: {this.props.score}</div>
=======
          <div className="high-score">High Score: {this.state.count}</div>
>>>>>>> parent of d1815dd... emojis now shuffle
          <div className="countdown">
            <Countdown date={Date.now() + 30000} renderer={renderer} />
          </div>
        </div>
      </div>
    );
  }
}

export default Phone;
