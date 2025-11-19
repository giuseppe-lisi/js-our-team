const url = 'https://api.thedogapi.com/v1/images/search?limit=10';
const loadMore = document.getElementById('load');

function getImgFromArrOfObj(array) {
    const dogImgUrls = [];

    for (let i = 0; i < array.length; i++) {
        const dogObj = array[i];
        dogImgUrls.push(dogObj.url);
    }
    console.log(dogImgUrls);
    return dogImgUrls.join();

}

loadMore.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(dogsArray => getImgFromArrOfObj(dogsArray))
        .catch(error => console.error(error));
});






