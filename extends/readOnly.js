var writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
var readonlyPerson = writablePerson;
console.log(readonlyPerson);
function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log("prop has the value '".concat(obj.prop, "'."));
    // But we can't re-assign it.
    obj.prop = "hello";
}
console.log(doSomething({ prop: "oke" }));
