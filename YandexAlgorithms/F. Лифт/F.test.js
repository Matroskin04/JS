const calcMinTime = require('./elevator')
describe("F. Elevator", () => {
   it(`1`, () => {
      expect(calcMinTime(2, [3, 0, 1])).toBe(8);
      expect(calcMinTime(2, [4, 3, 0, 1])).toBe(16);
      expect(calcMinTime(3, [0, 3, 0, 0, 0, 7, 0])).toBe(40);
      expect(calcMinTime(4, [0, 0, 1])).toBe(6);
      expect(calcMinTime(1, [3, 0, 1])).toBe(12);
      expect(calcMinTime(4, [0, 5, 1, 8, 0, 0, 0])).toBe(26);
   })
   it(`2`, () => {
      expect(calcMinTime(1, [1, 1, 2, 1, 1])).toBe(36);
      expect(calcMinTime(1, [0, 0, 0])).toBe(0);
      expect(calcMinTime(3, `0
2
2
0
0
0
2
2
0
2
0
0
1
0
0
2
0
0
2
2
0
0
2
1
1
0
0
0
1
0
0
0
0
0
1
1
2
0
0
0
1
0
0
0
0
0
0
0
1
0
0
0
1
1
0
2
0
0
0
2
0
0
0
2
0
1
0
1
0
2
2
1
2
0
0
0
0
2
0
0
0
2
0
2
0
2
0
2
0
1
0
0
2
0
2
1
2
0
1
0`.split('\n'))).toBe(2286);

   })

   it('3', () => {
      expect(calcMinTime(3, [0, 2, 2, 0, 0,
         0, 2, 2, 0, 1,
         0, 0, 2, 0, 2,
         1, 2, 0, 1, 0])).toBe(130);

      expect(calcMinTime(3, [0, 2, 1, 1, 0])).toBe(12);
   })
});