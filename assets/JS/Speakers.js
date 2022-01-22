const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const slides = $$('.slide__Speakers')
const nodeNext = $('.slide__directional--next')
const nodePrev = $('.slide__directional--prev')
const sizeSlide = slides.length
let numberSlide = 0;
function Next(){
    slides.forEach(slide => {
        slide.classList.remove('activeSpeakers')
    });
    numberSlide++;
    if(numberSlide > (sizeSlide-1)){
        numberSlide=0
    }
    slides[numberSlide].classList.add('activeSpeakers')
}

nodeNext.addEventListener('click',Next);

function Prev(){
    slides.forEach(slide => {
        slide.classList.remove('activeSpeakers')
    });
    numberSlide--;
    if(numberSlide < 0){
        numberSlide=sizeSlide-1
    }
    slides[numberSlide].classList.add('activeSpeakers')
}

nodePrev.addEventListener('click', Prev)

setInterval(()=>{
    Next()
},7000)
