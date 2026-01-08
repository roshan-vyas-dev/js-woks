
function display_digit(number){
    if(number==0){
        return;
    }
    console.log(number%10);

    
    display_digit (number=Math.floor(number/10));
}
display_digit(123);
