
function display_hw(limit) {
    if (limit == 0) {  //basic condition
        return         // return use for end fuction
    }
    console.log("hello world");
    display_hw(limit - 1)

}

display_hw(3)


function display_hi(limit){
    if(limit==0.){
        return;
    }
    console.log("hi");
    display_hi(limit-1)
    
}
display_hi(5)

