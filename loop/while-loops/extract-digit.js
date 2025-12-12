// print digit of num

var num = 246;

while (num != 0) { // 246!=0 t, 24!=0->T, 2!=0->T, 0!=0->F(exit)

    let digit = num % 10; // 246 % 10 , 24%10 , 2%10
    console.log(digit); // 6, 4 , 2.
    num = Math.floor(num / 10);//24, 2, 

}