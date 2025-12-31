const productSales = {
  laptop: 120,
  mobile: 250,
  headphones: 400,
  smartwatch: 180,
  tablet: 90,
  camera: 60,
  printer: 45,
  keyboard: 210,
  mouse: 320,
  speaker: 150
};

//q1 => trending product
//q2=> product with lowest sale
//q3 =>product with sales count > 200
// q4 => total number of products sold
//q5=> sort products wrt sales order by desc


// trending product(highest value)

let trendingProduct=Object.entries(productSales).reduce((item1,item2)=>item1[1]>item2[1]?item1:item2);

console.log("Trending product:",trendingProduct);

// product with lowest sale

let lowestProduct=Object.entries(productSales).reduce((item1,item2)=>item1[1]<item2[1]?item1:item2);

console.log("Lowest product:",lowestProduct);

// product with sales count > 200

let salesGttwo100=Object.entries(productSales).filter(item=>item[1]>200);

console.log("sales greater than 200 is :", salesGttwo100);

// total number of products sold or sum od produtcs

let totalProductsSold=Object.entries(productSales).reduce((a,c)=>a+c[1],0);

console.log("Total Product Sales: ",totalProductsSold);

//  sort products wrt sales order by desc

let sortProductDesc=Object.entries(productSales).sort((item1,item2)=>item2[1]-item1[1]);

console.log("sorted product descending: ",sortProductDesc);
