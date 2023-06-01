// print button
printButtonEl = document.querySelectorAll('.printbtn');

printButtonEl.forEach(printButton => {
    printButton.addEventListener("click", function handleClick (event) {
        print();
    })
})

//display form
var headerEl = document.querySelector("#header");
var navEl = document.querySelector("#nav");
var mainEl = document.querySelector("#main");
var footerEl = document.querySelector("#footer");

requestNewButtonEl = document.querySelector('#ir-new');
requestNewFormEl = document.querySelector('#request-new')

requestNewButtonEl.addEventListener("click", function handleClick (event) {
    requestNewFormEl.style.display = "block";
    headerEl.style.display="none";
    navEl.style.display="none";
    mainEl.style.display="none";
    footerEl.style.display="none";
})

requestResearchButtonEl = document.querySelector('#ir-research');
requestResearchFormEl = document.querySelector('#request-research')

requestResearchButtonEl.addEventListener("click", function handleClick (event) {
    requestResearchFormEl.style.display = "block";
    headerEl.style.display="none";
    navEl.style.display="none";
    mainEl.style.display="none";
    footerEl.style.display="none";
})