import { Component } from "react";
import Ship from "./Ship";

interface StateInterface {
  ships: Record<string, number>;
  thisPlayerTurn: boolean;
}
export default class Player extends Component<{}, StateInterface> {
  constructor(public id: number, public shipsLeft: number, public myTurn: boolean, props?: any) {
    super(props);
    this.state = {
      ships: {
        onePoleShip: 4,
        twoPoleShip: 3,
        threePoleShip: 2,
        fourPoleShip: 1,
      },
      thisPlayerTurn: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  clickHandler() {
    console.log("Player:" + this.id);
  }
}
