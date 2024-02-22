document.addEventListener('DOMContentLoaded', function() {
    // Set the "Date of Application" to today
    const today = new Date();
    document.getElementById('dateOfApplication').value = today.toISOString().split('T')[0];
    // Set the "Follow up date" to two weeks from today
    const twoWeeksFromNow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
    document.getElementById('followUpDate').value = twoWeeksFromNow.toISOString().split('T')[0];
    // Cohort input validation
    const cohortInput = document.getElementById("cohort");
    cohortInput.addEventListener("input", function () {
        if (cohortInput.value < 1 || cohortInput.value > 100) {
            cohortInput.setCustomValidity("Please enter a cohort number between 1 and 100.");
        } else {
            cohortInput.setCustomValidity("");
        }
    });
});

/*Validates URLs*/
document.getElementById("DescriptionUrl").addEventListener("input", function () {
    var inputUrl = this.value.trim();
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlRegex.test(inputUrl)) {
        this.setCustomValidity('');
        document.getElementById("urlHelp").style.display = 'none';
    } else {
        this.setCustomValidity('Invalid URL. Please enter a valid URL.');
        document.getElementById("urlHelp").style.display = 'block';
    }
});
/*Validate Checkbox*/
function checkAndSubmit() {
    var checkBoxes = document.getElementsByName("checkboxes[]");
    var atLeastOneChecked = false;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            atLeastOneChecked = true;
            break;
        }
    }
    var messageElement = document.getElementById("checkboxMessage");
    if (!atLeastOneChecked) {
        messageElement.style.display = "block"; // Show the message
        return false; // Prevent form submission
    }
    messageElement.style.display = "none"; // Hide the message
    return true; // Allow form submission
}
