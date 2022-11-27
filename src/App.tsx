import React, { Component } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import * as style from "./App.module.css";

class App extends Component {
  PlayerOne: any;
  PlayerTwo: any;

  componentDidMount() {
    this.PlayerOne = new Player(1, 4, true);
    this.PlayerTwo = new Player(2, 5, false);
    console.log(this.PlayerOne, this.PlayerTwo);
  }

  render() {
    return (
      <div>
        <p>Gra w statki</p>
        <div className={style.wrapper}>
          <Board />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
