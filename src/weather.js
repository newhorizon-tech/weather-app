const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const showWeather = (data) => {
  console.log(data)
}


const getWeather = async (city, id) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
  const result = await getData(url)

  showWeather(result)
}

export {
  getWeather
}
