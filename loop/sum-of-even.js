// w.ap display sum of even numbers upto limit

var limit=5;

var sum=0;

var i=1;


while(i<=limit){// i=1<=5 -> T 2<=5->T 3<=5->T 4<=5->T 5<=5->t
    if(i%2==0){ // 1%2==0 -> F 2%2==0->T 3%2==0->f 4%2==0->T
        sum=sum+i;//sum=0+2=2, sum=2+4=6
    }

        i++;//i=2,3, 4,5
}
console.log(sum);
