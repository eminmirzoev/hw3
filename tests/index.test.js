describe('getProductOrSum', function () {
    it ('should return * of first and second (2, 4)', () => {
        const first = 2;
        const second = 4;
        const expected = 8;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
     });
     
     it (' should return + of first and second (7, 2)', () => {
        const first = 7;
        const second = 2;
        const expected = 9;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    });
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

describe('')