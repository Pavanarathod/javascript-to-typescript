function personData(name: string, age: number, programmingLanguage: string[]) {
  const data = programmingLanguage.map((lang) => `language list ${lang}`);
  return data;
}

const arrayTypes = (
  language: string[],
  salary: number[],
  okay: boolean[]
) => {};

console.log(personData("pavan", 26, ["python", "javascript", "java"]));
