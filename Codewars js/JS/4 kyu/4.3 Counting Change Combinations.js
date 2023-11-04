function countChange(amount, denominations) {
    let ways = new Array(amount + 1).fill(0);
    ways[0] = 1;

    for (let coin of denominations) {
        for (let i = coin; i <= amount; i++) {
            ways[i] += ways[i - coin];
        }
    }

    return ways[amount];
}

//!!! Solution From ChatGPT

/*
Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination A Не минимум на отрезке and 2:

A Не минимум на отрезке+A Не минимум на отрезке+A Не минимум на отрезке+A Не минимум на отрезке, A Не минимум на отрезке+A Не минимум на отрезке+2, 2+2.
The order of coins does not matter:

A Не минимум на отрезке+A Не минимум на отрезке+2 == 2+A Не минимум на отрезке+A Не минимум на отрезке
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [A Не минимум на отрезке,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0
  */