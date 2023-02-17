import { Component } from 'react';

export default class Ship extends Component {
  public readonly size;
  public health;
  public positions: [number, number][];

  constructor(size: number, positions: [number, number][]) {
    super(size, positions);
    this.size = size;
    this.health = size;
    this.positions = positions;
  }

  public hit() {
    if (this.isSunk()) {
      return;
    } else {
      return this.health--;
    }
  }
  public getPositions() {
    console.log(this.positions);
    if (this.isSunk()) {
      return this.positions;
    }
  }

  public isSunk(): boolean {
    return this.health === 0;
  }

  public checkHealth() {
    console.log(this.health);
    return this.health;
  }
}
