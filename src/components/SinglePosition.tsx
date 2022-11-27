import { Component } from "react";
import * as style from "./styles/SinglePosition.module.css";

interface Props {
  children: string;
}
interface State {}
export default class SinglePosition extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  // componentDidMount(): void {
  //   console.log(this.props);
  // }

  render() {
    return (
      <button onClick={() => console.log(this.props.children)} className={style.wrapper}>
        {this.props.children}
      </button>
    );
  }
}
