import React, { Component } from "react";
import Emojis from "./components/Emojis";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import emoji from "./emoji.json";
import "./App.css";

class App extends Component {
  // Setting this.state.emoji to the emoji json array
  state = {
    emoji,
    count: 0
  };

  removeEmoji = id => {
    // Filter this.state.emoji for emoji with an id not equal to the id being removed
    const emoji = this.state.emoji.filter(emoji => emoji.id !== id);
    // Set this.state.emoji equal to the new emoji array
    this.setState({ emoji });
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // Map over this.state.emoji and render a Emojis component for each emoji object
  render() {
    return (
      <Wrapper>
        <Title>Emoji Game</Title>
        <Counter />
        {/* <div className="card-body">
          <p className="card-text">Count: {this.count}</p>
        </div> */}
        <div className="emoji-container">
          {this.state.emoji.map(emoji => (
            <Emojis
              removeemoji={this.removeEmoji}
              id={emoji.id}
              key={emoji.id}
              name={emoji.name}
              image={emoji.image}
              handleIncrement={this.handleIncrement}
              onClick={this.handleIncrement}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
