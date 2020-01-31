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
    if(this.isStormy()) {
      throw new Error('Cannot Takeoff In This Weather')
    } else if (this.runway.length === 0) {
      throw new Error('Airport Empty');
    }
    this.runway.pop();
  }

  isStormy() {
    return false;
  };
}

class Plane {

};