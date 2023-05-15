const slider = document.querySelector('.slider-container')
let slides = document.querySelectorAll('.slide')
const slide = document.querySelector('.slide')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
let index = 1

//clone first and last slides

const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slider.append(firstClone)
slider.prepend(lastClone)

//set the slides next to one another

slides = document.querySelectorAll('.slide')

const setSlidesPosition = (slide, index) => {
  slide.style.left = `${index * 105}%`
}

slides.forEach(setSlidesPosition)

// move carousel

let counter = 3

btnLeft.addEventListener('click', function () {
  counter--
  carousel()
})

btnRight.addEventListener('click', function () {
  counter++
  carousel()
})

function carousel() {
  if (counter === slides.length - 1) {
    counter = 1
  }

  if (counter === 0) {
    counter = slides.length - 2
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 105}%)`
    // slide.style.transition = 'all 0.4s'
  })
}

// slide.addEventListener('transitioned', function () {
//   if (slides[index].id === firstClone.id) {
//     slide.style.transition = 'none'
//   }
// })
