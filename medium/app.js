const fs = require('fs');
// const file = fs.readdirSync('./');
// console.log(files);
// fs.readdir('./',function(err,files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });
fs.readFile('./readMe.txt', 'utf8', (err,data)=>{
     if(err){ 
         console.error(err);
         return 
    }
    console.log(data);
})