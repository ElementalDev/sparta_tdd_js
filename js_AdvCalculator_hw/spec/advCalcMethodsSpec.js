describe("This is testing my advanced calculator", function()
 {
  var calculator = require("../lib/calcHelperFunctions.js");

// Addition
  it("should add 2 numbers together", function() {
    expect(calculator.Addition(3, 2)).toEqual(5);
    expect(calculator.Addition(6, 3)).toEqual(9);
    expect(calculator.Addition(1, 3)).toEqual(4);
  })

  it("should add 2 negative numbers together", function() {
    expect(calculator.Addition(-1, 2)).toEqual(1);
    expect(calculator.Addition(-2, -9)).toEqual(-11);
    expect(calculator.Addition(-1, 3)).toEqual(2);
  })

  it("should add 2 decimal numbers together", function() {
    expect(calculator.Addition(0.5, 2)).toEqual(2.5);
    expect(calculator.Addition(0.6, 0.4)).toEqual(1);
    expect(calculator.Addition(1.44, 2.4)).toEqual(3.84);
  })

  
