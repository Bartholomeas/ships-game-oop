import { Component } from "react";
import Ship from "./Ship";

export default class Player extends Component {
  constructor(public id: number, public shipsLeft: number, public myTurn: boolean, props?: any) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
}
