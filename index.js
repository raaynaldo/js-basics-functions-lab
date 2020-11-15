// Code your solution in this file!
function distanceFromHqInBlocks(range) {
  return Math.abs(range - 42);
}

function distanceFromHqInFeet(range) {
  return distanceFromHqInBlocks(range) * 264;
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * 264;
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    return 0;
  } else if (dist < 2000) {
    return (dist - 400) * 0.02;
  } else if (dist <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
