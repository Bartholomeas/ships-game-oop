import React, { Component } from 'react';
import Board from './components/Board';
import Player from './components/Player';
import * as style from './App.module.css';
import Ship from './components/Ship';

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
    // console.log(`Turn of player ${this.state.playerTurn}`);
    // console.log(this.PlayerOne);
    const game = new Board([
      new Ship(1, [[0, 0]]),
      new Ship(1, [[0, 4]]),
      new Ship(1, [[3, 2]]),
      new Ship(1, [[4, 6]]),
      new Ship(2, [
        [9, 5],
        [9, 6],
      ]),
      new Ship(2, [
        [5, 5],
        [5, 6],
      ]),
    ]);

    console.log(game);
  }

  componentDidMount() {
    this.startQueue();
  }
  // 4jednoamsztowce 3dwumasztowce 2trzymasztowce 1czteromasztowiec

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
