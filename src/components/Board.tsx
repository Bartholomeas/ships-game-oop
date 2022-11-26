import { Component } from "react";
import SinglePosition from "./SinglePosition";
import * as style from "./styles/Board.module.css";

interface Props {
  props: any;
}

export default class Board
  extends Component<{}, { tekst: string; x: number[]; y: string[] }>
  implements Props
{
  constructor(props: any) {
    super(props);
    this.state = {
      tekst: "ebebeb",
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      y: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    };
  }

  newState() {
    console.log(this.props);
    // this.setState((state, props) => {
    //   tekst: "new state";
    // });
  }

  // componentDidMount() {
  //   console.log("dupa pawiana");
  // }

  // componentWillUnmount() {
  //   console.log("unmount");
  // }

  render() {
    return (
      <div className={style.board__wrapper}>
        {this.state.x.map(item =>
          this.state.y.map(el => <SinglePosition>{item + el}</SinglePosition>)
        )}
      </div>
    );
  }
}
