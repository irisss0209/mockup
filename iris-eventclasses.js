document.addEventListener("DOMContentLoaded", function() {
    // Get all options
    const options = document.querySelectorAll('.option');

    // Add click event listener to each option
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            options.forEach(opt => {
                opt.classList.remove('active');
            });

            // Add active class to the clicked option
            this.classList.add('active');
        });
    });
});
function makeTimer() {
    var endTime = new Date("April 25, 2024 18:00:00 PDT");
    var endTimeUnix = Date.parse(endTime) / 1000;

    var now = new Date();
    var nowUnix = Date.parse(now) / 1000;

    var timeLeft = endTimeUnix - nowUnix;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor(timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60));

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    document.querySelector(".days").innerHTML = days + "<span> days</span>";
    document.querySelector(".hours").innerHTML = hours + "<span> hours</span>";
    document.querySelector(".minutes").innerHTML = minutes + "<span> minutes</span>";
    document.querySelector(".seconds").innerHTML = seconds + "<span> seconds</span>";        

    var elements = document.querySelectorAll(".days, .hours, .minutes, .seconds");
    elements.forEach(function(element) {
        element.classList.add("show");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    makeTimer();
    setInterval(makeTimer, 1000);

    setTimeout(function() {
        document.querySelector('.timer-container').classList.add('slide-in');
        document.querySelectorAll('.days, .hours, .minutes, .seconds').forEach(function(element) {
            element.classList.remove('hide');
        });
    }, 2000);
});

