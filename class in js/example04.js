/**
 * Inheritance in oop (using setPrototypeOf)
 * 
 */
const utlity = {
    markAttendance: function () {
        this.noOfSessionAttended++;
    },
    fetchMemberDetails: function () {
        return {
            memberName: this.memberName,
            age: this.age,
            profession: this.profession,
            noOfSessionAttended: this.noOfSessionAttended
        };
    }
}

function createMember(name, age, profession, noOfSessionAttended) {
    const member = Object.create(utlity);
    member.memberName = name;
    member.age = age;
    member.profession = profession;
    member.noOfSessionAttended = noOfSessionAttended;
    return member;
}
const adminUtility = {
    fetchAdminPermission: function(){
        console.log(`${this.memberName} has ${this.permission} permission`);
    }
}

function createAdmin(name, age, profession, noOfSessionAttended, permission) {
    const admin = createMember(name, age, profession, noOfSessionAttended);
    Object.setPrototypeOf(admin, adminUtility);
    admin.permission = permission;
    return admin;
}

Object.setPrototypeOf(adminUtility, utlity);

const admin1 = createAdmin("Smriti", 21, "F-Developer", 5, "cr_ed_de");

const admin2 = createAdmin("Rajesh", 25, "Developer", 3, "cr_ed");

admin1.markAttendance();
console.log("After marking attendance:", admin1);
admin1.fetchAdminPermission();