const staffSlider = document.getElementById("staff-slider");
const suppliesSlider = document.getElementById("supplies-slider");
const budgetSlider = document.getElementById("budget-slider");

const patientCount = document.getElementById("patient-count");
const staffLevel = document.getElementById("staff-level");
const supplyLevel = document.getElementById("supply-level");
const budgetLevel = document.getElementById("budget-level");

const efficiencyScore = document.getElementById("efficiency-score");
const feedbackText = document.getElementById("feedback-text");

let patients = 10;

// Update patient count and efficiency score
function updateValues() {
  const staff = parseInt(staffSlider.value);
  const supplies = parseInt(suppliesSlider.value);
  const budget = parseInt(budgetSlider.value);

  staffLevel.textContent = staff;
  supplyLevel.textContent = supplies;
  budgetLevel.textContent = budget;

  // Patient flow simulation
  const treatedPatients = Math.min(staff * 0.3 + supplies * 0.2, patients);
  patients -= treatedPatients;
  patientCount.textContent = Math.max(0, Math.floor(patients));

  // Calculate efficiency score
  const score = Math.round((staff * 2 + supplies - budget * 0.5) / 3);
  efficiencyScore.textContent = `Efficiency Score: ${score}`;

  // Feedback
  if (score > 80) {
    feedbackText.textContent = "Excellent! Your hospital is running optimally.";
  } else if (score > 50) {
    feedbackText.textContent = "Good! Consider slight improvements.";
  } else {
    feedbackText.textContent = "Warning: Your hospital is underperforming.";
  }
}

// Load scenarios
function loadScenario(scenario) {
  if (scenario === "stable") {
    patients = 10;
    staffSlider.value = 50;
    suppliesSlider.value = 50;
    budgetSlider.value = 50;
  } else if (scenario === "pandemic") {
    patients = 50;
    staffSlider.value = 70;
    suppliesSlider.value = 30;
    budgetSlider.value = 80;
  } else if (scenario === "budgetCuts") {
    patients = 20;
    staffSlider.value = 30;
    suppliesSlider.value = 60;
    budgetSlider.value = 20;
  }
  updateValues();
}

// Initialize
staffSlider.addEventListener("input", updateValues);
suppliesSlider.addEventListener("input", updateValues);
budgetSlider.addEventListener("input", updateValues);

updateValues();
