

/**
 * 
 * Inheritance using new keyword
 */

function CreateMember (name, age, profession, noOfSessionAttended) {
    this.memberName = name;
    this.age = age;
    this.profession = profession;
    this.noOfSessionAttended = noOfSessionAttended;
}
CreateMember .prototype.markAttendance = function () {
    this.noOfSessionAttended++;
}
CreateMember .prototype.fetchMemberDetails = function () {
    return {
        memberName: this.memberName,
        age: this.age,
        profession: this.profession,
        noOfSessionAttended: this.noOfSessionAttended
    };
}

function CreateAdmin(name, age, profession, noOfSessionAttended, permission) {
    CreateMember.call(this, name, age, profession, noOfSessionAttended);
    this.permission = permission;
}
Object.setPrototypeOf(CreateAdmin.prototype, CreateMember.prototype);
CreateAdmin.prototype.fetchAdminPermission = function () {
    console.log(`${this.memberName} has ${this.permission} permission`);
}
const admin1 = new CreateAdmin("Smriti", 21, "F-Developer", 5, "cr_ed_de");
const admin2 = new CreateAdmin("Rajesh", 25, "Developer", 3, "cr_ed");
admin2.markAttendance();
console.log("After marking attendance:", admin2);
admin2.fetchAdminPermission();