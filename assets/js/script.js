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
    headerEl.classList.toggle('inactive');
    navEl.classList.toggle('inactive');
    mainEl.classList.toggle('inactive');
    footerEl.classList.toggle('inactive');
    headerEl.style.filter="blur(0)";
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
submitIntakeFormEl.forEach(intakeForm => {
    intakeForm.addEventListener("click", function handleClick(event) {
        if(document.getElementById("name").value === "" || document.getElementById("name").value == null) {
            event.preventDefault();
            document.getElementsByName("name")[0].placeholder="*Your Name is required";
        }
        if(document.getElementById("email").value === "" || document.getElementById("email").value == null) {
            event.preventDefault();
            document.getElementsByName("email")[0].placeholder="*Your Email is required";
        } 
        if(document.getElementById("phone").value === "" || document.getElementById("phone").value == null) {
            event.preventDefault();
            document.getElementsByName("phone")[0].placeholder="*Your Phone Number is required";
        } 
        if(document.getElementById("contact-message").value === "" || document.getElementById("contact-message").value == null) {
            event.preventDefault();
            document.getElementsByName("contact-message")[0].placeholder="*Please tell us the services you require";
        } else {
            document.getElementById("intake-form").style["pointer-events"] = "none";
            document.getElementById("submit-form").style.display = "none";
            document.getElementById("loader").style.display = "block";
        }
    })
})

// load better hero images

var heroImage = document.getElementById("hero-banner");

heroImage.onload = function() {
    if(heroImage.getAttribute('src') === './assets/images/preload-hero-image.webp'){
        heroImage.src = "./assets/images/hero-image.webp";
    }
    if(heroImage.getAttribute('src') === './assets/images/preload-capabilities-hero.webp'){
        heroImage.src = "./assets/images/capabilities-hero.webp";
    }
    if(heroImage.getAttribute('src') === './assets/images/preload-services-hero.webp'){
        heroImage.src = "./assets/images/services-hero.webp";
    }
}