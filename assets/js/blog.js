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
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
        blog1.style.width = "96%";
        blog2.style.display = "none";
        blog3.style.display = "none";
        blog4.style.display = "none";
        blog5.style.display = "none";
        blog6.style.display = "none";
    } else {
        blog1.style.width = "46%";
        blog2.style.display = "block";
        blog3.style.display = "block";
        blog4.style.display = "block";
        blog5.style.display = "block";
        blog6.style.display = "block";
    }
});
blog2checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        blog1checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
        blog1.style.display = "none";
        blog2.style.width = "96%";
        blog3.style.display = "none";
        blog4.style.display = "none";
        blog5.style.display = "none";
        blog6.style.display = "none";
    } else {
        blog1.style.display = "block";
        blog2.style.width = "46%";
        blog3.style.display = "block";
        blog4.style.display = "block";
        blog5.style.display = "block";
        blog6.style.display = "block";
    }
});
blog3checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
        blog1.style.display = "none";
        blog2.style.display = "none";
        blog3.style.width = "96%";
        blog4.style.display = "none";
        blog5.style.display = "none";
        blog6.style.display = "none";
    } else {
        blog1.style.display = "block";
        blog2.style.display = "block";
        blog3.style.width = "46%";
        blog4.style.display = "block";
        blog5.style.display = "block";
        blog6.style.display = "block";
    }
});
blog4checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
        blog1.style.display = "none";
        blog2.style.display = "none";
        blog3.style.display = "none";
        blog4.style.width = "96%";
        blog5.style.display = "none";
        blog6.style.display = "none";
    } else {
        blog1.style.display = "block";
        blog2.style.display = "block";
        blog3.style.display = "block";
        blog4.style.width = "46%";
        blog5.style.display = "block";
        blog6.style.display = "block";
    }
});
blog5checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog6checkboxEl.checked = false;
        blog1.style.display = "none";
        blog2.style.display = "none";
        blog3.style.display = "none";
        blog4.style.display = "none";
        blog5.style.width = "96%";
        blog6.style.display = "none";
    } else {
        blog1.style.display = "block";
        blog2.style.display = "block";
        blog3.style.display = "block";
        blog4.style.display = "block";
        blog5.style.width = "46%";
        blog6.style.display = "block";
    }
});
blog6checkboxEl.addEventListener('change', function() {
    if(this.checked) {
        blog1checkboxEl.checked = false;
        blog2checkboxEl.checked = false;
        blog3checkboxEl.checked = false;
        blog4checkboxEl.checked = false;
        blog5checkboxEl.checked = false;
        blog1.style.display = "none";
        blog2.style.display = "none";
        blog3.style.display = "none";
        blog4.style.display = "none";
        blog5.style.display = "none";
        blog6.style.width = "96%";
    } else {
        blog1.style.display = "block";
        blog2.style.display = "block";
        blog3.style.display = "block";
        blog4.style.display = "block";
        blog5.style.display = "block";
        blog6.style.width = "46%";
    }
});