//Date
let myDATE= new Date()
// console.log(myDATE.toString())
// console.log(myDATE.toDateString())
// console.log(myDATE.toLocaleString())
// console.log(typeof myDATE)
// console.log(myDATE.toString())
// console.log(myDATE.toString())
// console.log(myDATE.toString())
// let myBrithday= new Date(2000 , 0, 6)
// let myBrithday= new Date( "2023-01-06")
// console.log(myBrithday.toLocaleString());

// let timeStap = Date.now()
// console.log(timeStap);
// // console.log(timeStap.getTime());
// console.log(Math.floor(Date.now()));
myDATE.toLocaleString("default", {
    weekday: 'long',
    timeZone:'IST'
})


