const form = document.querySelector('[data-js="change-location"]')
const divCard = document.querySelector('[data-js="div-show"]')

const containerName = document.querySelector('[data-js="nome"]')
const containerClima = document.querySelector('[data-js="clima"]')
const containerTemperature = document.querySelector('[data-js="temperature"]')

const containerTime = document.querySelector('[data-js="time"]')
const containerIcon = document.querySelector('[data-js="time-icon"]')


const getAndShowInfo = async inputValue=>{

    const [{Key, LocalizedName}] = await fecthData(getUrlCity(inputValue))
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getWeatherData(Key)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    containerIcon.innerHTML = timeIcon
    containerTime.src = IsDayTime === true ? `./src/day.svg` : `./src/night.svg`
    containerClima.textContent = `${WeatherText}`
    containerName.textContent = `${LocalizedName}`
    containerTemperature.textContent = `${Temperature.Metric.Value}`

    showCityCard()
}

const showCityCard = ()=>{
    if(divCard.classList.contains('d-none')){
    divCard.classList.remove('d-none')
    }
}

showLocalStorageCity = () =>{
    const city = localStorage.getItem('city')
    if(city){
        getAndShowInfo(city)
    }
}

form.addEventListener('submit', async event=>{
    event.preventDefault()
    const inputValue = event.target.city.value

    showCityCard()
    getAndShowInfo(inputValue)
    localStorage.setItem('city',inputValue)
    event.target.reset()
})

showLocalStorageCity()



