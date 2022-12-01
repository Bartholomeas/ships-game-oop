import React, { Component } from "react";

export default class Ship extends Component {
  constructor(public size: number, public direction: "x" | "y", props?: any) {
    super(props);
  }
}

// 4jednoamsztowce 3dwumasztowce 2trzymasztowce 1czteromasztowiec
