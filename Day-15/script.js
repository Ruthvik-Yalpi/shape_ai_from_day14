// //Template literal-prints all the things samely between ``
////two things are 1)the way we write it prints the same and 2) ${``}

// var num1=123;
// var num2=123;
// var num3=123;

// console.log(`
// Peaches
// Grapes
// Banana
// Oranges
// Apples
// ${num1}
// ${num2}
// ${num3}
// `);

//json is used to convert the data which we are fetching to human and machine readable format


//Asynchronous java script
//first step
//console.log(fetch("https://jsonplaceholder.typicode.com/users"))
//secodn step
//here first we are fetching the data from that particular page and then waiting for the result to finish and then changing it to human and machine readable format
//here we did with with users we can do the same thing with ports and other things which are on that url page
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((result)=>result.json())
// .then((data)=>console.log(data));


//fetch is like the inbuilt function rest all(data,result which is inside .then) are variable types 

// //now the same thing with posts data
// // this url https://jsonplaceholder.typicode.com is having some data with headings posts,commebts,users etc in objects format and we are trying to fetch the data from that using js
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((result)=>result.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));



//Async await->syntactically improved way of the previous version
//instead of then we are using await

// const getData=async()=>{
    
//     const result=await fetch("https://jsonplaceholder.typicode.com/users");
//     const data=await result.json();
//     console.log(data);
// };

// getData();





//same thing eill error catch and try
//it will work if there isa any error or spelling mistake in url
const getData=async()=>{
    try{
    const result=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await result.json();
    console.log(data);
} catch(error){
    console.log(error)
}
};

getData();//calling the function