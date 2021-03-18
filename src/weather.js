import {kToC, kToF} from './units'

const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const showWeather = (data) => {
  console.log(data.main)
  console.log(data.weather[0])

  const mainCard = document.querySelector('.card');
  mainCard.style.opacity = 0
  mainCard.style.display = "block"
  mainCard.textContent = ""

  const temp = document.createElement('p')
  temp.setAttribute("id","temp")
  temp.textContent = `Temperature: ${kToC(data.main.temp)} C`

  const desc = document.createElement('p')
  desc.setAttribute("id","desc")
  desc.textContent = data.weather[0].description

  const icon = document.createElement("img")
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`


  mainCard.append(temp,desc, icon)
  mainCard.style.opacity = 100

}


const getWeather = async (city, id) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
  const result = await getData(url)

  showWeather(result)
}

export {
  getWeather
}
