let patientsWaiting = 5;
let patientsTreated = 0;
let supplies = 100;
let budget = 5000;

function updateDashboard() {
  document.getElementById("patients-waiting").textContent = patientsWaiting;
  document.getElementById("patients-treated").textContent = patientsTreated;
  document.getElementById("supplies").textContent = supplies;
  document.getElementById("budget").textContent = budget;
}

function hireStaff() {
  if (budget >= 500) {
    budget -= 500;
    patientsWaiting -= 2;
    patientsTreated += 2;
    updateDashboard();
  } else {
    alert("Not enough budget to hire staff!");
  }
}

function buySupplies() {
  if (budget >= 200) {
    budget -= 200;
    supplies += 50;
    updateDashboard();
  } else {
    alert("Not enough budget to buy supplies!");
  }
}

function speedUp() {
  if (budget >= 300) {
    budget -= 300;
    patientsWaiting -= 3;
    patientsTreated += 3;
    supplies -= 10;
    updateDashboard();
  } else {
    alert("Not enough budget to speed up treatment!");
  }
}

function restartGame() {
  patientsWaiting = 5;
  patientsTreated = 0;
  supplies = 100;
  budget = 5000;
  updateDashboard();
  document.getElementById("game-over").style.display = "none";
}

function checkGameOver() {
  if (supplies <= 0 || budget <= 0) {
    document.getElementById("game-over").style.display = "block";
    document.getElementById("summary").textContent = `Patients Treated: ${patientsTreated}`;
  }
}

setInterval(() => {
  if (patientsWaiting > 0) {
    patientsWaiting += 1;
    checkGameOver();
    updateDashboard();
  }
}, 3000);

updateDashboard();
