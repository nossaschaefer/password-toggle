let button = document.querySelector("button");
let input = document.querySelector("input");

let hide = "Hide Password";
let show = "Show Password";

button.addEventListener("click", function () {
  if (button.innerText === show) {
    button.innerText = hide;
    input.type = "text";
  } else {
    button.innerText = show;
    input.type = "password";
  }
});
