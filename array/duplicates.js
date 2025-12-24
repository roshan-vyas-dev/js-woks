var arr = [10, 11, 12, 12, 13, 14, 15, 15];
//          0  1    2   3  4   5   6   7

var left=0;
var right=1;

while(left<arr.length-1){
    let difference=arr[right] - arr[left];
    if(difference==0){
        console.log(arr[left]);
        
    }
    left++;
    right++;
}