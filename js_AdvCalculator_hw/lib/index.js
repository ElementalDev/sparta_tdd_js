//This loops through the program until the user says they don't want to use it again. Equivalent to Main method
do {
    alert("Please choose the type of calculator you would like to use.");
    calcMenu(); //This calls the menu function
    var userChoice = useAgain(); //This asks the user if they would like to use the calculator again.
} while(userChoice == true)

//This is the menu of the calculator. The parameter determines whether the user wants to play or not?
function calcMenu() {
  var option = prompt("(B)Basic | (A)Advanced | (I)BMI | (T)Trip")

  option = option[0]; //Takes the first letter of whatever the user inputs
  option = option.toLowerCase(); //Turns the user input into lower case letters

  //Takes the users input and directs the code to the relevant function
  switch (option) {
    case "b":
      basicCalc()
      break;
    case "a":
      advCalc();
      break;
    case "i":
      bmiCalc();
      break;
    case "t":
      tripCalc();
      break;
    default: alert("This is not an option. Please try again.");
  }
}

//This function is the basic calculator
function basicCalc() {

  var operation = prompt("What operation would you like to perform? (+-*/)"); //Asks the user which operation they want to use
  var num1 = 0;
  var num2 = 0;
  var result = 0;

  //Asks user for input on which numbers they would like to evaluate
  if (operation == "+")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = addition(num1, num2);
  }
  else if (operation == "-")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = subtraction(num1, num2);
  }
  else if (operation == "*")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = multiplication(num1, num2);
  }
  else if (operation == "/")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = division(num1, num2);
  }
  else {
    alert("This is not an operation, please try again.");
  }
  alert(result);
}

//This function is the advanced calculator
function advCalc() {
  var operation = prompt("What operation would you like to perform? (pow or sqrt)");
  var num1 = 0;
  var num2 = 0;
  var result = 0;

  operation = operation[0];
  operation = operation.toLowerCase();

  if (operation == "p")
  {
    num = parseFloat(prompt("Number: "));
    pow = parseFloat(prompt("To the power of: "));
    result = PowerOf(num, pow); //Takes the number and multiplys it by itself <power> amount of times
  }
  else if (operation == "s")
  {
    num = parseFloat(prompt("Number: "));
    result = SquareRoot(num); //Square roots the number
  }
  else {
    alert("This is not an operation, please refresh and try again.");
  }
  alert(result);
}

//This function is the BMI calculator
function bmiCalc() {
  var measurementType = prompt("Metric or Imperial? (imp/met)"); //Imperial = inches and lbs | Metric = meters and kgs
  var weight = parseFloat(prompt("What is your weight (imp: lbs | met: kg)?"));
  var height = parseFloat(prompt("What is your height? (imp: ins | met: m)"));
  var result = 0;
  var category = ["Underweight", "Normal", "Overweight", "Obese"]; //Array of BMI categories

  measurementType = measurementType[0];
  measurementType = measurementType.toLowerCase();

  alert("Please note that BMI is a guideline and doesn't take muscle mass into account when working out category");

  switch (measurementType) {
    case "i":
      result = bmiImp(weight, height); //Calls function tha calculates BMI in Imperial
      break;
    case "m":
      result = bmiMet(weight, height); //Calls function tha calculates BMI in Metric
      break;
  }

  alert("Your BMI is: " + result);

  //Selects category based on BMI result. Information based on average guidelines
  if (result >= 16 && result < 18.5) {
    alert(category[0]);
  }
  else if (result >= 18.5 && result < 25) {
    alert(category[1]);
  }
  else if (result >= 25  && result < 30) {
    alert(category[2]);
  }
  else if (result > 35) {
    alert(category[3]);
  }
}

//This function is the trip calculator
function tripCalc() {
  //Asks for all required input to be able to perform the calculation
  var distance = parseFloat(prompt("How far have you got to go? (km)"));
  var efficiency = parseFloat(prompt("How efficient is your vehicle? (mpg)"));
  var costpg = parseFloat(prompt("What is your cost per gallon? (pence)"));
  var milesph = parseFloat(prompt("What will your average speed be? (mph)"));
  var time = tripTime(distance, milesph);
  var cost = tripCost(distance, efficiency, costpg, milesph);

  alert("Your trip will take " + time + " hours and cost £" + cost);
}

//This function asks the user if they would like to use the calculator again
function useAgain() {
  var choice = prompt("Would you like to use BAIT Calculator again? (y/n)");

  choice = choice[0];
  choice = choice.toLowerCase();

  if (choice == "y"){
    return true;
  }
  else if (choice == "n") {
    return false;
  }
  else if (choice == null) {
    return false;
  }
  else {
    alert("This is not an option. Please refresh and try again")
  }
}
