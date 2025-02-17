
function checkAnswer(answer) {
    if (answer === "No") {
        alert("You are not allowed!");
        window.location.href = "https://www.google.com";
    } else {
        alert("Welcome, you are allowed!");
        document.getElementById('check').style.display = 'none'; 
        document.getElementById('content').style.display = 'block'; 
    }
}

function showNewsAlert() {
    alert('No News yet!');
}

function showResultsAlert() {
    alert('No Results yet!');
}

function showTablesAlert() {
    alert('No tables yet!');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newsLink').addEventListener('click', showNewsAlert);
    document.getElementById('resultsLink').addEventListener('click', showResultsAlert);
    document.getElementById('tablesLink').addEventListener('click', showTablesAlert);
});
