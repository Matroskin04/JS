function getCount(str) {
    return str.split('').reduce( (sum, el) => /[aeiou]/.test(el) ? ++sum : sum, 0);
  }

  /*
  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/