/*3- user = {
id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"],
 age: 19, scores: { english: 10, math: 19.5, physics: 14 },
};
●   / Function that add a new course score and return the new user object
 (dynamic argument)
●   // Function that add a new role and check if his age is under 18 add 
status: "veryyoung" to that object and return the object
●
●   // Convert this object to array and after that add (fatherName: "ali")
 and then convert it to object
*/
//1
let courseScore = (obj) => {
  obj.scores["chemistry"] = 12;
  return obj.scores;
};
console.log(
  courseScore({
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
  })
);

//2
let newRole = (obj) => {
  obj.roles.push("son");
  if (obj.age <= 18) {
    obj.status = "veryYoung";
  }
  return obj;
};
console.log(
  newRole({
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
  })
);

//3
let converting = (obj) => {
  let array = Object.entries(obj);
  array.push(["fatherName", "ali"]);
  console.log(array);
  let object = Object.fromEntries(array);
  return object;
};
console.log(
  converting({
    id: 6,
    name: "Hossein",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
  })
);
