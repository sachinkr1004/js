//singleton
//object create

//jab bhi hum Literals kii tarah declare krte hai toh singleton nhi banta ....
//lekin jab bhi hum Constructor kii tarah declare krte hai toh singleton banta hai  

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sachin",
    "full name": "Sachin Kumar",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "sachin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sachin@amazon.com"
//Object.freeze(JsUser)
JsUser.email = "sachin@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

