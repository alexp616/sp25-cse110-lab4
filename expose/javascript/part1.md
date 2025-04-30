1. `values added: 20`

2. `final result: 20`

3. You shouldn't use var because it can lead to unintuitive behavior like above: `result` shouldn't be able to be accessed outside of where it's declared, but it is.

4. `values added: 20`

5. The code errors, because `let result` declares `result` inside of the `if (add) {}`, which means it can't be accessed outside of the block in line 13.

6. The code errors, because in line 7, a `const` variable is reassigned.

7. Assuming the code gets through line 7 (line 7 is deleted or changed), the print statement errors because `result` can't be accessed outside of the block it is declared in.