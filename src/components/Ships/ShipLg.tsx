import Ship from './Ship';

export default class ShipLg extends Ship {
  constructor(positions: [number, number][]) {
    super(4, positions);
  }
  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Large Ship is sunk!');
      console.log('Large Ship is sunk!');
    }
    return isSunk;
  }
}
