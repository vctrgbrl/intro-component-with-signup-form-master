const signupForm = document.forms["signup-form"];
let inputs = ["first-name", "last-name","email", "password"];

signupForm.addEventListener("submit", event => {
  event.preventDefault();
  let isInputValid = true;
  
  for (let i = 0; i < 4; i++) {
    const input = signupForm[inputs[i]];
    const icon = document.getElementById("iconerror-" + inputs[i]);
    const span = document.getElementById("span-" + inputs[i]);

    if (input.value == "") {
      input.classList.add("input-error");
      icon.style.display = "block";
      let string = inputs[i].split("-").map(string => {
        return string[0].toUpperCase() + string.slice(1, string.length);
      });
      span.innerHTML = string.toString().replace(","," ") + " cannot be empty";
      span.classList.remove("disabled");
      isInputValid = false;
      continue;
    }
    if (inputs[i] === "email" && !ValidEmail(input.value)) {
      isInputValid = false;
      span.innerHTML = "Looks like this is not an email";
      icon.style.display = "block";
    }
  }
  if (isInputValid) {
    // Code to send POST request
  }
})

for (let i = 0; i < 4; i++) {
  const input = signupForm[inputs[i]];
  const icon = document.getElementById("iconerror-" + inputs[i]);
  const span = document.getElementById("span-" + inputs[i]);

  input.addEventListener("change", event => {
    if(event.target.value != "") {
      input.classList.remove("input-error");
      icon.style.display = "none";
      span.innerHTML = "";
      span.classList.add("disabled");
    }
  })
}

function ValidEmail(email) {
  let regex = /\w+@\w+\.\w+/;
  return regex.test(email);
}