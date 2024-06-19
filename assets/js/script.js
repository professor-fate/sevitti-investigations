//intake form buttons
var contactUsButtonEl = document.querySelectorAll(".contact-form");

//DOM elements
var bodyEl = document.body
var headerEl = document.querySelector("#header");
var navEl = document.querySelector("#nav");
var mainEl = document.querySelector("#main");
var footerEl = document.querySelector("#footer");

// create intake form
function createForm () {
    const sect = document.createElement("section")
    sect.classList.add("intake-form")
    sect.setAttribute("id","intake-form")

    const formImage = document.createElement("img");
    formImage.src = "./assets/images/logo-sevitti-intake-form.webp";
    sect.appendChild(formImage)

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-form")
    closeButton.setAttribute("id", "close-form")
    closeButton.setAttribute("type", "close")
    closeButton.textContent = "X";
    sect.appendChild(closeButton)

    const hTwo = document.createElement("h2");
    hTwo.textContent = "Let's Get In Touch";
    sect.appendChild(hTwo)

    const formForm = document.createElement("form");
    formForm.setAttribute("action", "mail.php")
    formForm.setAttribute("method", "POST")
    sect.appendChild(formForm)
        
        const nameLabel = document.createElement("label");
        nameLabel.setAttribute("for", "name")
        nameLabel.textContent = "Enter full name:"
        formForm.appendChild(nameLabel);

        const nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("placeholder", "Your Name")
        nameInput.setAttribute("name", "name")
        nameInput.setAttribute("id", "name")
        nameInput.classList.add("form-input")
        formForm.appendChild(nameInput);

        const emailLabel = document.createElement("label");
        emailLabel.setAttribute("for", "email")
        emailLabel.textContent = "Enter email address:"
        formForm.appendChild(emailLabel);

        const emailInput = document.createElement("input")
        emailInput.setAttribute("type", "email")
        emailInput.setAttribute("placeholder", "Email Address")
        emailInput.setAttribute("name", "email")
        emailInput.setAttribute("id", "email")
        emailInput.classList.add("form-input")
        formForm.appendChild(emailInput);

        const phoneLabel = document.createElement("label");
        phoneLabel.setAttribute("for", "phone")
        phoneLabel.textContent = "Enter a telephone number:"
        formForm.appendChild(phoneLabel);

        const phoneInput = document.createElement("input")
        phoneInput.setAttribute("type", "tel")
        phoneInput.setAttribute("placeholder", "Phone Number")
        phoneInput.setAttribute("name", "phone")
        phoneInput.setAttribute("id", "phone")
        phoneInput.classList.add("form-input")
        formForm.appendChild(phoneInput);

        const messageLabel = document.createElement("label");
        messageLabel.setAttribute("for", "contact-message")
        messageLabel.textContent = "How may we help you?:"
        formForm.appendChild(messageLabel);

        const textArea = document.createElement("textarea")
        textArea.setAttribute("id", "contact-message")
        textArea.setAttribute("name", "contact-message")
        textArea.setAttribute("placeholder", "Description of services you require")
        formForm.appendChild(textArea)

        const submitButton = document.createElement("button");
        submitButton.setAttribute("type", "submit")
        submitButton.setAttribute("name", "submit")
        submitButton.setAttribute("id", "submit-form")
        submitButton.classList.add("form-submit")
        submitButton.textContent = "Submit";
        formForm.appendChild(submitButton);

        const loadWidget = document.createElement("div");
        loadWidget.classList.add("loader")
        loadWidget.setAttribute("id", "loader")
        formForm.appendChild(loadWidget)

    body.append(sect)
}

//popup intake form
contactUsButtonEl.forEach(contactForm => {
    contactForm.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        
        createForm();
        
        var intakeFormEl = document.querySelector("#intake-form");
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

        var submitIntakeFormEl = document.querySelectorAll("#submit-form");

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

        var closeFormButtonEl = document.querySelector("#close-form");

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

                location.reload();
        })

    })
})

//if turnstile token is received, activate submit button and change it's color to #880808


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


    // window.onloadTurnstileCallback = function () {
    //     turnstile.render('#example-container', {
    //         sitekey: '0x4AAAAAAAJhX3rV2wGFi1bY',
    //         callback: function(token) {
    //             console.log(`Challenge Success ${token}`);
    //             document.getElementById("submit-form").style['background-color'] = "#880808";
    //         },
    //     });
    // };



    //turnstile code

    // This is the demo secret key. In production, we recommend

// const SECRET_KEY = $process.env.TURNSTILE_SECRET_KEY

// async function handlePost(request) {
// 	const body = await request.formData();
// 	// Turnstile injects a token in "cf-turnstile-response".
// 	const token = body.get('cf-turnstile-response');
// 	const ip = request.headers.get('CF-Connecting-IP');

// 	// Validate the token by calling the
// 	// "/siteverify" API endpoint.
// 	let formData = new FormData();
// 	formData.append('secret', SECRET_KEY);
// 	formData.append('response', token);
// 	formData.append('remoteip', ip);

// 	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
// 	const result = await fetch(url, {
// 		body: formData,
// 		method: 'POST',
// 	});

// 	const outcome = await result.json();
// 	if (outcome.success) {
// 		console.log("it works!");
// 	}
// }