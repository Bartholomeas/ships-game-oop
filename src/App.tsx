import React, { Component } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import * as style from "./App.module.css";

class App extends Component {
  constructor(private PlayerOne: any, private PlayerTwo: any, props: any) {
    super(props);
    this.PlayerOne = new Player(1, 4, true);
    this.PlayerTwo = new Player(2, 5, false);
  }

  componentDidMount() {
    // console.log(this.PlayerOne.id);
  }
  // console.log(this.PlayerOne)

  // playerId={this.PlayerOne.id}
  render() {
    return (
      <div>
        <p>Gra w statki</p>
        <div className={style.wrapper}>
          <Board playerId={this.PlayerOne.id} clickHandler={() => this.PlayerOne.clickHandler()} />
          <Board playerId={this.PlayerTwo.id} clickHandler={() => this.PlayerTwo.clickHandler()} />
        </div>
      </div>
    );
  }
}

export default App;
