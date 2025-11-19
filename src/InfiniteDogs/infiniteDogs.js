let animal = 'dog';
const switchMode = document.getElementById('switch');

function fetchDogs() {
    const url = `https://api.the${animal}api.com/v1/images/search?limit=9`;
    // fetch dell'array di oggetti con i cani e parse in json
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
    const dogCol1 = document.getElementById('dog-img-col1');
    const dogCol2 = document.getElementById('dog-img-col2');
    const dogCol3 = document.getElementById('dog-img-col3');

    // array dove saranno contenuti tutti gli oggetti 'cane'

    // per ogni oggetto prende l'url e lo imposta come src del div immagine
    // che viene aggiunto al container delle immagini dei cani
    for (let i = 0; i < dogObjArray.length - 1; i++) {
        const dogObj = dogObjArray[i];
        
        // per ogni oggetto, prende e stampa soltanto l'immagine
        if (i <= 2) {
            dogCol1.innerHTML += `<div><img src="${dogObj.url}"></div>`
        }
        if (i >= 3 && i <= 5) {
            dogCol2.innerHTML += `<div><img src="${dogObj.url}"></div>`
        }
        if (i >= 6) {
            dogCol3.innerHTML += `<div><img src="${dogObj.url}"></div>`
        }
    }

}

// se l'altezza della finestra + la coord Y dello scroll
// è maggiore dell'altezza del body allora carica nuovi contenuti
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        fetchDogs();
    }
});

// cambia in modalità cani
switchMode.addEventListener('click', () => {
    const col1 = document.getElementById('dog-img-col1');
    const col2 = document.getElementById('dog-img-col2');
    const col3 = document.getElementById('dog-img-col3');
    const animalEl = document.getElementById('animal');

    if (animal == 'dog') {
        animal = 'cat';
        animalEl.innerText = 'Cats';
        col1.innerHTML = '';
        col2.innerHTML = '';
        col3.innerHTML = '';
        fetchDogs();
    } else {
        animal = 'dog';
        animalEl.innerText = 'Dogs';
        col1.innerHTML = '';
        col2.innerHTML = '';
        col3.innerHTML = '';
        fetchDogs();
    }
    
})
