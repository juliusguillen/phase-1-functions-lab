function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - 42);
};

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264
};
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
  }
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if(feet <= 400){
        return 0
    }
    else if (feet > 400 && feet <= 2000){
        return ((feet - 400) * .02)
    }
    else if (feet > 2000 && feet < 2500 ){
        return 25 
    }
    return "cannot travel that far"
  }
