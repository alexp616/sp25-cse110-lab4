1. The bug was that when the numbers were fetched from the form, they were fetched as strings.

2. I would fix this by converting the strings to `Number`s before sending them to the `calculateSum()` function.