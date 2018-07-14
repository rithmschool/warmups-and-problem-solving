Write a function anagramPalindrome which accepts a word, and returns true or false if there exists some anagram of that word that is a palindrome.

A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Time complexity required: O(n) [where n is length of string]

```js
anagramPalindrome("carrace"); // true (racecar)

anagramPalindrome("bba"); // true (bab)

anagramPalindrome("e"); // true (e)

anagramPalindrome("zzzaaa"); // false

anagramPalindrome("cattaco"); // true (tacocat)

anagramPalindrome("jjqqqjjx"); // false
```
