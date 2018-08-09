//This function performs addition
function addition(number1, number2) {
  return number1 + number2
}

//This function performs subtractionion
function subtraction(number1, number2) {
  return number1 - number2
}

//This function performs multiplication
function multiplication(number1, number2) {
  return number1 * number2
}

//This function performs division
function division(number1, number2) {
  return number1 / number2
}

//This function uses "Power of" operations
function powerOf(number1, exponent) {
  return Math.pow(number1, exponent);
}

//This function performs square root operations
function squareRoot(number1) {
  return Math.sqrt(number1);
}

//This function is the BMI helper function for imperial.
function bmiImp(weight, height) {
  return 703 * (weight / (Math.pow(height, 2)))
}

//This function is the BMI helper function for imperial.
function bmiMet(weight, height) {
  return weight / (Math.pow(height, 2));
}

//This function is the Trip helper function for time.
function tripTime(distance, speed) {
  return distance / speed;
}

//This function is the Trip helper function for cost.
function tripCost(distance, efficiency, cost_per_gallon, speed) {

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


module.exports = {

  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
  powerOf: powerOf,
  squareRoot: squareRoot,
  bmiImp: bmiImp,
  bmiMet: bmiMet,
  tripTime: tripTime,
  tripCost: tripCost

};
