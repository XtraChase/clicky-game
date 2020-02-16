import React, { Component } from "react";
import Emojis from "./components/Emojis";
import emoji from "./emoji.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Phone from "./components/Phone";
import "./App.css";

class App extends Component {
  // Setting this.state.emoji to the emoji json array
  state = {
    emoji,
    count: 0,
<<<<<<< HEAD
    highScore: 0
  };
=======
    clicked: false
  };

  addToUsedEmojis = id => {
    // Filter this.state.emoji for emoji with an id not equal to the id being removed
    const emoji = this.state.emoji.filter(emoji => emoji.id !== id);
    // Set this.state.emoji equal to the new emoji array
    this.setState({ emoji });
  };

  shuffleEmojis = emoji => {
    let i = emoji.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = emoji[i];
      emoji[i] = emoji[j];
      emoji[j] = temp;
    }
    return emoji;
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // handleIncrement increases this.state.count by 1
  handleIncrement() {
    console.log("hello");
    // We always use the setState method to update a component's state
    this.setState(state => ({ count: this.state.count + 1 }));
  }
>>>>>>> parent of d1815dd... emojis now shuffle

  // Map over this.state.emoji and render a Emojis component for each emoji object
  render() {
    return (
      <Wrapper>
        <Title>Emoji Game</Title>
        <SubTitle>
          You have 30 seconds to reply! Use as many emojis as you can without
          using the same emoji twice!
        </SubTitle>

        <div className="phone-container">
<<<<<<< HEAD
          <Phone score={this.state.highScore} />
=======
          <Phone />
        </div>
        <div className="emoji-container">
          {this.state.emoji.map(emoji => (
            <Emojis
              id={emoji.id}
              key={emoji.id}
              name={emoji.name}
              image={emoji.image}
              // handleIncrement={this.handleIncrement}
              onClick={this.handleIncrement}
            />
          ))}
>>>>>>> parent of d1815dd... emojis now shuffle
        </div>
        <Emojis />
      </Wrapper>
    );
  }
}

export default App;
