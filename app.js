function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
    return [];
}
function someFunction(text) {
    console.log(text);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    return result;
}
addAndHandle(5, 5, function (result) {
    console.log(result);
});
// let result: (a: number, b: number) => number;
// console.log(result(3, 4));
// printResult(add(1, 2));
