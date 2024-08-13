//singleton

// const tinder = new Object();
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name ="snny"
tinderUser.age ="12"
// console.log(tinder);


const regularUser = {
    email :"some@example.com",
    fullname :{
        userFullName :{
            firstName :"Abhi",
            lastName :"Jain"
        }
    }
}
// console.log(regularUser?.fullname?.userFullName.firstName);
// merge ob
const obj1 ={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"Abhi@gmail"
    },
    {
        id:2,
        email:"Abhi@gmail"
    }
]

console.log(user[1].email);
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("nme"));





