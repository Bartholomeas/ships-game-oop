import { Component } from 'react';
import Ship from './Ship';
import * as style from './styles/Board.module.css';

interface Props {
  props: any;
}
export default class Board extends Component<any, { x: number[]; y: string[] }> implements Props {
  private readonly ships;
  private readonly grid;
  public readonly size = 9;
  constructor(ships: Ship[]) {
    super(ships);
    this.ships = ships;
    this.grid = Array(this.size)
      .fill(null)
      .map(() => Array(this.size).fill(null));
  }

  private placeShips() {
    // console.log(this.ships[0]);
    const { ships } = this.ships;
    // console.log(ships);
    for (const { context: ship } of ships) {
      console.log(ship);
    }
  }

  componentDidMount() {
    this.placeShips();
  }

  public render() {
    const cells = [];
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        cells.push(
          <button
            onClick={() => console.log(y, x)}
            className={`${style.ship} ${this.grid[x][y] ? style['ship--active'] : ''}`}
            key={`${x}-${y}`}>
            {this.grid[x][y] ? 'S' : '-'}
          </button>
        );
      }
    }

    return (
      <div className={style.wrapper}>
        <div className={style.position__wrapper}>{cells}</div>
      </div>
    );
  }
}
