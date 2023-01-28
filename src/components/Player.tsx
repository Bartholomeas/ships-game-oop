import { Component, ReactNode } from 'react';
import Board from './Board';
import Ship from './Ship';

export default class Player extends Component<any, any> {
  public name: string;
  public active: boolean;
  private ships: Ship[];

  constructor(name: string, active: boolean, ships: Ship[]) {
    super(ships);
    this.name = name;
    this.active = active;
    this.ships = ships;
    this.state = {
      board: new Board(ships),
    };
  }

  public checkShips() {
    console.log(this.ships);
  }

  public setActive() {
    this.active = true;
  }

  public setInactive() {
    this.active = false;
  }

  public placeShip(size: number, x: number, y: number) {
    if (this.state.board.isOccupied(x, y)) {
      return false;
    }
    const positions: [number, number][] = [[x, y]];
    for (let i = 1; i < size; i++) {
      const newX = x + i;

      if (newX >= this.state.board.size || this.state.board.isOccupied(newX, y)) {
        return false;
      }
      positions.push([newX, y]);
    }

    const ship = new Ship(size, positions);
    this.ships.push(ship);
    this.state.board.placeSingleShip(ship);
    return true;
  }

  public render(): ReactNode {
    return (
      <div>
        <h2>{this.name}</h2>
        <h3>{this.active ? 'Kolej tego gracza' : ''}</h3>
        <div className="">
          <Board ships={this.ships} />
        </div>
      </div>
    );
  }
}
