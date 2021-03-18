import {keys} from '../env'

const getData = async (url) => {
  const response = await fetch(url);
  return response.json();
}

const displayBackground = (data) => {
  const body = document.querySelector("body")
  body.style.backgroundImage = data.data
}

const getBackground = (theme) => {
  const url = `http://api.giphy.com/v1/stickers/search?q=${theme}&api_key=${keys.gifs}&limit=1&rating=g`
  const result = getData(url)
  displayBackground(result)
}
