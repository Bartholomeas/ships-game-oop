import Ship from './Ship';

export default class ShipMd extends Ship {
  constructor(positions: [number, number][]) {
    super(3, positions);
  }

  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Medium Ship is sunk!');
      console.log('Medium Ship is sunk!');
    }
    return isSunk;
  }
}
