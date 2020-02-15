import React, { Component } from "react";
import "./style.css";

class Emojis extends Component {
  render() {
    return (
      <div className="emoji-container">
        {this.state.emoji.map(emoji => (
          <Emojis
            id={emoji.id}
            key={emoji.id}
            name={emoji.name}
            image={emoji.image}
            value={emoji.clicked}
          />
        ))}
      </div>
    );
  }
}

// }

export default Emojis;
