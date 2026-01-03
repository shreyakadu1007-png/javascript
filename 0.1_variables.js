const  accountId = 1001
 let accountEmail = "shreya@ggogle.com"
var accountPassword = "123"
accountCity = "Pune" // avoid to use this type of declaration
let accountState; // if we declare variable without value it will give ouput as "UNDEFINED"

// accountId = 2 // not allowed
/*
prefer not to use var : because of issue in scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])