// create a product with attr
// code, title, price,color

var product={
    "code":"12345",
    "title":"salt",
    "price":20,
    "color":"white"
}

console.log(product.title);
// console.log(product["title"]);

// to check atribute exist or not
// attribute in objectname

if("offer" in product){
    console.log("exist");  
}
else{
    console.log("not exist");   
}


// for update

// updates price value
product.price+=25;

// console.log(product);

// add new property qty as 10 if qty not exist else update qty as 
// current qty=10;

if("qty"in product){
    product.qty+=10;
}
else{
    product.qty=10;
}

console.log(product);


