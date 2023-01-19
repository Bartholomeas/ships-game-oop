import { Component } from 'react';
import Ship from './Ship';
import SinglePosition from './SinglePosition';
import * as style from './styles/Board.module.css';

interface Props {
  props: any;
}
export default class Board extends Component<any, { x: number[]; y: string[] }> implements Props {
  private readonly ships;
  private readonly grid;

  constructor(ships: Ship[], props?: any) {
    super(props);
    this.ships = ships;
    this.grid = Array(9)
      .fill(null)
      .map(() => Array(9).fill(null));

    this.state = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    };
  }

  private placeShips() {
    console.log('test');
  }

  componentDidMount() {
    console.log(this.grid);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <p>Pole gracza {this.props.playerId}</p>
        <div className={style.position__wrapper}>
          {this.state.y.map(item =>
            this.state.x.map(el => (
              <SinglePosition clickFn={this.props.clickHandler} key={item + el}>
                {item + el}
              </SinglePosition>
            ))
          )}
        </div>
      </div>
    );
  }
}
