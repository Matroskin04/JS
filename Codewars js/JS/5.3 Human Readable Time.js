function humanReadable (seconds) {
  const HH = Math.floor(seconds / 3600).toString();
  const MM = Math.floor( (seconds - HH*3600) / 60).toString();
  const SS = Math.floor(seconds - ( HH*3600 + MM*60) ).toString();
  return [HH, MM, SS].map(e => e.length === 1? '0' + e : e).join(':');
}


/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/