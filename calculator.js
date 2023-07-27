function calculator(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'operator is not valid';
            break;
    }
    return result;
}

console.log(calculator(1, '+', 2));
console.log(calculator(3, '-', 2));
console.log(calculator(2, '*', 3));
console.log(calculator(6, '/', 2));
console.log(calculator(9, '%', 3)); 