# TypeScript Type Error in String Interpolation with Date Object

This repository demonstrates a subtle type error in TypeScript that can occur when using string interpolation with a Date object. The error arises from the way TypeScript handles type checking in string templates when dealing with methods that aren't explicitly typed in the function's parameter list. 

## Bug Description
The `greet` function takes a string and a Date object as arguments and returns a string.  The string interpolation uses the `toDateString()` method of the Date object, which is not explicitly defined in the function's parameter list.  Although this works at runtime, it can cause type errors during compilation, depending on the strictness of your TypeScript configuration.

## Solution
The solution involves adding a type assertion to the Date object within the string interpolation, confirming to TypeScript that `toDateString()` will return a string.