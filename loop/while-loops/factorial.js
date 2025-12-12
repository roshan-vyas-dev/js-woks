var number =5;

var fact=1;

var i=1;

while(i<=number){ //1<=5->T 2<=5->T, 3<=5->T 4<=5->t 5<=5->t 6<=5->f(exit)
    fact= fact*i // fact = 1*1=1, 1*2=2, 2*3=6, 6*4=24,  24*5=120
    i++// i=2, i=3,i=4, i=5, i=6
}
console.log(`factorial 0f ${number}!=${fact}`);
