
var arr = [1, 2, 3, 5];
//       0  1  2  3  4

// o/p =>[1, 2, 3, 5];

var left = 0
var right = left + 1;

while (left < arr.length - 1) {

    let difference = arr[right] - arr[left];

    if (difference != 1) {
        console.log(`${arr[left]+1} is missing`);
        arr.splice(left+1,0,arr[left]+1)

    }
    left = right;
    right++;

}
console.log(arr);











