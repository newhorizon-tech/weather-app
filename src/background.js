
const displayBackground = (obj) => {
  const img = `url('${obj}')`
  document.body.style.backgroundImage = img
}

const getBackground = (theme) => {
  theme = encodeURI(theme)
  const url = `https://source.unsplash.com/featured/?${theme}`

  displayBackground(url)
}

export {getBackground}
