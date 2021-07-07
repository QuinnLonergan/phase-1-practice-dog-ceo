
document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreeds()
})


function renderDogImages(pic) {
    console.log('render dogs called')
    console.log(pic)
    let img = document.createElement('img')
    img.src = pic
    document.querySelector("#dog-image-container").append(img)
}

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    console.log('fetch images called')
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data.message.forEach(renderDogImages))
}

function fetchBreeds(filter) {
    console.log('fetchbreeds log')
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            let allBreeds = Object.keys(data.message)
            let select = document.querySelector('#dog-breeds')
            select.textContent = ''
            if (filter){
                allBreeds = allBreeds.filter(elem => elem[0] === filter)
            }
            return allBreeds.forEach(renderDogBreeds)
        })
}


// document.getElementbyId('breed-dropdown').addEventListener("change", (e) => {
//     console.log(e)
//     let letter = e.target.outerText.value
//     fetchBreeds(letter)
// })

function renderDogBreeds(breed) {
    let li = document.createElement('li')
    li.textContent = breed
    document.querySelector('#dog-breeds').append(li)

    const select = document.querySelector('#breed-dropdown')
    select.addEventListener('change', (elem)=> {
        fetchBreeds(elem.target.value)
    })

    li.addEventListener("click", () => {
        li.style.color = "red"
    })

}