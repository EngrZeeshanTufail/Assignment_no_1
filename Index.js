"use strict";
//Eexercise 1:  Write a program that calculates the area of a rectangle.
var length = 10;
var width = 20;
var area = length * width;
console.log("Area of Rectangle Sqft =", area);
//-----------------------------------------------------------------------------------
//Exercise 2: Write a program that takes input and calculates the volume of a cube.
//------------------------------------------------------------------------------------
var sideLength = 5;
var cubeSurfaceArea = 6 * sideLength * sideLength;
console.log("Volume of a Cube (cft) =", cubeSurfaceArea);
//------------------------------------------------------------------------------------------
//Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
//------------------------------------------------------------------------------------------
var a = 0;
if (a > 0) {
    console.log("Given Number is Positive :", a);
}
if (a < 0) {
    console.log("Given Number is Negative :", a);
}
if (a == 0) {
    console.log("Given Number is Zero", a);
}
else
    console.log("");
//--------------------------------------------------------------------------
//Exercise 4:   Write a program that checks if a given number is even or odd.
//-----------------------------------------------------------------------------
var number = 10;
if (number % 2 == 0) {
    console.log("The Given Number is Even");
}
else
    console.log("The Given Number is Odd");
c
//Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

var age = 35;
if (age > 0 && age < 18) {
    console.log("You are not eligible for Vote");
}
else
    console.log("You are Eligible for Vote");
//-------------------------------------------------------------------------------------------------------------------------
//Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
//-------------------------------------------------------------------------------------------------------------------------
var Expression = ((10 + 5) * 3 - 2 / (4 % 3) - 7);
console.log(Expression);
