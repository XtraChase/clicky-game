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
    highScore: 0
  };

  render() {
    return (
      <Wrapper>
        <Title>Emoji Game</Title>
        <SubTitle>
          You have 30 seconds to reply! Use as many emojis as you can without
          using the same emoji twice!
        </SubTitle>

        <div className="phone-container">
          <Phone score={this.state.highScore} />
        </div>
        <Emojis />
      </Wrapper>
    );
  }
}

export default App;
