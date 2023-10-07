// Function to update the timer
function updateTimer() {
    var startDate = new Date(2022, 9, 1);  // October 1, 2022 (months are 0-indexed)
    var currentDate = new Date();
    
    var totalDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    var totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth();
    var totalYears = currentDate.getFullYear() - startDate.getFullYear();
    
    // Adjust if the current date is before the start date in the current year
    if (currentDate.getMonth() < startDate.getMonth() || (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())) {
        totalYears--;
    }
    
    var days = totalDays % 30;  // Assuming an average month has 30 days
    var months = totalMonths % 12;
    
    var timerText = "Following the Handler's commands for " + totalYears + " years, " + months + " months, " + days + " days and remembering I'm supposed to be retired.";
    
    document.getElementById('timer').textContent = timerText;
}

// Set up an interval to update the timer every day at midnight
var now = new Date();
var millisecondsUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
setInterval(updateTimer, millisecondsUntilMidnight + 1000);  // extra 1 second to ensure we're into the next day

// Also update the timer immediately
updateTimer();
