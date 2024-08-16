//So Anagram mean one str is hello and  second sr is elloh it consider as anagram
// Approach is like
// check if both dtring length is same or not
// count the string occurance like "hello" => h:1, e:1 , l:2 0:1 so if is called as angram then second string should have same count
// loop over the second string and decrese the  frequency count by 1 if any number go beyond 0 then it is not an anagram

function checkAngram(str1, str2) {
  //check if the length of the string is same or not
  if (str1.length != str2.length) return false;

  //create object that hold  frequency count of each character
  let counter = {};
  //loop over the first string and create frequency count ex "str" = abhi {a:1, b:1, h:1}
  for (let i of str1) {
    // counter[i]=counter[i]// this is give you {A:undefine as we know i any obj has not no key it will be undefined}
    counter[i] = (counter[i] || 0) + 1;
  }
  //   console.log(counter);
  // second Step loop over the second string if it present in tha decrease it frequency count by 1 if any number go beyond 0 then it is not an anagram
  for (let i of str2) {
    if (!counter[i]) {
      return false;
    }
    counter[i]--;
  }
  return true;
}

let res = checkAngram("AAhi", "Abhi");
console.log(res);

// let label=["High", "Low", "Medium"]
let label = "Low";
switch (label) {
  case "High":
    console.log("High");
  case "Low":
    console.log("Low");
  case "Medium":
    console.log("Medium");
    break
  default:
    console.log("Medium");
}
