# palindrome
interview question:

* How can you determine if a string is a palindrome?
** may not use .reverse()

### Solution #1
This is accomplished using a for loop to go through each character in the string and check if the character at first index (0) and character at last index [(str.length) -1) -i]

example: 'racecar'

Problem: this only works for a single word (no spaces)

### Solution #2
using regEx pattern: [\W] we can look for all "*non*-word characters".  This misses underscore, so we also need to include '_' then we make the search parameters equal global with the lowercase 'g' at the end. The final regEx is as follows: /[\W_]/g. alternate pattern: /[^A-Za-z]/g which is for all alphabetic characters.

Then, to normailze the string I handle uppercase characters by using .toLowerCase() and then string it with the .replace() method.
.replace() takes two arguments.  The first is what to replace and the second is what to replace it with. The outcome is: Race Car! becomes racecar.  'A man123_, A plan-, A canal, Panama!' becomes amanaplanacanalpanama

Finally I search through the half of the length of the string and compare each character to its mirror opposite.  This is done in a for loop where i = 0 to start, and it ends at half the length of the string (str.length / 2).  

### Solution #3
same as 2, but shorter, and possibly less readable.
