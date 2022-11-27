import { Component } from "react";
import SinglePosition from "./SinglePosition";
import * as style from "./styles/Board.module.css";

interface Props {
  props: any;
}
export default class Board extends Component<any, { x: number[]; y: string[] }> implements Props {
  // static contextType = AppContext;

  constructor(props: any) {
    super(props);
    this.state = {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
    };
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
