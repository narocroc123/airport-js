class Airport {
  constructor() {
    this.runway = [];
    this.capacity = 20;
  }

  land(plane) {
    if (this.runway.length === this.capacity) {
      throw new Error('Airport Full');
    }
    this.runway.push(plane);
  }

  takeoff() {
    if (this.runway.length === 0) {
      throw new Error('Airport Empty');
    }
    this.runway.pop();
  }

  isStormy() {
    return true;
  };
}

class Plane {

};