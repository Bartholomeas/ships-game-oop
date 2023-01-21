import { Component } from 'react';
import Ship from './Ship';
import * as style from './styles/Board.module.css';

interface Props {
  props: any;
}

export default class Board extends Component<{ ships: Ship[] }, { cells: any[] }> implements Props {
  private ships;
  public grid;
  public readonly size = 9;

  constructor(ships: Ship[]) {
    super(ships);
    this.ships = ships;
    this.grid = Array(this.size)
      .fill(null)
      .map(() => Array(this.size).fill(null));

    this.state = {
      cells: [],
    };
  }

  private placeShips() {
    const { ships } = this.ships;
    console.log(ships);
    for (const ship of ships) {
      for (const [x, y] of ship.positions) {
        this.grid[x][y] = ship;
      }
    }
    console.log(this.grid);
  }

  private renderCells() {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        this.setState((prevState, props) => ({
          cells: [
            ...prevState.cells,
            <button
              onClick={() => {
                console.log(this.grid[x][y]);
              }}
              className={`${style.ship} ${this.grid[x][y] ? style.ship__active : ''}`}
              key={`${x}-${y}`}>
              {this.grid[x][y] !== null ? 'S' : ''}
            </button>,
          ],
        }));
      }
    }
  }

  componentDidMount() {
    this.placeShips();
    this.renderCells();
  }

  public render() {
    return (
      <div className={style.wrapper}>
        {this.grid[0][1] && <p>so</p>}
        <div className={style.position__wrapper}>{this.state.cells}</div>
      </div>
    );
  }
}
