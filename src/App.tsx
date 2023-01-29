import React, { Component } from 'react';
import * as style from './App.module.css';
import Ship from './components/Ship';
import Player from './components/Player';

class App extends Component<any, any> {
  shipSizes = [5, 4, 3, 3, 2];
  public playerOneShips = this.generateShips(this.shipSizes);
  public playerTwoShips = this.generateShips(this.shipSizes);

  constructor(props: any) {
    super(props);
    this.state = {
      activePlayer: this.playerOne,
    };
  }
  private generateShips(shipSizes: number[]) {
    const ships: Ship[] = [];
    shipSizes.forEach(size => {
      const isVertical = Math.random() < 0.5;
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      const positions = [] as [number, number][];

      for (let i = 0; i < size; i++) {
        if (isVertical) {
          y = y + i;
        } else {
          x = x + i;
        }
        positions.push([x, y]);
      }
      ships.push(new Ship(size, positions));
    });
    return ships;
  }

  // public playerOne = new Player('Gracz pierwszy', true, this.playerOneShips);
  // public playerTwo = new Player('Gracz pierwszy', true, this.playerTwoShips);

  public playerOne = new Player('Gracz pierwszy', true, [
    new Ship(5, [
      [2, 8],
      [2, 7],
      [2, 6],
      [2, 5],
      [2, 4],
    ]),
    new Ship(4, [
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
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
  ]);
  public playerTwo = new Player('Gracz Drugi', false, [
    new Ship(5, [
      [2, 8],
      [2, 7],
      [2, 6],
      [2, 5],
      [2, 4],
    ]),
    new Ship(4, [
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
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
  ]);

  render() {
    console.log(this.playerOneShips);

    return (
      <div>
        <div className={style.wrapper}>
          {this.playerOne.render()}
          {this.playerTwo.render()}
        </div>
      </div>
    );
  }
}

export default App;
