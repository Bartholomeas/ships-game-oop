import { Component } from "react";
import Ship from "./Ship";

export default class Player extends Component {
  constructor(public id: number, public shipsLeft: number, public myTurn: boolean, props?: any) {
    super(props);
    this.state = { onePoleShip: 4, twoPoleShip: 3, threePoleShip: 2, fourPoleShip: 1 };
  }

  componentDidMount() {
    console.log(this.props);
  }

  clickHandler() {
    console.log("Player:" + this.id);
  }
}
