const steps = [
  "Step 1: Create HTML structure",
  "Step 2: Add input field",
  "Step 3: Style with CSS",
  "Step 4: Add task functionality"
];

let currentStep = 0;

function startProject() {
  document.getElementById("builder").style.display = "block";
  showStep();
}

function showStep() {
  document.getElementById("step-text").innerText = steps[currentStep];
  updateProgress();
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  }
}

function updateProgress() {
  document.getElementById("progress").innerText =
    `Progress: ${currentStep + 1}/${steps.length}`;
}
