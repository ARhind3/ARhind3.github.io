// Game state variables
let patientsWaiting = 5;
let patientsTreated = 0;
let supplies = 100;
let budget = 5000;
let maxQueue = 10;
let gameRunning = true;

// Update the dashboard UI
function updateDashboard() {
  document.getElementById("patients-waiting").textContent = patientsWaiting;
  document.getElementById("patients-treated").textContent = patientsTreated;
  document.getElementById("supplies").textContent = supplies;
  document.getElementById("budget").textContent = budget;
}

// Add patients to the queue
function addPatient() {
  if (!gameRunning) return;

  if (patientsWaiting < maxQueue) {
    patientsWaiting++;
    updateQueue();
  } else {
    alert("Queue overflow! Patients are leaving!");
    budget -= 200; // Penalty for patients leaving
    updateDashboard();
    checkGameOver();
  }
}

// Hire staff to treat more patients
function hireStaff() {
  if (budget >= 500) {
    budget -= 500;
    patientsWaiting -= 2;
    patientsTreated += 2;
    supplies -= 10;
    updateDashboard();
    updateQueue();
    checkGameOver();
  } else {
    alert("Not enough budget to hire staff!");
  }
}

// Buy more medical supplies
function buySupplies() {
  if (budget >= 200) {
    budget -= 200;
    supplies += 50;
    updateDashboard();
  } else {
    alert("Not enough budget to buy supplies!");
  }
}

// Speed up treatment for critical cases
function speedUp() {
  if (budget >= 300) {
    budget -= 300;
    patientsWaiting -= 3;
    patientsTreated += 3;
    supplies -= 20;
    updateDashboard();
    updateQueue();
    checkGameOver();
  } else {
    alert("Not enough budget to speed up treatment!");
  }
}

// Check game over conditions
function checkGameOver() {
  if (supplies <= 0 || budget <= 0) {
    gameRunning = false;
    document.getElementById("game-over").style.display = "block";
    document.getElementById("summary").textContent = `Patients Treated: ${patientsTreated}`;
  }
}

// Update the queue UI
function updateQueue() {
  const queueList = document.getElementById("patient-queue");
  queueList.innerHTML = "";
  for (let i = 0; i < patientsWaiting; i++) {
    const li = document.createElement("li");
    li.textContent = `Patient ${i + 1}`;
    queueList.appendChild(li);
  }
}

// Restart the game
function restartGame() {
  patientsWaiting = 5;
  patientsTreated = 0;
  supplies = 100;
  budget = 5000;
  gameRunning = true;
  updateDashboard();
  updateQueue();
  document.getElementById("game-over").style.display = "none";
}

// Simulate patient arrivals
setInterval(() => {
  if (gameRunning) {
    addPatient();
    checkGameOver();
  }
}, 5000);

// Initialize the game
updateDashboard();
updateQueue();
