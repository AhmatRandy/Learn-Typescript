function doSomething(fn) {
    console.log(fn.description + " returned " + fn("hello"));
}
function myFunc(someArg) {
    return someArg;
}
myFunc.description = "default description";
doSomething(myFunc);
var greeter = function (fn) {
    fn("hellow");
};
var printToConsole = function (s) {
    return s;
};
var callFn = greeter(printToConsole);
console.log(callFn);
