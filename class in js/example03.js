/**
 * How Class and Constructor Work
 */


class createMember {
    constructor(name, age, profession, noOfSessionAttended) {
        this.memberName = name;
        this.age = age;
        this.profession = profession;
        this.noOfSessionAttended = noOfSessionAttended;
    }

    markAttendance() {
        this.noOfSessionAttended++;
    }
    fetchMemberDetails() {
        return `Name: ${this.memberName}, Age: ${this.age}, Profession: ${this.profession}, No of Sessions Attended: ${this.noOfSessionAttended}`;
    }
}
const member10 = new createMember("kunal", 21, "UX/UI Designer", 5);
const member11 = new createMember("kushal", 25, "Developer", 3);
member10.markAttendance();
console.log("After marking attendance:", member10);
console.log("Member 10 Details:", member10.fetchMemberDetails());