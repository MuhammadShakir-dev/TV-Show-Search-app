// Selecting all elemnts of HTML.
const form = document.querySelector('form')
const cont = document.querySelector('.container')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const clearbtn = document.querySelector('a')
const imgremove = document.querySelector('.imgRemover')

// sending request on server using axios.
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  let searchValue = form.elements.query.value
  let config = {
    params: {
      q: searchValue,
    },
  }
  let res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
  makeImages(res.data)
})

// funciton for creating and appending images.
let makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      let img = document.createElement('Img')
      img.src = result.show.image.medium
      cont.append(img)
    }
  }
}

// event listner for reset input value =  null.
clearbtn.addEventListener('click', () => {
  form.elements.query.value = ''
})

// event listner for removing all images inside container.
imgremove.addEventListener('click', () => {
  let images = cont.getElementsByTagName('img')
  while (images.length > 0) {
    cont.removeChild(images[0])
  }
})
