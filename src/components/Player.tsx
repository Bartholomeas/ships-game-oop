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

  componentDidMount() {
    console.log(this.props);
  }

  clickHandler() {
    console.log('Player:');
  }
}
