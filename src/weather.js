const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const showWeather = (data) => {
  console.log(data.main)
  console.log(data.weather[0])
  const icon = document.createElement("img")
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  console.log(icon.src)
}


const getWeather = async (city, id) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
  const result = await getData(url)

  showWeather(result)
}

export {
  getWeather
}
