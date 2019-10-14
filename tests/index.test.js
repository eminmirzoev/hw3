discribe('getProductSum', () => {
    it ('should return * of first and second (6, 4) ', () => {
        const first = 6;
        const second = 4;
        const expected = 24;

        //When
        const actual = getProductSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
        });

    it (' should return + of first and second (8, 2)' function () {
        const first = 8;
        const second = 3;
        const expected = 10;

        //When
        const actual = getProductOrSum(first, second);

        //Then
        assert.deepEqual(actual, expected);
    });
    
});