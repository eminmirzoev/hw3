
const getProductOrSum = (first, second) => {
    const multy = first * second;
    const summ = first + second;

return  first % 2 === 0 ? multy : summ;
}
const getMaxOfProductSum = (first, second, third) => {
    const product = first * second * third;
    const sum = first * second + third;
    
    return product > sum ? product + 3 : sum + 3;
}