const APIKey = `0RVl1NfFISWCpWk9EihQLdJB8EH1kGxb`

const getUrlCity = name =>`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${name}`

const getUrlWeather = Key =>`
http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fecthData = async url =>{
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Não foi possivel obter os dados!')
        }
        return response.json()
    }
    catch({erro, message}){
        console.log(`${erro}:${message}`)
    }
}

const cityData = async cityName => fecthData(getUrlCity(cityName))

const getWeatherData = async Key => fecthData(getUrlWeather(Key))

