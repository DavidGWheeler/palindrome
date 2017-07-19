# palindrome
interview question:

* How can you determine if a string is a palindrome?
** may not use .reverse()

### Solution #1
This is accomplished using a for loop to go through each character in the string and check if the character at first index (0) and character at last index [(str.length) -1) -i]

example: 'racecar'

Problem: this only works for a single word (no spaces)

### Solution #2
using regEx pattern: /[\W_]/ we can look for all "non-word characters".  This misses underscore, so we also need to include '_'.  

Then, to handle uppercase characters, we use .toLowerCase() and then string it with the .replace() method.  .replace() takes two arguments.  The first is what to replace and the second is what to replace it with.  E.G.: Race Car! becomes racecar.  'A man, A plan, A canal, Panama!' becomes amanaplanacanalpanama
