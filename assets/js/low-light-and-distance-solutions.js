//distance image switch
const image = document.getElementById('zoom-in-out');

let toggle = true;
image.addEventListener('click', function() {
    toggle = !toggle;
    if(toggle){
        image.style.transform = "scale(1)";
        setTimeout(() => image.src = "./assets/images/capability-images/llandds-top.png", 1100);
    } else {
        image.style.transform = "scale(4)";
        setTimeout(() => image.src = "./assets/images/capability-images/llandds-bottom.png", 1100);
    }
})

//low light image slider
var container = document.querySelector('.before-after-container');
var sliderEl = document.querySelector('.slider');
sliderEl.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})
