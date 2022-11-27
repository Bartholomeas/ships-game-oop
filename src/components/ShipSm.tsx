import React, { Component } from "react";
import Ship from "./Ship";

export default class ShipSm extends Ship {
  constructor(width: any, direction: any) {
    super(width, direction);
  }

  render() {
    return <div>Statek sm</div>;
  }
}
