// function findSum(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }
//     return ans
// }
// function findSumresult(){
//     console.log(findSum(100))
// }

// setTimeout(findSumresult,1000)
// console.log("hello world")

//=========================================================
// const fs= require('fs')
// fs.readFile("treace.txt","utf-8",function(err,data){
//     console.log(data)
// })
// console.log("Hi")
//=================================================================
// console.log("hello")

// setTimeout(() => {
//     console.log("I am Abhijit Roy")
// }, 10000);
// setTime
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  const fs= require('fs')
//  console.log("sup")
//  function readfilebro(){
//     return new Promise (function(resolve){
//         console.log("again")
//         fs.readFile('treace.txt',"utf-8",function(err, data){
            
//             resolve(data);
//         })
//     })
//  }
// function onDone(data){
//     console.log(data)
// }
// console.log("hehe")
// readfilebro().then(onDone);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function kiratAsyncFun(){
//     let ref= new Promise (function(resolve){
//         resolve("hi there")
//     })
//     return p
// }

// const val= kiratAsyncFun();
// val.then(function(){
//     console.log("hi there")
// })

// const fs = require('fs');

// fs.writeFile('log.txt', 'hi there prople.', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } 
// });
// const fs = require('fs');
// function writeinlog(){
//     fs.writeFile('log.txt','hello there\n',{ flag: 'a+' },(err)=>{
//         if(err){
//             console.log("error found")
//         }
//     })
// }

// setInterval(writeinlog,1000)
//++++++++++++++++++++++++++++++++++++++++++++++++++++
const fs= require('fs')

function removespaces(filepath){
    fs.readFile(filepath,'utf8',(err,data)=>{
        if(err){
            console.error("error reading",err)
            return
        }

        const lines=data.split('\n')
        const modifiedLines = lines.map(line => line.replace(/\s+/g, ' ').trim());
        fs.writeFile(filePath, modifiedLines.join('\n'), 'utf8', err => {
            if (err) {
              console.error('Error writing to the file:', err);
              return;
            }
            console.log('Extra spaces removed and file updated successfully.');
          });
    })
}
const filePath = 'log.txt'; // Replace this with your file's path
removespaces(filePath);

//===============================================================
