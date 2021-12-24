function add(one: number = 4, two: number, age: boolean) {
  return one + two;
}

const number1 = 5;
const number2 = 2;
const age: number = 5;

const result = add(number1, number2, true);

console.log(result);
