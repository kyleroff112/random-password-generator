var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+",";","|",":","/","?",".",">",",","<"];
var nums = [0,1,2,3,4,5,6,7,8,9];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    var charLength = window.prompt("How many characters would you like in your password? Please type a number between 8 and 124.")
        if (charLength >= 8 && charLength <= 124) {
        console.log(charLength)  
    } else {
        window.alert("I said type a number between 8 and 124! >:(")
    };

    var upperConf = window.confirm("Would you like upper case letters?")
    if (upperConf) {
        var upperCaseRandom = Math.floor(Math.random() * upperCase.length);
        var upperCasePassword = upperCase[upperCaseRandom];
        console.log(upperCasePassword)
    };

    var lowerConf = window.confirm("Would you like lower case letters?")
    if (lowerConf) {
        var lowerCaseRandom = Math.floor(Math.random() * upperCase.length);
        var lowerCasePassword = lowerCase[lowerCaseRandom];
        console.log(lowerCasePassword)
    };

    var specConf = window.confirm("Would you like special characters?")
    if (specConf) {
        var specCharRandom = Math.floor(Math.random() * specChar.length);
        var specCharPassword = specChar[specCharRandom];
        console.log(specCharPassword)
    };

    var numConf = window.confirm("Would you like numbers?")
    if (numConf) {
        var numsRandom = Math.floor(Math.random() * nums.length);
        var numPassword = nums[numsRandom];
        console.log(numPassword)
    }

    var password = (upperCasePassword+=lowerCasePassword+=specCharPassword+=numPassword);
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password
};