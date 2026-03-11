const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'crud');

const filepath = path.join(dirpath, 'apple.txt');

// fs.writeFileSync(filepath, 'hello this is content that will push into my file');
// fs.readFile(filepath,utf8,(err,item)=>{
// if(err){
//     console.log("Error found. Cannot print anything. Please check.");
//     return;
// }
// console.log(item);
// });
// fs.appendFile(filepath,'i am appending the new content for checking that i am good in learing or not just only for checking so dont wory',(error)=>{
//     if(error){
//         console.log("this is new issues that are preventing from putting the content");
//     }
// //     console.log('update successfully so there is no need to worry ok');
// // })
// fs.rename(filepath,`${dirpath}/fruit.txt`,(error)=>{
//     if(error){
//         console.log('the user failed to update the file name ');
//     }
//   console.log("update successfully ok");
// })