function findSecondSmallest(arr) {
    let smallest = arr[0];
    let secondSmallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] > smallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

const arr = [3, 5, 1, 2, 5, 3, 3, 1, 4, 5];
console.log(findSecondSmallest(arr));