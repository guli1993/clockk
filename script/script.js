const clock = {
    soniya: document.querySelector('.s'),
    daqiqa: document.querySelector('.m'),
    soat: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes')
}

const date = new Date()
let soniya = date.getSeconds() * (360 / 60)
let daqiqa = date.getMinutes() * (360 / 60)
let soat = date.getHours() * (360 / 60 )

clock.soniya.style.transform = `rotate(${soniya}deg)`
clock.soniya.style.transition = `1s linear`

clock.daqiqa.style.transform = `rotate(${daqiqa}deg)`
clock.daqiqa.style.transition = `1s linear`

clock.soat.style.transform = `rotate(${soat}deg)`
clock.soat.style.trtransition = `1s linear`

let secDeg = (360 / 60)
let minDeg = (60 / 360)
let hourDeg = (12 / 60)


function rotate() {
    const date = new Date()
    soniya += secDeg
    daqiqa += minDeg
    soat += hourDeg

    clock.soniya.style.transform = `rotate(${soniya}deg)`
    clock.soniya.style.transition = `1s linear`

    clock.daqiqa.style.transform = `rotate(${daqiqa}deg)`
    clock.daqiqa.style.transition = `1s linear`

    clock.soat.style.transform = `rotate(${soat}deg)`
    clock.soat.style.trtransition = `1s linear`

    clock.minutes.innerHTML = date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()
    clock.hours.innerHTML = date.getHours() <= 9 ? '0' + date.getHours() : date.getHours()

    setTimeout(() => {
        rotate()
    }, 1000);

}
rotate()

const secondante = {
    tabsItem: document.querySelectorAll('.tabsItem'),
    tabsContentItem: document.querySelectorAll('.tabsContentItem')
}

secondante.tabsItem.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        secondante.tabsItem.forEach((el, i) => {
            el.classList.remove('active')
            secondante.tabsContentItem[i].classList.remove('active')
        })
        el.classList.add('active')
        secondante.tabsContentItem[i].classList.add('active')
    })
})










