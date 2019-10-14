
const getProductOrSum = (first, second) => first % 2
      ? first * second
      : first + second;

const getMaxOfProductSum = (first, second, third) => {
    const product = first * second * third;
    const sum = first * second + third;
    
    return product > sum ? product + 3 : sum + 3;
}