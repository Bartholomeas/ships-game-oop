import { Component, ReactNode } from 'react';
import Board from './Board';
import Ship from './Ships/Ship';
import * as style from './styles/Player.module.css';

export default class Player extends Component<any, any> {
  private readonly name: string;
  private board: Board;

  constructor(name: string, props: any) {
    super(props);
    this.name = name;

    this.board = new Board(this.props.ships, this.setIsActive);
    this.state = {
      active: this.props.active,
      board: this.board,
      shipsSunk: 0,
    };
    this.addPoint = this.addPoint.bind(this);
    this.setIsActive = this.setIsActive.bind(this);
  }

  public setIsActive() {
    this.setState({ active: !this.state.active });
    console.log(this.state.active);
  }

  public addPoint() {
    this.setState({ shipsSunk: this.state.shipsSunk + 1 });
    console.log('Zdobywasz punkt!');
    console.log(this.state.shipsSunk);
    return;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    this.props.setIsActive();
    console.log('first');
    if (this.state.active !== prevState.active) {
      console.log('inac');
      this.props.setIsActive();
    }
    if (this.state.shipsSunk === 10) {
      alert('Koniec gry');
      window.location.reload();
    }
  }

  public render(): ReactNode {
    return (
      <div>
        <div className={style.flex}>
          <h2>{this.name}</h2>
          <p>Punktów: {this.state.shipsSunk}</p>
          {this.state.active ? <p className={style.currentTurn}> Kolej {this.name}</p> : ''}
        </div>
        <div className="">
          <Board ships={this.props.ships} setIsActive={this.setIsActive} addPoint={this.addPoint} />
        </div>
      </div>
    );
  }
}
