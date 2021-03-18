import './style.scss'

import {keys} from '../env'
import {getWeather} from './weather'
import {isEmpty} from './validation'

const mainBtn = document.querySelector("#city-btn")
const mainField = document.querySelector("#city-field")

mainBtn.addEventListener('click', () => {
  const city = mainField.value.trim();
  if (!isEmpty(city)) {
    getWeather(city, keys.weather)
  } else {
    console.log("Invalid Input")
  }
})
