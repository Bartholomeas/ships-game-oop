import { Component, ReactNode } from 'react';
import Board from './Board';
import Ship from './Ship';

export default class Player extends Component<any, any> {
  public name: string;
  public active: boolean;
  private ships: Ship[];
  private board: Board;

  constructor(name: string, active: boolean, board: []) {
    super(ships, board);
    this.name = name;
    this.active = active;
    this.ships = ships;
  }

  public setActive() {
    this.active = true;
  }

  public setInactive() {
    this.active = false;
  }

  public placeShip(size: number, x: number, y: number) {
    if (this.board.isOccupied(x, y)) {
      return false;
    }
    const positions: [number, number][] = [[x, y]];
    for (let i = 1; i < size; i++) {
      const newX = x + i;

      if (newX >= this.board.size || this.board.isOccupied(newX, y)) {
        return false;
      }
      positions.push([newX, y]);
    }

    const ship = new Ship(size, positions);
    this.ships.push(ship);
    this.board.placeSingleShip(ship);
    return true;
  }

  public render(): ReactNode {
    return (
      <div>
        <h2>{this.name}</h2>
        <h3>{this.active ? 'Kolej tego gracza' : ''}</h3>

        <div className="">{this.board.render()}</div>
      </div>
    );
  }
}
