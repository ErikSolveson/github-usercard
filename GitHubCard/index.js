import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')

// axios.get(`https://api.github.com/users/eriksolveson`)
// .then((response) => {
//   const reseponseData = response.data
  
//   const card = cardMaker(reseponseData)
//   cards.appendChild(card)

  
// })
// .catch()
// .finally(  )

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get(`https://api.github.com/users/eriksolveson`)
.then((response) => {
  const reseponseData = response.data
  const card = cardMaker(reseponseData)
  cards.appendChild(card)
})
.catch()
.finally(  )



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then((response) => {
    const reseponseData = response.data
    console.log(reseponseData)
    const card = cardMaker(reseponseData)
    cards.appendChild(card)})
    .catch(console.log('there was an error!'))
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker({name, followers,following,location,login, avatar_url, html_url}) {
  //create all the elements we will be needing
  const card = document.createElement('div')
  const profileImg = document.createElement('img')
  const cardInfoSection = document.createElement('div')
  const titleName = document.createElement('h3') 
  const userP = document.createElement('p') 
  const locationP = document.createElement('p') 
  const profileP = document.createElement('p') 
  const ProfileLink = document.createElement('a') 
  const followersP = document.createElement('p') 
  const followeringP = document.createElement('p') 
  const BioP = document.createElement('p') 

  //add them in the right hierachy
  card.appendChild(profileImg)
  card.appendChild(cardInfoSection)
  cardInfoSection.appendChild(titleName)
  cardInfoSection.appendChild(userP)
  cardInfoSection.appendChild(locationP)
  cardInfoSection.appendChild(profileP)
  cardInfoSection.appendChild(followersP)
  cardInfoSection.appendChild(followeringP)
  cardInfoSection.appendChild(BioP)
  profileP.appendChild(ProfileLink)

  //add the appropriate classes to the elements
  card.classList.add('card')
  cardInfoSection.classList.add('card-info')
  titleName.classList.add('name')
  userP.classList.add('username')

  //assign the content to the  relevent element
profileImg.src = avatar_url;
titleName.textContent = name
userP.textContent = login
locationP.textContent = location
ProfileLink.href = html_url
profileImg.innerHTML = html_url
followersP.textContent = followers;
followeringP.textContent = following;

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
