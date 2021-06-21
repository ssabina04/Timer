
const deadLine = '2021-07-29'

const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date())
    const days = Math.floor(t / (1000 * 60 * 60 * 24))
    const hours = Math.floor((t / (1000 * 60 * 60) % 24))
    const minutes = Math.floor((t / 1000 / 60) % 60)
    const seconds = Math.floor((t / 1000) % 60)

    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

const getZero = (num) => {
    if (num >= 0 && num < 10) {
        return '0' + num
    } else {
        return num
    }
}

const setClock = (selector, endtime) => {
    const timer = document.getElementById(selector)
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const timerInterval = setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const t = getTimeRemaining(endtime)

        days.innerHTML = getZero(t.days)
        hours.innerHTML = getZero(t.hours)
        minutes.innerHTML = getZero(t.minutes)
        seconds.innerHTML = getZero(t.seconds)

        if (t.total <= 0) {
            clearInterval(timerInterval)
        }
    }
}
setClock('timer__blocks', deadLine)