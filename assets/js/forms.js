printButtonEl = document.querySelectorAll('.printbtn');

printButtonEl.forEach(printButton => {
    printButton.addEventListener("click", function handleClick (event) {
        print();
    })
})