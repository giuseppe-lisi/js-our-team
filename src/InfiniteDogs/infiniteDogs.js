const url = 'https://api.thedogapi.com/v1/images/search?limit=9';
const loadMore = document.getElementById('load');

function getRandom(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function fetchDogs() {
    // fetch dell'array di oggetti con i cani e parse in json per
    fetch(url)
        .then(response => response.json())
        .then(dogs => printDogs(dogs))
    
        // in caso di errore dopo la richiesta stampa l'errore a schermo
        .catch(error => () => {
            console.log(error); 
            dogContainer.innerHTML += `<div>${error}</div>`
        });
}

/**
 * Stampa a schermo le immagini pervenute dalla dog o cat API
*/
function printDogs(dogObjArray) {
    // definisce il div in cui verranno stampate le immagini
    const dogContainer = document.getElementById('dog-img-container');

    // array dove saranno contenuti tutti gli oggetti 'cane'

    // per ogni oggetto prende l'url e lo imposta come src del div immagine
    // che viene aggiunto al container delle immagini dei cani
    for (let i = 0; i < dogObjArray.length - 1; i++) {
        const dogObj = dogObjArray[i];
        const randomHeight = getRandom(15, 30);
        
        // per ogni oggetto, prende e stampa soltanto l'immagine
        dogContainer.innerHTML += `
            <div class="img-card">
                <img src="${dogObj.url}">
            </div>
        `
    }

}

// al click viene fatta una richiesta all'API 
// che stamperà 9 immagini di cani a schermo
loadMore.addEventListener('click', fetchDogs)
