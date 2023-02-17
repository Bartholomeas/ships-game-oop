import Ship from './Ship';

export default class ShipXl extends Ship {
  constructor(positions: [number, number][]) {
    super(5, positions);
  }

  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('XL statek jest zatopiony!');
      console.log('XL statek jest zatopiony!');
    }
    return isSunk;
  }
}
