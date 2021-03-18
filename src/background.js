
const displayBackground = async(obj) => {
  const img = `url('${obj}')`
  document.body.style.backgroundImage = img
}

const getBackground = async(theme) => {
  theme = encodeURI(theme)
  console.log(theme)
  const url = `https://source.unsplash.com/featured/?${theme},weather&fm=jpg`
  await displayBackground(url)
  console.log(url)
}

export {getBackground}
