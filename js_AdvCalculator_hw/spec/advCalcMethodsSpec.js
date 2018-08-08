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

  // Subtraction
  it("should subtract 2 numbers", function() {
    expect(calculator.Subtract(3, 2)).toEqual(1);
    expect(calculator.Subtract(6, 3)).toEqual(3);
    expect(calculator.Subtract(1, 3)).toEqual(-2);
  })

  it("should subtract 2 negative numbers", function() {
    expect(calculator.Subtract(-1, 2)).toEqual(-3);
    expect(calculator.Subtract(-2, -9)).toEqual(7);
    expect(calculator.Subtract(-1, 3)).toEqual(-4);
  })

  it("should subtract 2 decimal numbers", function() {
    expect(calculator.Subtract(1.5, 0.5)).toEqual(1);
    expect(calculator.Subtract(1, 0.4)).toEqual(0.6);
    expect(calculator.Subtract(6.25, 3.25)).toEqual(3);
  })
  // Multiply
  it("should multiply 2 numbers", function() {
    expect(calculator.Multiply(3, 2)).toEqual(6);
    expect(calculator.Multiply(6, 3)).toEqual(18);
    expect(calculator.Multiply(1, 3)).toEqual(3);
  })

  it("should multiply 2 negative numbers", function() {
    expect(calculator.Multiply(-1, 2)).toEqual(-2);
    expect(calculator.Multiply(-2, -9)).toEqual(18);
    expect(calculator.Multiply(-1, 3)).toEqual(-3);
  })

  it("should multiply 2 decimal numbers", function() {
    expect(calculator.Multiply(1.5, 0.5)).toEqual(0.75);
    expect(calculator.Multiply(1, 0.4)).toEqual(0.4);
    expect(calculator.Multiply(6.25, 3.25)).toEqual(20.3125);
  })
})
