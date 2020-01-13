import React from "react";
import CardBody from "./CardBody";
// import Iframe from "react-iframe";
import "./Counter.css";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
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
        {/* <Iframe
          url="/w3css/tryw3css_templates_band.htm"
          style="width:100%; border:none; height:100%;"
        /> */}
      </div>
    );
  }
}

export default Counter;
