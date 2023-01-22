import React, { Component } from 'react';

export default class Ship extends Component {
  private readonly size;
  public health;
  private positions: [number, number][];

  constructor(size: number, positions: [number, number][]) {
    super(size, positions);
    this.size = size;
    this.health = size;
    this.positions = positions;
  }

  public hit() {
    console.log(this.health);
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
    // console.log(this.positions);
    if (this.health === 0) console.log('zatopiony');
    return this.health === 0;
  }

  public checkHealth() {
    console.log(this.health);
    return this.health;
  }
}
