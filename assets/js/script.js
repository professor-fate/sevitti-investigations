//intake form buttons
var contactUsButtonEl = document.querySelectorAll(".contact-form");
var closeFormButtonEl = document.querySelector("#close-form");
var submitIntakeFormEl = document.querySelectorAll("#submit-form");

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
        headerEl.classList.toggle('active');
        navEl.classList.toggle('active');
        mainEl.classList.toggle('active');
        footerEl.classList.toggle('active');
        intakeFormEl.style.display = "block";
        headerEl.style.filter="blur(10px)";
        navEl.style.filter="blur(10px)";
        mainEl.style.filter="blur(10px)";
        footerEl.style.filter="blur(10px)";

        headerEl.style['pointer-events'] = 'none';
        navEl.style['pointer-events'] = 'none';
        mainEl.style['pointer-events'] = 'none';
        footerEl.style['pointer-events'] = 'none';

        headerEl.style['user-select'] = 'none';
        navEl.style['user-select'] = 'none';
        mainEl.style['user-select'] = 'none';
        footerEl.style['user-select'] = 'none';
    })
})

//close intake form
closeFormButtonEl.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    intakeFormEl.style.display = "none";
    headerEl.classList.toggle('inactive');
    navEl.classList.toggle('inactive');
    mainEl.classList.toggle('inactive');
    footerEl.classList.toggle('inactive');
    headerEl.style.filter="blur(0)";
    navEl.style.filter="blur(0)";
    mainEl.style.filter="blur(0)";
    footerEl.style.filter="blur(0)";

    headerEl.style['pointer-events'] = 'auto';
        navEl.style['pointer-events'] = 'auto';
        mainEl.style['pointer-events'] = 'auto';
        footerEl.style['pointer-events'] = 'auto';

        headerEl.style['user-select'] = 'auto';
        navEl.style['user-select'] = 'auto';
        mainEl.style['user-select'] = 'auto';
        footerEl.style['user-select'] = 'auto';
})

//popup submit
// submitIntakeFormEl.forEach(intakeForm => {
//     intakeForm.addEventListener("click", function handleClick(event) {
//         event.preventDefault();
//         console.log("clicked");
//         var name = document.getElementById("name").value
//         console.log(name);
//         var email = document.getElementById("email").value
//         console.log(email);
//         var phone = document.getElementById("phone").value
//         console.log(phone);
//         var message = document.getElementById("contact-message").value
//         console.log(message);
//     })
// })