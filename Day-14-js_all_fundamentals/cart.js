// //first model
// var items = {
//     food: 1000,
//     drinks: 2000
//   };
//   var cart = 0;//initialization
  
//   function  addCartValue(item) {
//     return cart + item;
//   }
  
//   function addToCart(item) {
//     cart = addCartValue(item);
//   }
  
//   addToCart(items.food);
//   console.log("Cart value: ",cart) //1000
//   addToCart(items.drinks);
//   console.log("Cart value: ",cart); //3000(1000+2000)
  


  


// //second model using arrow function adn let keyword

// var items = {
//     food: 1000,
//     drinks: 2000
//   };
//   let cart;
//   cart = 0;
//   const addCartValue=(item)=>{
//     return cart + item;
//   }
  
//   const addToCart=(item)=> {
//     cart = addCartValue(item);
//   }
  
//   addToCart(items.food);
//   console.log("Cart value: ",cart) //1000
//   addToCart(items.drinks);
//   console.log("Cart value: ",cart); //3000(1000+2000)







// //THIS KEYWORD-basically to grab the current executing project

// const OurObject={
//     name:"This Keyword",
//     getThis:function(){
//         console.log(this);
//     }
// };

// OurObject.getThis();

// //go and check in the console we got all those which are present upper
  




// //THIS KEYWORD othe rmodel

// console.log(this);
// //now we got simply the window because parent is window etc if anyhthing is not specified


  

//ARRAYS-TO STORE ITEMS OF SIMILAR DATA TYPE

let myArray=[1,2,3,4,5,6];
console.log(myArray);

myArray.push(7)
//push will work from end,push will add element at end
console.log(myArray)

myArray.pop()
//pop will work from end,pop deletes element from end
console.log(myArray)

myArray.unshift(0);
//unshift adds element from start
console.log(myArray);

myArray.shift()
//shift removes the element from start
console.log(myArray)

