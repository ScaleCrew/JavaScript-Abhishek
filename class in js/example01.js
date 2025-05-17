
/**
 * This script demonstrates basic object and function usage in JavaScript:
 * 
 * - Defines a simple `community` object with a property `myCommunityName`.
 * - Logs the community name and checks if that property exists using `hasOwnProperty`.
 * - Defines a `greetMember` function to welcome a person by name.
 * - Adds a custom property `lastGreeted` directly to the function (since functions are objects in JavaScript).
 * - Logs the last greeted date and confirms that `lastGreeted` exists as a property on the function.
 */

const community = {
    myCommunityName: "Geeky Coders"
};

console.log("Community Name:", community.myCommunityName);
console.log(
    "Has own property 'myCommunityName':",
    community.hasOwnProperty("myCommunityName") ? "Yes" : "No"
);

function greetMember(memberName) {
    console.log(`🙏 Welcome ${memberName} from ${community.myCommunityName}`);
}

greetMember.lastGreeted = new Date().toLocaleDateString();

console.log("Last Greeted Date:", greetMember.lastGreeted);
console.log(
    "greetMember has own property 'lastGreeted':",
    greetMember.hasOwnProperty("lastGreeted") ? "Yes" : "No"
);