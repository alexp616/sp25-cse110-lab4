1\. `3` will be printed because `i` is declared as a `var` in the loop, which means `i` is available anywhere in the `discountPrices` function.

2\. `150` will be printed because in the last iteration of the loop, `discountedPrice` is `150` (300 * (1 - 0.5)). It is also declared as a `var`, meaning it can be accessed outside of the loop it was declared in.

3\. `150` will be printed because in the last iteration of the loop, `finalPrice` is `150`. It is also declared as a `var`, meaning it can be accessed outside of the loop it was declared in.

4\. The function returns the array `[50, 100, 150]`. The function takes in an array of prices and a discount, and returns an array of the prices after the discounts. The numbers are all nice so the rounding makes the numbers the same - [100, 200, 300] * 0.5 = [50, 10, 150].

5\. Line 12 will error because `i` is declared with `let` in line 6, meaning it cannot be read outside of the code block it was declared in.

6\. Line 13 will error because `discountedPrice` is declared with `let` in line 7, meaning it cannot be read outside of the code block it was declared in.

7\. `150` will be printed because the last iteration of the loop assigns `finalPrice` to 150. It is declared in the top scope of the `discountPrices` function, meaning it can be accessed in line 14.

8\. The function returns the array `[50, 100, 150]`. It acts the same as the function from question 4.

9\. Line 11 will error because `i` is declared with `let` in line 6, meaning it cannot be read outside of the code block it was declared in.

10\. `3` is printed because `length` is declared at the function's top-level scope, meaning it can be accessed in the print statement.

11\. The function returns the array `[50, 100, 150]`. It acts the same as the function from question 4, besides the rounding which doesn't affect the given inputs.

12\. 
    A. `student.name`

    B. `student['Grad Year']`

    C. `student.greeting()`

    D. `student['Favorite Teacher'].name`

    E. student.courseLoad[0]

13\. A. `'32'`, since the `2` is converted to a string.

    B. `1`, since the `'3'` is converted to a number.

    C. `3`, since the `null` is converted to a number (0).

    D. `'3null'`, since the `null` is converted to a string.

    E. `4`, since the `true` is converted to a number (1).

    F. `0`, since both `false` and `null` are converted to numbers (0).

    G. `'3undefined'`, since `undefined` is converted to a string.

    H. `NaN`, since undefined is converted to a number (NaN), and the string is also converted to a number, and any arithmetic operation with `NaN` results in `NaN`.

14\. A. `true`, since `'2'` is converted to a number.

    B. `false`, since strings are compared lexicographically.

    C. `true`, since `'2'` is converted to a number.

    D. `false`, since `2` and `'2'` are not the same type.

    E. `false`, since `true` is converted to a number (1), and 1 != 2.

    F. `true`, since both operands are the same type and the same value.

15\. `==` does type coercion before checking if the two operands are equal, `===` does not and only returns true if the two values are the same and the two types are the same.

17\. The result will be `[2, 4, 6]`. `doSomething` is a function that returns 2 * the parameter passed in. `modifyArray` takes in an array and a function, and returns a new array where each element is the output of the function application on the corresponding element of the array. So, `modifyArray([1, 2, 3], doSomething)` returns a new array where each element is double the value of the corresponding element of `[1, 2, 3]`.

19\. 
```
1
4
3
2
```