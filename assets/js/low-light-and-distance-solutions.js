// //distance image switch
// const image = document.getElementById('zoom-in-out');

// let toggle = true;
// image.addEventListener('click', function() {
//     toggle = !toggle;
//     if(toggle){
//         image.style.transform = "scale(1)";
//         image.src = "./assets/images/capability-images/llandds-top.webp";
//     } else {
//         image.style.transition = "2s";
//         image.style.transform = "scale(4)";
//         setTimeout(() => image.src = "./assets/images/capability-images/llandds-bottom.webp", 1000);
//         setTimeout(() => image.style.transition = "0s", 1000);
//         setTimeout(() => image.style.transform = "scale(1)", 1000);
//     }
// })

//low light image slider
var container = document.querySelector('.before-after-container');
var sliderEl = document.querySelector('.slider');
sliderEl.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})
