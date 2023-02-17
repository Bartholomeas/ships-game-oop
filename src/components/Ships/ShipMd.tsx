import Ship from './Ship';

export default class ShipMd extends Ship {
  constructor(positions: [number, number][]) {
    super(3, positions);
  }

  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Średni statek jest zatopiony!');
      console.log('Średni statek jest zatopiony!');
    }
    return isSunk;
  }
}
