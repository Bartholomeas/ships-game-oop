import Ship from './Ship';

export default class ShipLg extends Ship {
  constructor(positions: [number, number][]) {
    super(4, positions);
  }
  public isSunk() {
    const isSunk = super.isSunk();
    if (isSunk) {
      alert('Duży statek jest zatopiony!');
      console.log('Duży statek jest zatopiony!');
    }
    return isSunk;
  }
}
