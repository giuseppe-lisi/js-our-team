const url = 'https://api.thedogapi.com/v1/images/search?limit=9';
const loadMore = document.getElementById('load');

/**
 * Stampa a schermo le immagini pervenute dalla dog o cat API
 * @param {Object} Array An Array of objects fetched from thedogAPI or thecatAPI
*/
function printDogs(dogObjArray) {
    // definisce il div in cui verranno stampate le immagini
    const dogContainer = document.getElementById('dog-img-container');

    // per ogni oggetto prende l'url e lo imposta come src del div immagine
    // che viene aggiunto al container delle immagini dei cani
    for (let i = 0; i < dogObjArray.length; i++) {
        const dogObj = dogObjArray[i];
        // per ogni oggetto, prende e stampa soltanto l'immagine
        dogContainer.innerHTML += `<img src="${dogObj.url}">`
    }

}

// al click viene fatta una richiesta all'API 
// che stamperà 9 immagini di cani a schermo
loadMore.addEventListener('click', () => {
    fetch(url)
        // fetch dell'array di oggetti con i cani e parse in json
        .then(response => response.json())
        .then(dogs => printDogs(dogs))

        .catch(error => console.error(error));
});

