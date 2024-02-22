document.addEventListener('DOMContentLoaded', function() {
    // Set the "Date of Application" to today
    const today = new Date();
    document.getElementById('dateOfApplication').value = today.toISOString().split('T')[0];

    // Set the "Follow up date" to two weeks from today
    const twoWeeksFromNow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
    document.getElementById('followUpDate').value = twoWeeksFromNow.toISOString().split('T')[0];
});