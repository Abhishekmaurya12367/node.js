let a=10;
let b=0;
// setTimeout(()=>{
//     b=30;
// },200);
let waitingtime=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    b=30;
    resolve(30)
},2000);

})
waitingtime.then((data)=>{
console.log(a+data);
})
