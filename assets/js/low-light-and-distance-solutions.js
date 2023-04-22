//distance image switch

//low light image slider
var container = document.querySelector('.before-after-container');
var sliderEl = document.querySelector('.slider');
sliderEl.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})
