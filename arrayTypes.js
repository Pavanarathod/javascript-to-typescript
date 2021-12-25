"use strict";
function personData(name, age, programmingLanguage) {
    const data = programmingLanguage.map((lang) => `language list ${lang}`);
    return data;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const arrayTypes = (language, salary, okay, testing) => {
    return testing;
};
console.log(arrayTypes(["java", "python"], [3, 4, 5, 5], [true, false], [
    { name: "pavan", age: 5 },
    { name: "abhishek", age: 45 },
]));
console.log(personData("pavan", 26, ["python", "javascript", "java"]));
