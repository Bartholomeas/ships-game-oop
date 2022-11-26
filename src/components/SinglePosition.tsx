import { Component } from "react";
import * as style from "./styles/SinglePosition.module.css";

export default class SinglePosition extends Component {
  constructor(props: any) {
    super(props);
  }

  // componentDidMount(): void {
  //   console.log(this.props);
  // }

  render() {
    return <button className={style.wrapper}>{this.props.children}</button>;
  }
}
