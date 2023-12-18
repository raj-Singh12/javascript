
// API - https://dog.ceo/api/breeds/image/random
// Promise - .then
// asynchronous programming


const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImageDiv.innerHTML = `<img src='${json.message}' height=100 width=100/>`
    })
}



    dogButton.onclick = () => getNewDog()