
const getProductOrSum = (first, second) => {
    const multy = first * second;
    const summ = first + second;

return  first % 2 === 0 ? multy : summ;
};

const getQuarter = (x, y) => {
    let result = ' ';
     if (typeof x === 'undefined' || typeof y === 'undefined') {
         result = ' ';
     } else if(!x && !y) {
         result = 'frame Origin';
     }else if ( !y ) {
        result = 'X-axis';
     } else if (!x) {
         result = 'Y-axis';
     } else if ( x > 0 && y > 0 ) {
        result = '1st quarter';
    } else if ( x < 0 && y > 0 ) {
        result =  '2nd quarter';
    } else if ( x < 0 && y < 0 ) {
        result = '3rd quarter';
    } else if ( x > 0 && y < 0 ) {
        result = '4th quarter';
    }
    return result;
};

const getOnlyPositiveSum = (first, second, third) => {
    let sum = 0;
    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }
    return sum;
}