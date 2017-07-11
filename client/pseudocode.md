load APP
if has navigator, 
    getCurrentPosition()
    fetchWeather

else 
    show message "Sorry we couldn't detect your current location.
    Please search for where you're at to get the weather forecast"


store data:
    - consolidated_weather
    - "title" (city name)


state {
    forecast: {
    results: data.consolidated_weather
    city: data.title
},
    location: {
    woeid: ...
}
}
