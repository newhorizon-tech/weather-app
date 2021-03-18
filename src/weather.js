import {
  kToC,
  kToF,
} from './units';
import getBackground from './background';

const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const showWeather = (data) => {
  const mainCard = document.querySelector('.card');
  mainCard.style.display = 'none';
  mainCard.textContent = '';

  const city = document.createElement('h1');
  city.setAttribute('id', 'city');
  city.textContent = data.name;

  const temp = document.createElement('p');
  temp.setAttribute('id', 'temp');
  temp.textContent = 'Temperature: ';

  const tempValue = document.createElement('span');
  tempValue.setAttribute('id', 'temp-value');
  tempValue.textContent = kToC(data.main.temp);

  const tempUnit = document.createElement('span');
  tempUnit.setAttribute('id', 'unit');
  tempUnit.textContent = 'C';

  temp.append(tempValue, tempUnit);

  const desc = document.createElement('p');
  desc.setAttribute('id', 'desc');
  desc.textContent = data.weather[0].main;

  getBackground(data.weather[0].main);

  const icon = document.createElement('img');
  icon.setAttribute('id', 'icon');
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle unit (C/F)';
  toggleBtn.setAttribute('id', 'toggle-btn');

  mainCard.append(city, temp, desc, icon, toggleBtn);
  mainCard.style.display = 'flex';

  toggleBtn.addEventListener('click', () => {
    if (tempUnit.textContent === 'C') {
      tempValue.textContent = kToF(data.main.temp);
      tempUnit.textContent = 'F';
    } else {
      tempValue.textContent = kToC(data.main.temp);
      tempUnit.textContent = 'C';
    }
  });
};

const getWeather = async (city, id) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`;
  const result = await getData(url);

  showWeather(result);
};

export default getWeather;
