import Ship from './Ship';

export default class ShipSm extends Ship {
  constructor(positions: [number, number][]) {
    super(2, positions);
  }
  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Small Ship is sunk!');
      console.log('Small Ship is sunk!');
    }
    return isSunk;
  }
}
