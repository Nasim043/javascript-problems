function sumOfPositives(arr) {
    let sum = 0;
    arr.forEach(element => {
        if (element > 0) {
            sum += element;
        }
    });
    return sum;
}

const arr = [2, -5, 10, -3, 7];
console.log(sumOfPositives(arr));
