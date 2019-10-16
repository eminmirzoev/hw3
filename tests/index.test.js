describe('getProductOrSum', function () {
    it ('should return * of first and second (2, 4)', () => {
        const first = 2;
        const second = 4;
        const expected = 8;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
     })
     it (' should return + of first and second (7, 2)', () => {
        const first = 7;
        const second = 2;
        const expected = 9;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })
    it ('should return NaN if first undefined (undefined, 2)', () => {
        const first = undefined;
        const second = 2;
        const expected = NaN;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })
    it ('should return 0 if first 0 (0, 2)', () => {
        const first = 0;
        const second = 2;
        const expected = 0;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })
    it ('should return negative meaning if first negative (-4, 2)', () => {
        const first = -4;
        const second = 2;
        const expected = -8;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })

});

describe('getQuarter', () => {
   it('should return 1st quarter (1, 1)', () => {
       const x = 1;
       const y = 1;
       const expected = '1st quarter';

       //When
       const actual = getQuarter(x, y);

       //Then
       assert.deepEqual(actual, expected);
    })
    it('should return 2nd quarter (-1, 1)', () => {
        const x = -1;
        const y = 1;
        const expected = '2nd quarter';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return 3rd quarter (-1, -1)', () => {
        const x = -1;
        const y = -1;
        const expected = '3rd quarter';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return 4th quarter (1, -1)', () => {
        const x = 1;
        const y = -1;
        const expected = '4th quarter';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return X-axis (1, 0)', () => {
        const x = 1;
        const y = 0;
        const expected = 'X-axis';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return Y-axis (0, 1)', () => {
        const x = 0;
        const y = 1;
        const expected = 'Y-axis';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return frame Origin (0, 0)', () => {
        const x = 0;
        const y = 0;
        const expected = 'frame Origin';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return empty line (undefined, undefined)', () => {
        const x = undefined;
        const y = undefined;
        const expected = ' ';

        //When
        const actual = getQuarter(x, y);

        //Then
        assert.deepEqual(actual, expected);
    })

});

describe('getOnlyPositiveSum', () => {
    it('should return first (5, -7, -3)', () => {
        const first = 5;
        const second = -7;
        const third = -3;
        const expected = 5;

        //When
        const actual = getOnlyPositiveSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return second (-1, 4, -5)', () => {
        const first = -1;
        const second = 4;
        const third = -5;
        const expected = 4;

        //When
        const actual = getOnlyPositiveSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('shoul return third (-2, -5, 10)', () => {
        const first = -2;
        const second = -5;
        const third = 10;
        const expected = 10;

        //When
        const actual = getOnlyPositiveSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return two positiv (9, -1, 3)', () => {
        const first = 9;
        const second = -1;
        const third = 3;
        const expected = 12;

        //When
        const actual = getOnlyPositiveSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return all (1, 3, 5)', () => {
        const first = 1;
        const second = 3;
        const third = 5;
        const expected = 9;

        //When
        const actual = getOnlyPositiveSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    });

});

describe('getExpressionMaxOfSum', () => {
    it('should return expression f*s*t+3 (2, 4, 6)', () => {
        const first = 2;
        const second = 4;
        const third = 6;
        const expected = 51;

        //When
        const actual = getExpressionMaxOfSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return expression f+s+t+3 (2, 4, -6)', () => {
        const first = 2;
        const second = 4;
        const third = -6;
        const expected = 3;

        //When
        const actual = getExpressionMaxOfSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return nothing (0, 0, 0)', () => {
        const first = 0;
        const second = 0;
        const third = 0;
        const expected = 0;

        //When
        const actual = getExpressionMaxOfSum(first, second, third);

        //Then
        assert.deepEqual(actual, expected);
    })

});

describe('getMark', () => {
    it('should return F (19)', () => {
        const rate = 19;
        const expected = 'F';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return E (25)', () => {
        const rate = 25;
        const expected = 'E';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return D (45)', () => {
        const rate = 45;
        const expected = 'D';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
    it ('should return C (69)', () => {
        const rate = 69;
        const expected = 'C';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return B (89)', () => {
        const rate = 89;
        const expected = 'B';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
    it('should return A (100)', () => {
        const rate = 100;
        const expected = 'A';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
     it('should return mistake (101)', () => {
        const rate = 101;
        const expected = 'Empty';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })
     it('should return mistake (-101)', () => {
        const rate = -101;
        const expected = 'Empty';

        //When
        const actual = getMark(rate);

        //Then
        assert.deepEqual(actual, expected);
    })

});