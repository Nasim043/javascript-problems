function removeDuplicates(numbers) {
    let uniqueArray = [...new Set(numbers)];
    return uniqueArray
}

const numbers = [1, 2, 3, 3, 2, 4, 6, 4];
console.log(removeDuplicates(numbers));