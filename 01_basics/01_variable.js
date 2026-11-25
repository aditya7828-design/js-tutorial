const accountId = 123456;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "New Delhi";

// accountId = 2; 

accountEmail = "hcdg@gmail.com"
accountPassword = "123456"
accountCity = "Mumbai"

console.log(accountId);

console.table({ accountId, accountEmail, accountPassword, accountCity });

// prefer not to var
// because of issue in block scope and functional scope.