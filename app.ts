function personData(name: string, age: number, programmingLanguage: string[]) {
  const data = programmingLanguage.map((lang) => `language list ${lang}`);
  return data;
}

console.log(personData("pavan", 26, ["python", "javascript", "java"]));
