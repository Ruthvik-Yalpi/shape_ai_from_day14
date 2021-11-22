// //JSON->JS Object notation

// {
//     "name" : "Ruthvik",
//     "age"  : 21,

// }



//-----------------------------


// //file system

// const fileSystem=require("fs/promises");//fs is actual package name


// fileSystem.writeFile("test.txt","Hello World!")



//----------------------------


// //creating a server
// const http = require("http");

// http.createServer((request,response) => response.end("Hello World!")).listen(3000);

//-----------------------------


//creating a server

const http=require("http");
http.createServer((request,response)=>response.end("Hello World!")).listen(3000);

                   