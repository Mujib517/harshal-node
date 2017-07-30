const express = require('express');

let app = express();

const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('server running on ' + port);
});

app.get('/',(req,res)=>{
    res.send("My Express API");
});

app.get('/health',function(req,res){
    //2xx  Success
    //3xx  Redirects
    //4xx  Client error 401, 404
    //5xx  Server error 500, 501
    res.status(200);
    res.send("Up");
});



// function add(a,b){
//     a++;
//     b++;
//     a--;
//     a--;

//     return a+b;
// }


// function addAsync(a,b,cb){
//     a++;
//     b++;
//     a--
//     a--;

//     setTimeout(function(){
//         cb(a+b);
//     },2000);  //synchronous

//     //return undefined;
// }

// //2sec




// var result=add(2,4);

// console.log(result);

// var cb=function(res){
//     console.log(res);   
// };

// addAsync(2,4,cb);



// var eventLoop = [];

// eventLoop.push(
//     function () {

//         //db query huge
//         setTimeout(function () {
//             console.log("First");
//         }, 2000);  //IIS - 2000 res
//     });

// eventLoop.push(function () { console.log("Second"); }) //req 2
// eventLoop.push(function () { console.log("3rd"); }) //req 3
// eventLoop.push(
//     function () { 

//         //db query 1000

//         setTimeout(function () {
//             console.log("fourth");
//         }, 1000);
//     });

// eventLoop.push(function () { console.log("Fifth"); })



// for (let i = 0; i < eventLoop.length; i++) {
//     eventLoop[i]();
// }




// ====
//          2000      API (2sec)  
//        res
//        res  
//         1000        API
//         res
//        cb4() res 4
//        cb1(); 
// ====



//reading file
//db query
//set timeouts
//network delays (http call)  100ms


// let http=require('http');

// function Handler(req,res){
//     res.write("From nodeJs");
//     res.end();
// }

// let server =http.createServer(Handler);

// server.listen(3000);

// console.log('server running on 3000');


//REST aPI
//MVC app
//Chat sockets
//IOT devices
//Libraries underscore.


// setTimeout(function(){
//     console.log('adkfkad');
// },2000); //2sec  min 2sec