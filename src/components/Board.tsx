import { Component } from 'react';
import Ship from './Ship';
import * as style from './styles/Board.module.css';

interface Props {
  props: any;
}

export default class Board extends Component<{ ships: Ship[] }, { cells: any[] }> implements Props {
  public grid;
  public readonly size = 9;

  constructor(public ships: Ship[]) {
    super(ships as any);
    this.ships = ships;
    this.size = 9;
    this.grid = Array(this.size)
      .fill(null)
      .map(() => Array(this.size).fill(null));

    this.state = {
      cells: [],
    };

    this.placeShips = this.placeShips.bind(this);
    this.attackShip = this.attackShip.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.render = this.render.bind(this);
  }

  private placeShips() {
    if (!this.ships) return;
    // @ts-ignore
    for (const ship of this.ships.ships) {
      for (const [x, y] of ship.positions) {
        this.grid[x][y] = ship;
      }
    }
  }

  public placeSingleShip(ship: Ship) {
    const { ships }: any = this.ships;
    for (const [x, y] of ships) {
      // this.grid[x][y] = ship;
    }
  }

  public attackShip(x: number, y: number): boolean {
    if (this.grid[x][y] === null) {
      this.grid[x][y] = -1;
      return false;
    console.log(x,y)
    }
    if (this.grid[x][y] !== -1) {
      this.grid[x][y].hit();

      if (this.grid[x][y].isSunk()) {
        for (const [i, j] of this.grid[x][y].getPositions()) {
          this.grid[i][j] = -1;
          this.setState(prevState => {
            const newCells = [...prevState.cells];
            newCells[i * this.size + j] = (
              <button
                onClick={() => console.log(i,j)}
                className={`${style.ship} ${style.ship__sunk}`}
                key={i * this.size + j}>
                X
              </button>
            );
            return { cells: newCells };
          });
        }
      } else {
        this.setState(prevState => {
          const newCells = [...prevState.cells];
          newCells[x * this.size + y] = (
            <button
              onClick={() => console.log(x,y)}
              className={`${style.ship} ${style.ship__hurt}`}
              key={x * this.size + y}>
              X
            </button>
          );
          return { cells: newCells };
        });
        this.grid[x][y] = -1;
        return true;
      }

      return true;
    }
    return false;
  }

  public checkWin() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  private renderCells() {
const shipCells = []
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        shipCells .push(    <button
              onClick={e => {
                this.attackShip(x, y);
              }}
              className={`${style.ship} `}
              key={x * this.size + y}>
              {this.grid[x][y] !== null
                ? this.grid[x][y].isSunk()
                  ? 'X'
                  : `${x} / ${y}`
                : `${x} / ${y}`}
            </button>)

      }
    }
    this.setState({cells:shipCells})


    return;
  }

  componentDidMount() {
    console.log(this.ships);
    this.placeShips();
    this.renderCells();
  }

  public render() {
    return (
      <div className={style.wrapper}>
        <div className={style.position__wrapper}>{this.state.cells}</div>
      </div>
    );
  }
}
