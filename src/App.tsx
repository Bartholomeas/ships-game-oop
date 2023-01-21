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
      new Ship(5, [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ]),
      new Ship(4, [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
      ]),
      new Ship(3, [
        [2, 0],
        [2, 1],
        [2, 2],
      ]),
      new Ship(3, [
        [3, 0],
        [3, 1],
        [3, 2],
      ]),
      new Ship(2, [
        [4, 0],
        [4, 1],
      ]),
    ]);

    const board = game.render();
    // console.log(game);
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
          {/* {this.board} */}
          <Board
            ships={[
              new Ship(5, [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
              ]),
              new Ship(4, [
                [1, 0],
                [1, 1],
                [1, 2],
                [1, 3],
              ]),
              new Ship(3, [
                [2, 0],
                [2, 1],
                [2, 2],
              ]),
              new Ship(3, [
                [3, 0],
                [3, 1],
                [3, 2],
              ]),
              new Ship(2, [
                [4, 0],
                [4, 1],
              ]),
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
// <div>
//   <p>Gra w statki</p>
//   <p>Kolej gracza:</p>
//   <div className={style.wrapper}>
//     <Board playerId={this.PlayerOne.id} clickHandler={() => this.PlayerOne.clickHandler()} />
//     <Board playerId={this.PlayerTwo.id} clickHandler={() => this.PlayerTwo.clickHandler()} />
//   </div>
// </div>
