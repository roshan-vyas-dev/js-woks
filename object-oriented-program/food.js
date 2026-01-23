
class Food{

    setFood(name,category,price){
        this.fname=name;
        this.fcategory=category;
        this.fprice=price
    }

    printFood(){
        console.log(this.fname,this.fcategory,this.fprice);
    
    }
}


var food1= new Food();

food1.setFood("friedrice","chinese",140);
food1.printFood();





