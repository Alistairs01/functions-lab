// Code your solution in this file!


const hqLocation = 42;
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup-hqLocation);
}
// create funtion for distance in feet
// automatically calls the distance in blocks and multiplies it to distance in feet
function distanceFromHqInFeet(pickup) {
       return Math.abs(distanceFromHqInBlocks(pickup) * 264);
}
function  distanceTravelledInFeet(start, destination) {
    return Math.abs((start- destination) * 264);

}
function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }else if(distanceTravelledInFeet(start, destination) <= 2000) {
        return (((Math.abs(destination - start) * 264) - 400 ) * 0.02)
    }else if(distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    }else if(distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}
