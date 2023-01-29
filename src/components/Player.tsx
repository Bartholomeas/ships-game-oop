import { Component, ReactNode } from 'react';
import Board from './Board';
import Ship from './Ship';
import * as style from './styles/Player.module.css';

export default class Player extends Component<any, any> {
  public name: string;
  public active: boolean;
  private ships: Ship[];
  private board: Board;

  constructor(name: string, active: boolean, ships: Ship[]) {
    super(ships);
    this.name = name;
    this.active = active;
    this.ships = ships;
    this.board = new Board(this.ships, this.setIsActive);
    this.state = {
      active: this.active,
      board: this.board,
      shipsSunk: 0,
    };
  }

  public setIsActive = () => {
    this.setState({ active: !this.state.active });
  };

  public addPoint = () => {
    this.setState({ shipsSunk: this.state.shipsSunk + 1 });
    console.log('Zdobywasz punkt!');
    console.log(this.state.shipsSunk);
    return;
  };

  componentDidUpdate() {
    if (this.state.shipsSunk === 10) {
      alert('Koniec gry');
      window.location.reload();
    }
  }

  public render(): ReactNode {
    let activePlayer = this.state.active;

    return (
      <div>
        <div className={style.flex}>
          <h2>{this.name}</h2>
          <p>Punktów: {this.state.shipsSunk}</p>
          {activePlayer ? <p className={style.currentTurn}> Kolej {this.name}</p> : ''}
        </div>
        <div className="">
          <Board ships={this.ships} setIsActive={this.setIsActive} addPoint={this.addPoint} />
        </div>
      </div>
    );
  }
}
