// Code your solution in this file!
function distanceFromHqInBlocks(n){
    if(n >= 43){
        return (n - 43) + 1; 
    } else {
        return (43 - n) - 1;
    }
}

function distanceFromHqInFeet(n){
    if(n >= 43){
        return (n - 43 + 1) * 264;
    } else {
        return (43 - n - 1) * 264;
    }
}

function distanceTravelledInFeet(a, b){
    if(a < b) {
        return (b - a) * 264;
    } else {
        return (a- b) * 264;
    }
}

function calculatesFarePrice(a, b){
    let distance = 0;
    if (a < b){
        distance = (b-a)*264;
    } else {
        distance = (a-b)*264;
    }
    if(distance < 400) {
        return 0;
    } else if (distance >= 400 && distance < 2000){
        return 2.56;
    } else if (distance >= 2000 && distance < 2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
}