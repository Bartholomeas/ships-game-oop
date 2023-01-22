import React, { Component } from 'react';

export default class Ship extends Component {
  private readonly size;
  public health;
  private readonly positions;

  constructor(size: number, positions: Array<[number, number]>) {
    super(size, positions);
    this.size = size;
    this.health = size;
    this.positions = positions;
  }

  public hit() {
    if (this.isSunk()) {
      console.log(this.health);
      return;
    } else {
      console.log(this.health);
      this.health--;
      return;
    }
  }
  public returnPositions() {
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
