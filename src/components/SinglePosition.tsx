import { Component } from "react";
import * as style from "./styles/Player.module.css";

interface Props {
  [key: string]: any;
  children: string;
}
interface State {}
export default class SinglePosition extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  // componentDidMount() {
  // console.log(this.props);
  // }

  render() {
    return (
      <button onClick={this.props.clickFn} className={style.wrapper}>
        {this.props.children}
      </button>
    );
  }
}
