const button1 = document.querySelector("button");
const input_1 = document.getElementById("num1")! as HTMLInputElement;
const input_2 = document.getElementById("num2")! as HTMLInputElement;
// This is called TYPE CASTING which tells Typescript that this is For Sure am Input Element with a value in which there WILL be a value. And now the error on line 11 is gone 

function add(num1, num2) {
    return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input_1.value, input_2.value));
}); 
