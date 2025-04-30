1. `3` will be printed because `i` is declared as a `var` in the loop, which means `i` is available anywhere in the `discountPrices` function.

2. `150` will be printed because in the last iteration of the loop, `discountedPrice` is `150` (300 * (1 - 0.5)). It is also declared as a `var`, meaning it can be accessed outside of the loop it was declared in.

3. `150` will be printed because in the last iteration of the loop, `finalPrice` is `150`. It is also declared as a `var`, meaning it can be accessed outside of the loop it was declared in.

4. The function returns the array `[50, 100, 150]`. The function takes in an array of prices and a discount, and returns an array of the prices after the discounts. The numbers are all nice so the rounding makes the numbers the same - [100, 200, 300] * 0.5 = [50, 10, 150].

5. Line 12 will error because `i` is declared with `let` in line 6, meaning it cannot be read outside of the code block it was declared in.

6. Line 13 will error because `discountedPrice` is declared with `let` in line 7, meaning it cannot be read outside of the code block it was declared in.

7. `150` will be printed because the last iteration of the loop assigns `finalPrice` to 150. It is declared in the top scope of the `discountPrices` function, meaning it can be accessed in line 14.

8. The function returns the array `[50, 100, 150]`. It acts the same as the function from question 4.

9. Line 11 will error because `i` is declared with `let` in line 6, meaning it cannot be read outside of the code block it was declared in.

10. `3` is printed because `length` is declared at the function's top-level scope, meaning it can be accessed in the print statement.

11. The function returns the array `[50, 100, 150]`. It acts the same as the function from question 4, besides the rounding which doesn't affect the given inputs.

12. 
    A. `student.name`
    B. `student['Grad Year']`