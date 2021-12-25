function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(result: number): string[] {
  console.log(result);
  return [];
}
function someFunction(text: string): void {
  console.log(text);
}

function addAndHandle(
  n1: number,
  n2: number,
  callback: (num: number) => void
): number {
  const result = n1 + n2;
  return result;
}

addAndHandle(5, 5, (result) => {
  console.log(result);
});

let result: (a: number, b: number) => number;

console.log(result(3, 4));

printResult(add(1, 2));
