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
    highScore: 0,
    clicked: false
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement() {
    this.setState(state => {
      console.log(state.count);
      return { count: state.count + 1 };
    });
  }

  //shuffle the emojis to show a new randomized array
  shuffleEmojis = emoji => {
    var emojiArray = this.state.emoji;
    let i = emojiArray.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = emojiArray[i];
      emojiArray[i] = emojiArray[j];
      emojiArray[j] = temp;
    }
    return emoji;
  };

  //reset count
  //if count is higher than highScore then high score equalls count
  resetCount() {
    if (this.state.count > this.state.highScore) {
      this.setState(state => {
        return { highScore: this.state.count, count: 0 };
      });
    } else {
      this.setState(state => {
        return { count: 0 };
      });
    }
  }

  //Emoji onClick event
  clicked = () => {
    console.log(this.state);
    if (!this.state.clicked) {
      // this.setState({[event.target.id]: event.target.clicked: true });
      this.handleIncrement();
      this.shuffleEmojis();
    } else {
      alert("You already used that emoji!");
      window.location.reload();
      // this.resetCount();
      // this.shuffleEmojis();
    }
  };

  render() {
    // const shuffledEmojis = shuffleEmojis(this.state.emoji);

    return (
      <Wrapper>
        <Title>Emoji Game</Title>
        <SubTitle>
          You have 30 seconds to reply! Use as many emojis as you can without
          using the same emoji twice!
        </SubTitle>

        <div className="phone-container">
          <Phone />
        </div>
        <div className="emoji-container">
          {this.state.emoji.map(emoji => (
            <button className="emoji-btn" onClick={this.clicked}>
              <Emojis
                id={emoji.id}
                key={emoji.id}
                name={emoji.name}
                image={emoji.image}
                value={this.state.clicked}
              />
            </button>
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
