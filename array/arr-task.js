var numbers=[2,3,4,5,6,7,7,8,3,9,9,7]

// minNumber
// maxNumber
// sum of numbers
// sum of odd numbers
// sum of even numbers
// diviors of 3
// avg of numbers
// most frequent number



// min number
var min=Math.min(...numbers);

// max number

var max=Math.max(...numbers);

// sum of numbers
var sum=0

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; 
}


// sum off odd numbers

var sumOfOdd=0

for (var i = 0; i < numbers.length; i++) {
    if(numbers[i]%2!=0){
    sumOfOdd = sumOfOdd + numbers[i]; 
    }
}


// sum of even

var sumOfEven=0

for (var i = 0; i < numbers.length; i++) {
    if(numbers[i]%2==0){
    sumOfEven = sumOfEven + numbers[i]; 
    }
}

// divisor of 3
for (var i = 0; i < numbers.length; i++) {
    if(numbers[i]%3==0){

        console.log(numbers[i]); 
    }
}


// avg of numbers

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];   
}
var avg = sum / numbers.length;  

// most frequent number











console.log("min number:", min);
console.log("max number:", max);
console.log("Sum:", sum);
console.log("Sum of odds:", sumOfOdd);
console.log("Sum of even:", sumOfEven);
console.log("Average:", avg);



