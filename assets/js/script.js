//intake form buttons
var contactUsButtonEl = document.querySelectorAll(".contact-form");

//DOM elements
var intakeFormEl = document.querySelector("#intake-form");
var bodyEl = document.querySelector("#body");
var headerEl = document.querySelector("#header");
var navEl = document.querySelector("#nav");
var mainEl = document.querySelector("#main");
var footerEl = document.querySelector("#footer");

//popup intake form
contactUsButtonEl.forEach(contactForm => {
    contactForm.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        console.log("clicked!");
        intakeFormEl.style.display = "block";
        bodyEl.style.background = "#d9d9d9";
        headerEl.style.display = "none";
        navEl.style.display = "none";
        mainEl.style.display = "none";
        footerEl.style.display = "none";
    })
})