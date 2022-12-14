//========================================  Question 2
// arr =
// [3,8,3,5,6,9,8,5,2,9,3,6,4,6,4,4,4,2,1,9,9,5,7,7,1,5,9,5,9,4,6,7,4
// ,3,7,9,6,9,6,4,1,3,4,3,2,3,2,8,1,4,9,4,7,3,5]

// Write a program that can return the mean, mode and median of the following array.


var questionTwo = (arg) => {

    //============== Calculate mean
    const findMean = arg.reduce((a, b) => a + b) / arg.length;
    console.log('Mean of the array input is : ' + findMean);

    //============== Calculate mode
    const findMode = (numbers) => {
        // Create a map to store the frequency of each number
        const frequencyMap = new Map();
      
        // Loop through the array of numbers and increment the frequency of each number in the map
        for (const num of numbers) {
          if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
          } else {
            frequencyMap.set(num, 1);
          }
        }
      
        // Find the number(s) with the highest frequency
        let maxFrequency = 0;
        let mode = [];
      
        for (const [num, frequency] of frequencyMap) {
          if (frequency > maxFrequency) {
            mode = [num];
            maxFrequency = frequency;
          } else if (frequency === maxFrequency) {
            mode.push(num);
          }
        }
      
        // If more than one number has the same maximum frequency, then there is no mode
        if (mode.length === numbers.length) {
          return null;
        }
      
        // Return the mode(s)
        let result = mode;
        console.log('Mode of the array input is : ' + result);

    }
    findMode(arg)
    
    //============== Calculate median
    const findMedian = arr => {
        const { length } = arr;
        
        // sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // if the length of the array is even, return the average of the middle two elements
        if (length % 2 === 0) {
        return (arr[length / 2 - 1] + arr[length / 2]) / 2;
        }
        
        // if the length of the array is odd, return the middle element
        let result =  arr[Math.floor(length / 2)];
        console.log('Median of the array input is : ' + result);
    };
    findMedian(arg)
}


const arr = [3,8,3,5,6,9,8,5,2,9,3,6,4,6,4,4,4,2,1,9,9,5,7,7,1,5,9,5,9,4,6,7,4,3,7,9,6,9,6,4,1,3,4,3,2,3,2,8,1,4,9,4,7,3,5]
questionTwo(arr)



// Expected solution:
    // Mean of the array input is : 5.127272727272727
    // Mode of the array input is : 4
    // Median of the array input is :5