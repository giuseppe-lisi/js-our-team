const url = 'https://api.thedogapi.com/v1/images/search?limit=10';
const loadMore = document.getElementById('load');

function printDogs(dogImgs){
    const dogContainer = document.getElementById('dog-img-container');

    for (let i = 0; i < dogImgs.length; i++) {
        const dogImg = dogImgs[i];
        dogContainer.innerHTML += `<img src="${dogImg}">`
    }
}

function getImgFromArrOfObj(array) {
    const dogImgUrls = [];

    for (let i = 0; i < array.length; i++) {
        const dogObj = array[i];
        dogImgUrls.push(dogObj.url);
    }
    console.log(dogImgUrls);
    return dogImgUrls;
}

loadMore.addEventListener('click', () => {
    fetch(url)
        // fetch dell'array con i cani e parsa in json
        .then(response => response.json())
        .then(dogsArray => printDogs(getImgFromArrOfObj(dogsArray)))
        .then(logThis => console.log(logThis))
        .catch(error => console.error(error));
});

