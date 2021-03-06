'use strict';

// O(n)

// solution 1 (weak, only checks lowecase single word)
function isPalindrome (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[(str.length - 1) - i]) {
      return false;
    }
  }
  return true;
}
isPalindrome('racecar'); //<-true (pass)
isPalindrome('Racecar'); //<-false (fail)
isPalindrome('bob i bob'); //<-true (pass)
isPalindrome('bob, i, bob'); //<-false (fail)




// solution 2 (more readable)
function palindrome (str) {
  let re = /[\W_]/g; //[\W] this looks for non-word characters. However it misses underscore, so we need to include '_'.
  str = str.toLowerCase().replace(re, ''); // This normalizes the string to all lowercase and replaces any non-word characters plus underscore to ''.
  let len = str.length; //not really needed, but it makes the code a little cleaner.  I could just use .length wherever I need that data, instead of 'len'
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len -1 -i]) {
      return false;
    }
  }
  return true;
}
palindrome('racecar'); //<- true (pass)
palindrome('Racecar'); //<- true (pass)
palindrome('Bob, Ma. I am Bob!'); //<- true (pass)
palindrome('A man - a plan, a canal, Panama!!'); //<- true (pass)
palindrome('Taco_Cat!'); //<- true (pass)
palindrome('Bob Marley'); //<- false (pass)
palindrome('ABCDEFG'); //<- false (pass)

// solution 3 (shorter)
function aPalindrome (s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  for (let i = 0; i < s.length/2; i++) {
    if (s[i] !== s[s.length -1 -i]) {
      return false;
    }
  }
  return true;
}
aPalindrome('racecar'); //<- true (pass)
aPalindrome('Racecar'); //<- true (pass)
aPalindrome('Bob, Ma. I am Bob!'); //<- true (pass)
aPalindrome('A man - a plan, a canal, Panama!!'); //<- true (pass)
aPalindrome('Taco_Cat!'); //<- true (pass)
aPalindrome('Bob Marley'); //<- false (pass)
aPalindrome('ABCDEFG'); //<- false (pass
