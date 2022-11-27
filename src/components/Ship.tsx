import React, { Component } from "react";

interface Props {
  direction: "x" | "y";
}

export default class Ship extends Component {
  constructor(public width: number, public direction: Props, props: any) {
    super(props);
  }
}

// 4jednoamsztowce 3dwumasztowce 2trzymasztowce 1czteromasztowiec
