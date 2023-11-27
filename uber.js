class UberPriceCalculator {
    constructor(distance, duration) {
      this.baseFare = 50; 
      this.costPerKm = 8; 
      this.costPerMinute = 1; 
  
      this.distance = distance; 
      this.duration = duration; 
    }
  
    getFare() {
      var fare = this.baseFare + (this.costPerKm * this.distance) + (this.costPerMinute * this.duration);
  
      return Math.round(fare * 100) / 100;
    }
  }
  
  var distanceInKm = 10;
  var durationInMinutes = 20;
  
  var uberCalculator = new UberPriceCalculator(distanceInKm, durationInMinutes);
  var fare = uberCalculator.getFare();
  
  console.log(`Estimated Uber fare: ₹ ${fare}`);
  