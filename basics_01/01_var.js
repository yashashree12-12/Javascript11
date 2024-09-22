const accountId = 123456
let accountEmail = "yashashree@gmail.com"
var accountPassword = "876543"
accountCity = "Pune"
let accountState;

// accountId = 2  //not allowed
console.log(accountId);

accountEmail = "yash@gmail.com"
accountPassword = "567656"
accountCity = "baramati"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var because of issue in block scope and functional scope.