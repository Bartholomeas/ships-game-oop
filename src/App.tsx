import React, { Component } from 'react';
import Board from './components/Board';
import * as style from './App.module.css';
import Ship from './components/Ship';

interface StateInterface {
  [key: string]: string[] | number[] | string | number;
  playerTurn: number;
}
class App extends Component<any, StateInterface> {
  // player1 = new Player([], new Board());

  render() {
    return (
      <div>
        <p>Gra w statki</p>

        <div className={style.wrapper}>
          <div className="">
            <h2>Gracz 1</h2>
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
                  [6, 5],
                  [6, 6],
                  [6, 7],
                ]),
                new Ship(2, [
                  [4, 0],
                  [4, 1],
                ]),
              ]}
            />
          </div>
          {/* <div className=""> */}
          <h2>Gracz 2</h2>
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
                [6, 5],
                [6, 6],
                [6, 7],
              ]),
              new Ship(2, [
                [4, 0],
                [4, 1],
              ]),
            ]}
          />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;
