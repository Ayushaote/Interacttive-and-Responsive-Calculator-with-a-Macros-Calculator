const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
  display.focus();
  
  if (btnValue === "=" && output !== "") {
   
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    
    output = output.toString().slice(0, -1);
  } else {
    
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};


buttons.forEach((button) => {
 button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelector('.theme-checkbox');
  const mainContainer = document.querySelector('.main_container');
  const xylo = document.querySelector('.container');

  checkbox.addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.add('dark-mode');
          mainContainer.style.background = '#333333';
          xylo.style.background = '#35374B';
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark-mode');
          mainContainer.style.background = '#e0e3eb';
          xylo.style.background='#fff';
          localStorage.setItem('theme', 'light');
      }
  });

 
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      checkbox.checked = true;
      document.body.classList.add('dark-mode');
      mainContainer.style.background = '#333333';
      xylo.style.background = '#35374B';
  }
});

var redirectButton = document.getElementById('button_1'); 

function redirectToGitHub() {
  window.location.href = 'https://github.com/Ayushaote/Interacttive-and-Responsive-Calculator-with-a-Macros-Calculator';
}
redirectButton.addEventListener('click', function(event) {
  event.preventDefault();
  redirectToGitHub();
});
