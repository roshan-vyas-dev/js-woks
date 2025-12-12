var limit =4;

var sum=0;

var i=1;

while(i<=limit){ // 1<=4 t,  2<=4 t, 3<=4 t, 4<=4 t, 5<=4 f(exit)
    sum=sum+i;// 0+1=1, 1+2=3,  3+3=6, 6+4=10
    i++;// i=2, i=3, i=4, i=5
}
console.log(sum);//10
