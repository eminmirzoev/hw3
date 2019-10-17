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
};

const getExpressionMaxOfSum = (first, second, third) => {
    const multiplication = first * second * third;
    const sum = first + second + third;

    return multiplication > sum ? multiplication + 3 : multiplication < sum ? sum + 3 : 0;
};

const getMark = rate => {
    let result = '  ';
    if (rate <= 0 || rate > 100) {
        result = 'Empty';
    } else if (rate >= 0 && rate < 20) {
        result = 'F';
    } else if (rate >= 20 && rate < 40) {
        result = 'E';
    } else if (rate >= 40 && rate < 60) {
        result = 'D';
    } else if (rate >= 60 && rate < 75) {
        result = "C";
    } else if (rate >= 75 && rate < 90) {
        result = 'B';
    } else if (rate >= 90 && rate <=100) {
        result = 'A';
    }
    return result;
};

const getEvenSum = () => 2500;

const getPrimeNum = number => {
    if (number < 0) {
        return false;
    }
    for (let i = 2; i < number / 2; i++) {
        if (!(number % i)) {
            return false;
        }
    }

    return true;
};

const getFactorial = num => {
    let result = 1;

    if (!num) {
        return 0;
    }

    for (let i = 1; i <= num; i++) {
        result *= i;      
    }

    return result;
};

const getWeekNumber = day => {
    let result = ' ';

    switch(day) {
        case 1:
            result = 'Monday'; break;
        case 2:
            result = 'Tuesday'; break;
        case 3:
            result = 'Wednesday'; break;
        case 4:
            result = 'Thusday'; break;
        case 5:
            result = 'Friday'; break;
        case 6:
            result = 'Saturday'; break;
        case 7:
            result = 'Sunday'; break;

        default:

            result = ' ';
      }
      
    return result;
};