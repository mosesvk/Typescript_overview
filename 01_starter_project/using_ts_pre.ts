const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
// Typescript already recognizes that these variables above have already been declared (along with the Function in line 6) in other files within the same folder

function add(num1, num2) {
    return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
  // Even if we change the above variable names (Go ahead and try it) We would still get errors above because Typescript is NOT Sure that the 'input1 has a value'
}); 
