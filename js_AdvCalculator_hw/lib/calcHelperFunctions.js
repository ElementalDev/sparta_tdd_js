//This function performs addition
function Addition(number1, number2) {
  return number1 + number2
}

//This function performs subtraction
function Subtract(number1, number2) {
  return number1 - number2
}

//This function performs multiplication
function Multiply(number1, number2) {
  return number1 * number2
}

//This function performs division
function Divide(number1, number2) {
  return number1 / number2
}

//This function uses "Power of" operations
function PowerOf(number1, powerOf) {
  return Math.pow(number1, powerOf);
}

//This function performs square root operations
function SquareRoot(number1) {
  return Math.sqrt(number1);
}

//This function is the BMI helper function for imperial.
function BMIWorkingImp(weight, height) {
  return 703 * (weight / (Math.pow(height, 2)))
}

//This function is the BMI helper function for imperial.
function BMIWorkingMet(weight, height) {
  return weight / (Math.pow(height, 2));
}

//This function is the Trip helper function.
function TripCost(distance, efficiency, cost_per_gallon, speed) {

  var mpgDiff = 0.0;

  if(speed <= 60){
     //Formula for time in hours
    return ((distance / efficiency) * cost_per_gallon); //Formula for cost
  }
  else if (speed > 60) { //Every 1 mph over 60, take away 2 mpg
    mpgDiff = speed - 60; //Find the difference between the speed and 60
    for (var i = 0; i <= mpgDiff; i++) { //For every MPH over 60:
      efficiency -= 2;//Remove 2 MPG
      if (efficiency <= 0) {
        alert("This is impossible, please try again!");//If MPG is below 0, its impossible
      }
    }
    return ((distance / efficiency) * cost_per_gallon); // Formula for cost
  }
}

function TripTime(distance, speed) {
  return distance / speed;
}

module.exports = {

  Addition: Addition,
  Subtract: Subtract,
  Multiply: Multiply,
  Divide: Divide,
  PowerOf: PowerOf,
  SquareRoot: SquareRoot,
  BMIWorkingImp: BMIWorkingImp,
  BMIWorkingMet: BMIWorkingMet,
  TripTime: TripTime,
  TripCost: TripCost

};
