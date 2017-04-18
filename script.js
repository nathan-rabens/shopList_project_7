var shopList = [
  {
  name: 'salad',
  price: 7,
  //tax: 1.03,
  },
  {
  name: 'meat',
  price: 12,
  //tax: 1.03,
  },
  {
  name: 'soda',
  price: 9,
  //tax: 1.03
  },
  {
  name: 'mochi ice cream',
  price: 10,
  //tax: 1.03,
  },
  {
  name: 'non-alcoholic beer',
  price: 15,
  //tax: 1.10,
  }
]

var total = 0
var tax = 1.10

shopList.forEach(function(i) {
   console.log(i.name + " " + i.price);
   total += i.price;
   console.log("Your total is" + " " + "$" + total);

});

console.log("Your after tax total is" + " " + "$" + (total * tax));


// trying to make different tax brackets
//shopList.forEach(function(afterTax) {
 //var newPrice = afterTax.tax * afterTax.price;
//  total += newPrice;
//  console.log("After Tax total is" + " " + total);
//});
