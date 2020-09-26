// --------- fetching from html ---------
let name = document.getElementById("yourName").value;
let age = document.getElementById("age").value;
let power = document.getElementById("horsepower").value;
let country = document.getElementById("country").value;
const calcBtn = document.getElementById("calculate");
const cost = document.getElementById("printCalc");

// --------- Btn Start function ---------

calcBtn.addEventListener("click", calculateInsurance, false);

// --------- Insurance Function ---------

function calculateInsurance() {
  let name = document.getElementById("yourName").value;
  let age = parseInt(document.getElementById("age").value);
  let power = parseInt(document.getElementById("horsepower").value);
  let country = document.getElementById("country").value;
  if (country === "austria") {
    let insurance = Math.round((power * 100) / age + 50);
    cost.innerHTML = `${name}, your insurance costs ${insurance}€`;
  } else if (country === "hungary") {
    let insurance = Math.round((power * 120) / age + 100);
    cost.innerHTML = `${name}, your insurance costs ${insurance}€`;
  } else if (country === "greece") {
    let insurance = Math.round((power * 150) / (age + 3) + 50);
    cost.innerHTML = `${name}, your insurance costs ${insurance}€`;
  }
}
