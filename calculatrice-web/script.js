function addValue(val) {
  document.getElementById("result").value += val;
}

function calculate() {
  let result = document.getElementById("result").value;
  try {
    document.getElementById("result").value = eval(result);
  } catch {
    document.getElementById("result").value = "Erreur";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
