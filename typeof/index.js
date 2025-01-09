var account = {
    username: "donald_duck",
    email: "donald.duck@exmaple.com",
    password: "goawaygoaway",
    role: "admin",
};
console.log(account["username"]);
function getProp(obj, prop) {
    return obj[prop];
}
console.log(getProp(account, "username"));
