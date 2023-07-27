function mostFrequent(arr){
    const frequencyMap = {};
    let maxElement = arr[0];
    let maxFrequencyCount = 0;

    arr.forEach(element=>{
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        //extra part
        if(frequencyMap[element] > maxFrequencyCount){
            maxFrequencyCount = frequencyMap[element];
            maxElement = element;
        }
    })
    return maxElement; 
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(mostFrequent(arr));