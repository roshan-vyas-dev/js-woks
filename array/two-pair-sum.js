//  two pair sum
var arr = [1, 2, 3, 4, 5, 6];
//         0  1  2  3  4  5

var target = 9;

var left=0;

var right=arr.length-1;

while(left<right){
    let currSum=arr[left]+ arr[right];

    if(currSum==target){
        console.log(`${arr[left]},${arr[right]}`);
       right--;
       left++;
        
    }
    else if(currSum>target){
        right --;
    }
    else{
        left++;
    }

}


