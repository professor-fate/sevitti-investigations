//intake form buttons
var contactUsButtonEl = document.querySelectorAll(".contact-form");
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
        console.log("clicked!");
        intakeFormEl.style.display = "block";
        bodyEl.style.background = "#d9d9d9";
        headerEl.style.display = "none";
        navEl.style.display = "none";
        mainEl.style.display = "none";
        footerEl.style.display = "none";
    })
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

//blog checkboxes
var blog1checkboxEl = document.querySelector("#blog1-toggle");
var blog2checkboxEl = document.querySelector("#blog2-toggle");
var blog3checkboxEl = document.querySelector("#blog3-toggle");
var blog4checkboxEl = document.querySelector("#blog4-toggle");
var blog5checkboxEl = document.querySelector("#blog5-toggle");
var blog6checkboxEl = document.querySelector("#blog6-toggle");

//blog entries
var blog1 = document.querySelector("#blog1");
var blog2 = document.querySelector("#blog2");
var blog3 = document.querySelector("#blog3");
var blog4 = document.querySelector("#blog4");
var blog5 = document.querySelector("#blog5");
var blog6 = document.querySelector("#blog6");

blog1checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
    }
});
blog2checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog1.style.order = "2";
        blog2.style.order = "1";
        blog3.style.order = "3";
        blog4.style.order = "4";
        blog5.style.order = "5";
        blog6.style.order = "6";
        blog1checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
    } else {
        console.log("unchecked");
        blog1.style.order = "1";
        blog2.style.order = "2";
        blog3.style.order = "3";
        blog4.style.order = "4";
        blog5.style.order = "5";
        blog6.style.order = "6";
    }
});
blog3checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
    }
});
blog4checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog1.style.order = "1";
        blog2.style.order = "2";
        blog3.style.order = "4";
        blog4.style.order = "3";
        blog5.style.order = "5";
        blog6.style.order = "6";
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
    } else {
        console.log("unchecked");
        blog1.style.order = "1";
        blog2.style.order = "2";
        blog3.style.order = "3";
        blog4.style.order = "4";
        blog5.style.order = "5";
        blog6.style.order = "6";
    }
});
blog5checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
    }
});
blog6checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        console.log("checked");
        blog1.style.order = "1";
        blog2.style.order = "2";
        blog3.style.order = "3";
        blog4.style.order = "4";
        blog5.style.order = "6";
        blog6.style.order = "5";
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
    } else {
        console.log("unchecked");
        blog1.style.order = "1";
        blog2.style.order = "2";
        blog3.style.order = "3";
        blog4.style.order = "4";
        blog5.style.order = "5";
        blog6.style.order = "6";
    }
});