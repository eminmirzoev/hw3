describe('getProductOrSum', function () {
    it ('should return * of first and second (2, 4)', () => {
        const first = 2;
        const second = 4;
        const expected = 6;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
     });
     
     it (' should return + of first and second (8, 2)', () => {
        const first = 8;
        const second = 2;
        const expected = 10;

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
        const expected = 2;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })
    it ('should return negative meaning if first negative (-4, 2)', () => {
        const first = -4;
        const second = 2;
        const expected = -2;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    })

});

describe('getMaxOfProductSum = (first, second, third)', () => {
   
})