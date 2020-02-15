import React, { Component } from "react";
import "./style.css";

// handleIncrement increases this.state.count by 1

class Emoji extends Component {
  // this.clicked = this.clicked.bind(this)

  clicked = event => {
    // console.log(event.target);
    console.log(this.props.id + " Clicked value: " + this.props.value);
    // if (!this.props.clicked) {
    this.setState(event => ({ value: true }));
    // this.props.value = true;
    console.log(this.props.id + " Clicked value:  " + this.props.value);
    //   // this.setprops({ [event.target.id]: (event.target.clicked = true) });
    //   this.handleIncrement();
    //   this.shuffleEmojis();
    // } else {
    //   alert("You already used that emoji!");
    //   window.location.reload();
    //   // this.resetCount();
    //   // this.shuffleEmojis();
    // }
  };

  render(props) {
    // // function Emojis(props) {
    //   const handleIncrementv = () => {
    //     this.setState(props => {
    //       // console.log(props.count);
    //       return { count: props.count + 1 };
    //     });
    //   };

    //   //shuffle the emojis to show a new randomized array
    //   const shuffleEmojis = emoji => {
    //     var emojiArray = this.state.emoji;
    //     let i = emojiArray.length - 1;
    //     for (; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = emojiArray[i];
    //       emojiArray[i] = emojiArray[j];
    //       emojiArray[j] = temp;
    //     }
    //     return emoji;
    //   };

    //   //reset count
    //   //if count is higher than highScore then high score equalls count
    //   const resetCount = () => {
    //     if (this.state.count > this.state.highScore) {
    //       this.setState(state => {
    //         return { highScore: this.state.count, count: 0 };
    //       });
    //     } else {
    //       this.setState(state => {
    //         return { count: 0 };
    //       });
    //     }
    //   };

    return (
      <div className="img-container">
        <img
          className="emoji"
          alt={this.props.name}
          src={this.props.image}
          onClick={this.clicked}
        />
      </div>
    );
  }
}

// }

export default Emoji;
