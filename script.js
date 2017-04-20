
var newElement = document.createElement('div');
  newElement.style.backgroundColor = 'tan';
  newElement.style.height = '500px';
  newElement.style.border = '10px black solid';
  newElement.style.fontSize = '18px';
  document.body.appendChild(newElement);

var shopList = [
  {
  name: 'salad',
  price: 7,
  },
  {
  name: 'meat',
  price: 12,
  },
  {
  name: 'soda',
  price: 9,
  },
  {
  name: 'mochi ice cream',
  price: 10,
  },
  {
  name: 'non-alcoholic beer',
  price: 15,
  }
]

var total = 0
var tax = 1.10

shopList.forEach(function(i) {
// console.log(i.name + " " + i.price);
  var iname = document.createElement ('p');
  iname.innerText = i.name;
  iname.className = "name"
  newElement.appendChild (iname);
   total += i.price;
   console.log("Your total is" + " " + "$" + total);

  var iprice = document.createElement ('p');
  iprice.innerText = i.price;
  iprice.className = "price";
  newElement.appendChild (iprice);

});

//var finalTotal = ("Your after tax total is" + " " + "$" + (Total);

var iTotal  = document.createElement ('p');
iTotal.innerText = "Your total is    " + "$" + total;
iTotal.className ="total";
newElement.appendChild (iTotal);


//var finalTotal = "Your Subtotal is" + " " + "$" + iTotal;
//new
