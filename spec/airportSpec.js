describe('airport', function() {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('runway', function() {
    it('has no planes by default', function() {
      expect(airport.runway).toEqual([]);
    });
  });

  describe('land', function() {
    it('can land at an airport', function() {
      expect(airport.land).not.toBeUndefined();
    });

    it('a plane can land', function() {
      airport.land(plane)
      expect(airport.runway).toEqual([plane]);
    });

    it('throws error if airport has reached capacity', function() {
      airport.capacity = 1;
      airport.land(plane);
      expect( function() { airport.land(plane); } ).toThrow(new Error('Airport Full'));
    });
  });

  describe('takeoff', function() {
    it('can takeoff from the airport', function() {
      expect(airport.takeoff).not.toBeUndefined();
    });

    it('throws error if no planes to takeoff', function() {
      expect(airport.runway).toEqual([])
      expect( function() { airport.takeoff(); } ).toThrow(new Error('Airport Empty'));
    });

    it('a plane can takeoff', function() {
      airport.land(plane);
      airport.takeoff();
      expect(airport.runway).not.toContain(plane);
    });
  });

  describe('capacity', function() {
    it('has a capcity', function() {
      expect(airport.capacity).not.toBeUndefined();
    });

    it('has a default capacity of 20', function() {
      expect(airport.capacity).toEqual(20);
    });

    it('has a variable capacity', function() {
      airport.capacity = 30;
      expect(airport.capacity).toEqual(30);
    });
  });

  describe('weather', function() {
    it('stops takeoff when weather is stormy', function() {
      airport.land(plane);
      expect(airport.stormy()).toEqual(true);
      expect( function() { airport.takeoff(); } ).toThrow(new Error('Weather is Stormy'));
    });
  });
});