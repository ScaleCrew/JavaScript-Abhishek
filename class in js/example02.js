


// 01 Object Literal

// const member = {
//     memberName: "Abhi",
//     age: 30,
//     profession: "ACE Trainer",
//     noOfSessionAttended: 5,
//     markAttendance: function (){
//         member.noOfSessionAttended++;
//     }
// };
// const member2 ={
//     memberName: "Rajesh",
//     age: 25,
//     profession: "Developer",
//     noOfSessionAttended: 3,
//     markAttendance: function (){
//         member2.noOfSessionAttended++;
//     }
// }

// const member3 ={
//     memberName: "Smriti",
//     age: 28,
//     profession: "Developer",
//     noOfSessionAttended: 4,
//     markAttendance: function (){
//         member3.noOfSessionAttended++;
//     }
// }


/**
 * 02 As  in new member comes , we need to create new Object from scratch, can we do it in a better way?
 * Yes , Create a function which will create a new object and return it
 */


// function createMember(name, age, profession, noOfSessionAttended) {
//     return {
//         memberName: name,
//         age: age,
//         profession: profession,
//         noOfSessionAttended: noOfSessionAttended,
//         markAttendance: function () {
//             this.noOfSessionAttended++;
//         }
//     };
// } ['']

// const member4 = createMember("Abhi", 30, "ACE Trainer", 5);
// const member5 = createMember("Rajesh", 25, "Developer", 3);

// console.log(member4);
// member4.markAttendance();
// console.log("After marking attendance:", member4);

/**
 * 03 Will Understand __proto__ using Object.Create
 */

// const utlity = {

//     markAttendance: function () {
//         this.noOfSessionAttended++;
//     },
//     fetchMemberDetails: function () {
//         return {
//             memberName: this.memberName,
//             age: this.age,
//             profession: this.profession,
//             noOfSessionAttended: this.noOfSessionAttended
//         };
//     }
// }

// function createMember(name, age, profession, noOfSessionAttended) {
//     const member = Object.create(utlity);
//     member.memberName = name;
//     member.age = age;
//     member.profession = profession;
//     member.noOfSessionAttended = noOfSessionAttended;
//     return member;
// }
// const member6 = createMember("priyanshu", 21, "Developer", 5);
// const member7 = createMember("siva", 25, "Developer", 3);
// console.log("Member 6 Details:", member6.fetchMemberDetails());
// member6.markAttendance();
// console.log("After marking attendance:", member6);
// console.log("Member 7 Details:", member7.fetchMemberDetails());


/**
 * 04 Way is Contructor Function or using this keyword
 * 
 */
function CreateMember(name, age, profession, noOfSessionAttended) {
    this.memberName = name;
    this.age = age;
    this.profession = profession;
    this.noOfSessionAttended = noOfSessionAttended;
}

CreateMember.prototype.markAttendance = function () {
    this.noOfSessionAttended++;
}

CreateMember.prototype.fetchMemberDetails = function () {
    return {
        memberName: this.memberName,
        age: this.age,
        profession: this.profession,
        noOfSessionAttended: this.noOfSessionAttended
    };
};
const member8 = new CreateMember("Rahul", 21, "Back Developer", 5);
const member9 = new CreateMember("Dev", 25, "Developer", 3);
member8.markAttendance();
console.log("After marking attendance:", member8);
console.log("Member 8 Details:", member8.fetchMemberDetails());