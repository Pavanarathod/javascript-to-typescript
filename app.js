function personData(name, age, programmingLanguage) {
    var data = programmingLanguage.map(function (lang) { return "language list ".concat(lang); });
    return data;
}
console.log(personData("pavan", 26, ["python", "javascript", "java", 45]));
