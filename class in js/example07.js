/**
 * How Does Extend Work in Js
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


class createAdmin extends createMember {
    constructor(name, age, profession, noOfSessionAttended, permission) {
        super(name, age, profession, noOfSessionAttended);
        this.permission = permission;
    }
    fetchAdminPermission() {
        console.log(`${this.memberName} has ${this.permission} permission`);
    }
}
const admin3 = new createAdmin("Siva", 21, "F-Developer", 5, "cr_ed");
admin3.markAttendance();
console.log("After marking attendance:", admin3);
admin3.fetchAdminPermission();