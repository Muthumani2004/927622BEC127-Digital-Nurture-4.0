document.addEventListener("DOMContentLoaded", function () {
    var accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Accordion item toggled!");
        });
    });
});
