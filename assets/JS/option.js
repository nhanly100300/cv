const chooses = document.querySelectorAll('.navigation__item');
const info = document.querySelectorAll('.container__information');

console.log(chooses);
chooses.forEach((choose , index)=>{
    const option = info[index]
    choose.onclick = function(){
        clickTop()
        document.querySelector('.navigation__item.active').classList.remove('active');
        document.querySelector('.container__information.activeInfo').classList.remove('activeInfo');
        this.classList.add('active')
        option.classList.add('activeInfo')
    }
})

function clickTop() {
    document.documentElement.scrollTop = 0;
}