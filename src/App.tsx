import React, { Component } from 'react';
import * as style from './App.module.css';
import Ship from './components/Ships/Ship';
import Player from './components/Player';
import ShipXl from './components/Ships/ShipXl';
import ShipLg from './components/Ships/ShipLg';
import ShipMd from './components/Ships/ShipMd';
import ShipSm from './components/Ships/ShipSm';

class App extends Component<any, any> {
  shipSizes = [5, 4, 3, 3, 2];

  constructor(props: any) {
    super(props);
    this.state = {
      // activePlayer: this.playerOne,
      playerOne: new Player('Gracz 1', this.generateShips(this.shipSizes)),
      playerTwo: new Player('Gracz 2', this.generateShips(this.shipSizes)),
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

  // public playerOne = new Player('Gracz 1', true, this.playerOneShips);
  // public playerTwo = new Player('Gracz 2', true, this.playerTwoShips);

  public playerOne = new Player('Gracz 1', {
    active: true,
    ships: [
      new ShipXl([
        [2, 8],
        [2, 7],
        [2, 6],
        [2, 5],
        [2, 4],
      ]),
      new ShipLg([
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
      ]),
      new ShipMd([
        [2, 0],
        [2, 1],
        [2, 2],
      ]),
      new ShipSm([
        [6, 5],
        [6, 6],
        [6, 7],
      ]),
      new ShipSm([
        [4, 0],
        [4, 1],
      ]),
    ],
  });
  public playerTwo = new Player('Gracz 2', {
    active: false,
    ships: [
      new ShipXl([
        [2, 8],
        [2, 7],
        [2, 6],
        [2, 5],
        [2, 4],
      ]),
      new ShipLg([
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
      ]),
      new ShipMd([
        [2, 0],
        [2, 1],
        [2, 2],
      ]),
      new ShipSm([
        [6, 5],
        [6, 6],
        [6, 7],
      ]),
      new ShipSm([
        [4, 0],
        [4, 1],
      ]),
    ],
  });

  render() {
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
