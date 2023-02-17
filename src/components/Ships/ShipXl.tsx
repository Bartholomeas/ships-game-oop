import Ship from './Ship';

export default class ShipXl extends Ship {
  constructor(positions: [number, number][]) {
    super(5, positions);
  }

  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('XL Ship is sunk!');
      console.log('XL Ship is sunk!');
    }
    return isSunk;
  }
}
