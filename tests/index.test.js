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

describe('getMaxOfProductSum = (first, second, third)', () => {
   
})