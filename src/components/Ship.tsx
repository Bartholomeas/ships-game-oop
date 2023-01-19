import React, { Component } from 'react';

export default class Ship extends Component {
  private readonly size;
  private health;
  private readonly positions;

  constructor(size: number, positions: Array<[number, number]>, props?: any) {
    super(props);
    this.size = size;
    this.health = size;
    this.positions = positions;
  }

  public hit(): void {
    this.health--;
  }

  public isSunk(): boolean {
    return this.health === 0;
  }
}
