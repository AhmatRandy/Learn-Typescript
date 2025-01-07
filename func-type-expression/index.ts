type DescribableFunction = {
  description: string;
  (someArg: string): string;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn("hello"));
}

function myFunc(someArg: string) {
  return someArg;
}

myFunc.description = "default description";

doSomething(myFunc);

const greeter = (fn: (text: string) => void) => {
  fn("hellow");
};

const printToConsole = (s: string) => {
  return s;
};

const callFn = greeter(printToConsole);
console.log(callFn);
