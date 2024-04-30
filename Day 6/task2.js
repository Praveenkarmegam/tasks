class UberPrice {
    constructor(costPerMinute, costPerMile) {
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distance, time) {
      let distanceCost = distance * this.costPerMile;
      let timeCost = time * this.costPerMinute;
      let totalCost =  distanceCost + timeCost;
      return totalCost;
    }
  }
  
  let calculator = new UberPrice(0.5, 1.5); // Cost per minute: 0.5, Cost per mile: 1.5
  
//    distanceTraveled = 10; in miles
//    timeTaken = 15;  in minutes
  
  let totalPrice = calculator.calculatePrice(10, 15);
  console.log(`The total price for the ride is ${totalPrice}`);
  