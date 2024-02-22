// Set IDs to perform JavaScript
// const emailInput = document.getElementById("email");
const cohortInput = document.getElementById("cohort");

// Set email and enter greenriver.edu is prefered but not required.
// emailInput.addEventListener("input", function () {
//     alert("Green River email is preferred but not required");
// });

// Cohort function 1 to 100 should be entered
cohortInput.addEventListener("input", function () {
    if (cohortInput.value < 1 || cohortInput.value > 100) {
        cohortInput.setCustomValidity("Please enter a cohort number between 1 and 100.");
    } else {
        cohortInput.setCustomValidity("");
    }
});

