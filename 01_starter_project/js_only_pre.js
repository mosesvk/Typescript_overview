const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
  // These will be concatenated because these values are strings
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
  // When you access an input element value, it is ALWAYS a String
}); 
