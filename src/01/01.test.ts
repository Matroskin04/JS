import {getNumber} from './01'

const str1 = '123gjh2gj323jk';
const str2 = ' jd df234 34jkf 3 k'

test('resultArr should be correct', () => {
    
    //action
    const result1 = getNumber(str1);
    const result2 = getNumber(str2);

    //expected result
    expect(result1).toBe([123, 2, 3253]);
    expect(result2).toBe([234, 34, 3]);
})
