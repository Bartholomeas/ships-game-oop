import { Component } from 'react';
import Board from './Board';
import Ship from './Ship';

export default class Player extends Component<any, any> {
  private ships: Ship[];
  private board: Board;

  constructor(ships: Ship[], board: Board) {
    super(ships, board);
    this.ships = ships;
    this.board = board;
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
}
