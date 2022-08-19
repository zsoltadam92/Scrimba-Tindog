import like from '../images/badge-like.png'
import nope from '../images/badge-nope.png'

class Dog {
  constructor(data) {
    Object.assign(this,data)
  }
  
  setBadge() {
    if(this.hasBeenLiked) {
    return `<img src=${like} alt="like" class="badge" />`    
    } else if(this.hasBeenSwiped) {
    return `<img src=${nope} alt="nope" class="badge" />`    
    }
  }
   
  getDog() {
    const {name,avatar,age,bio,hasBeenLiked,hasBeenSwiped} = this
    const badge = this.setBadge()

    return `
        <div class="main__content">
          <div class="main__picture">
            <img src="${avatar}" alt="dog" />
            ${hasBeenLiked||hasBeenSwiped ? badge : ""}
          </div>
          <div class="main__info" >
            <h2> ${name}, ${age}</h2>
            <p> ${bio}</p>
          </div>
        </div>
    `
  }
}

export default Dog