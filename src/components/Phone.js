import React from "react";
import CardBody from "./CardBody";
import "./Phone.css";

// By extending the React.Component class, Phoneinherits functionality from it
class Phone extends React.Component {
  // Setting the initial state of the Phone
  component;
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center smartphone">
        <CardBody
          className="content"
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Phone;
