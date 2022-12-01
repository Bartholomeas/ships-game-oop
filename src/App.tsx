import React, { Component } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import * as style from "./App.module.css";

interface StateInterface {
  [key: string]: string[] | number[] | string | number;
  playerTurn: number;
}
class App extends Component<any, StateInterface> {
  constructor(private PlayerOne: any, private PlayerTwo: any, props: any) {
    super(props);
    this.PlayerOne = new Player(1, 4, true);
    this.PlayerTwo = new Player(2, 5, false);

    this.state = {
      shipSm: [],
      playerTurn: 1,
    };
  }

  startQueue() {
    console.log(`Turn of player ${this.state.playerTurn}`);
    console.log(this.PlayerOne);
  }

  componentDidMount() {
    this.startQueue();
  }

  render() {
    return (
      <div>
        <p>Gra w statki</p>
        <p>Kolej gracza:</p>
        <div className={style.wrapper}>
          <Board playerId={this.PlayerOne.id} clickHandler={() => this.PlayerOne.clickHandler()} />
          <Board playerId={this.PlayerTwo.id} clickHandler={() => this.PlayerTwo.clickHandler()} />
        </div>
      </div>
    );
  }
}

export default App;
