import '../scss/style.scss'
import profile from '../images/icon-profile.png'
import logo from '../images/logo.png'
import heart from '../images/icon-heart.png'
import cross from '../images/icon-cross.png'
import chat from '../images/icon-chat.png'

import dogs from './data.js'
import Dog from './Dog.js'

document.getElementById('profile').src = profile
document.getElementById('logo').src = logo
document.getElementById('heart').src = heart
document.getElementById('cross').src = cross
document.getElementById('chat').src = chat

const indexArray = [0,1,2]
function getNextDog(dogsData) {
  const nextDog = dogsData[indexArray.shift()]
  return nextDog ? nextDog : {}
}

let dog = new Dog(getNextDog(dogs))

let isWaiting = false

document.getElementById('like').addEventListener('click' , ()=> {
  if(!isWaiting) {
    isWaiting = true
    dog.hasBeenLiked = true
    getBadge()
  }
  
})
document.getElementById('dislike').addEventListener('click' , ()=> {
  if(!isWaiting) {
    isWaiting = true
    dog.hasBeenSwiped = true
    getBadge()
  }
})

function getBadge() {
  render()
  setTimeout(() => {
    choice()
    isWaiting = false
  }, 1500)
}

function choice() {
  if(indexArray.length > 0) {
    dog = new Dog(getNextDog(dogs))
    render()
    } else {
      document.body.innerHTML = `<div id="endMessage">Sorry, no more dogs</div>`
  }
} 

function render() {
  document.getElementById('main').innerHTML = dog.getDog()
}

render()