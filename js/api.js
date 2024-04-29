// api settings
const API_KEY = "86659a198fa9635ad48af85266534a97"

async function fetchWeatherData(city, units) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
        )
        // console.log(response.json())
        if (!response.ok) {
            throw new Error("İstek Başarılı değil")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
export default fetchWeatherData;