
const displayTextElement = document.getElementById("label");
const radioButtons = document.querySelectorAll('input[type="radio"][name="myradio"]');
function updateText() {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      displayTextElement.textContent = `${radioButton.value}`;
      break;
    }
  }
}
for (const radioButton of radioButtons) {
  radioButton.addEventListener("click", updateText);
}

var icon=document.getElementById("icon");

function passwordVisible() {
    var x = document.getElementById("password");

    // icon.classList.toggle("fa-eye-slash")
    if (x.type === "password") {
      x.type = "text";
      icon.classList.add("fa-eye");

      
    } else {
      x.type = "password";
      icon.classList.remove("fa-eye");

    }
  }