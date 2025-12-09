var limit=10;

var prev=0;

var cur=1;

console.log(prev); // 0

console.log(cur); // 1

for(let i=1;i<=limit-2;i++){ //
    let next= prev+cur;
    console.log(next);
    prev=cur;
    cur=next;

    
}
