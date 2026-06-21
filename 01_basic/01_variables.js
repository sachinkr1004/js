const accountId = 144553;
let accountEmail = "101004sachinkumar@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";

let accountState;

// accountId = 2; //not possible

/*

prefer not to use var
becoz of issue in block scope and funtional scope

*/

accountEmail = "sachinkumar@gmail.com";
accountPassword = "212134";
accountcity = "Gurgaon";

console.log(accountEmail);

console.table([accountEmail, accountPassword, accountcity, accountState]);
