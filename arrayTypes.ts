function personData(name: string, age: number, programmingLanguage: string[]) {
  const data = programmingLanguage.map((lang) => `language list ${lang}`);
  return data;
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const arrayTypes = (
  language: string[],
  salary: number[],
  okay: boolean[],
  testing: object[]
) => {
  return testing;
};

console.log(
  arrayTypes(
    ["java", "python"],
    [3, 4, 5, 5],
    [true, false],
    [
      { name: "pavan", age: 5 },
      { name: "abhishek", age: 45 },
    ]
  )
);

console.log(personData("pavan", 26, ["python", "javascript", "java"]));
