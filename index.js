function distanceFromHqInBlocks(distance1) {
    if (distance1 > 42) {
      return distance1 - 42;
    } else {
      return 42 - distance1;
    }
  }
  
  function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const startFeet = distanceFromHqInFeet(start);
    const destinationFeet = distanceFromHqInFeet(destination);
    if (startFeet > destinationFeet) {
      return startFeet - destinationFeet;
    } else {
      return destinationFeet - startFeet;
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else {
      return 25;
    }
  }