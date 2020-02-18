import React, { Component } from "react";
import Emoji from "./components/Emoji";
import emojis from "./emoji.json";
import Phone from "./components/Phone";
import "./App.css";

class App extends Component {
  state = {
    emojis,
    count: 0,
    highScore: 0
  };

  //Emoji onClick event
  handleClick = id => {
    let doubleClicked = false;

    // a state snapshot to minimize state updates
    let update = {
      emojis: [...this.state.emojis],
      count: this.state.count,
      highScore: this.state.highScore
    };

    update.emojis.forEach(emoji => {
      if (emoji.id === id) {
        if (emoji.clicked) {
          doubleClicked = true;
          alert("You already used that emoji!");
        } else {
          console.log("Clicked on emoji");
        }
        emoji.clicked = true;
        update.count++;
        if (update.count > update.highScore) {
          update.highScore = update.count;
        }
      }
    });

    // reset score and clicked state in all cards if a card was clicked twice
    if (doubleClicked) {
      update.emojis.forEach(emoji => (emoji.clicked = false));
      update.count = 0;
    }

    // reset clicked in cards if all cards where clicked once
    if (update.count && !(update.count % update.emojis.length)) {
      update.emojis.forEach(emoji => (emoji.clicked = false));
    }

    // randomize emojis
    update.emojis = update.emojis.sort(() => 0.5 - Math.random());

    // update state
    this.setState({
      emojis: update.emojis,
      count: update.count,
      highScore: update.highScore
    });
  };

  render() {
    return (
      <>
        <h1 className="title">Emoji Game</h1>
        <h2 className="sub-title">
          You have 30 seconds to reply! Use as many emojis as you can without
          using the same emoji twice!
        </h2>
        ;
        <div className="phone-container">
          <Phone
            highScore={this.state.highScore}
            // won={
            //   this.state.count &&
            //   !(this.state.count % this.state.emojis.length)
            // }
          />
        </div>
        <div className="emoji-container">
          {this.state.emojis.map(emoji => (
            <div className="emoji-btn">
              <Emoji
                id={emoji.id}
                key={emoji.id}
                name={emoji.name}
                image={emoji.image}
                handleImgClick={() => this.handleClick(emoji.id)}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
