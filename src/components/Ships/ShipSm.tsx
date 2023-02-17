import Ship from './Ship';

export default class ShipSm extends Ship {
  constructor(positions: [number, number][]) {
    super(2, positions);
  }
  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Mały statek jest zatopiony!');
      console.log('Mały statek jest zatopiony!');
    }
    return isSunk;
  }
}
