const photographHeader = document.querySelector('.photograph-header');
const name = document.querySelector('.name');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function getPhotographers() {
    //faire un fetch
    //récupérer les données dans une fonction spéciale ' displayData'.
    fetch('scripts/utils/photographers.json')
    .then(response => response.json())
    .then(photographers => photographers = displayData(photographers.photographers))
}

async function displayData(photographers) {
    const main = document.querySelector('#main');
    photographers.forEach((photographer) => {
        const photographerProfilModel = profilFactory(photographer.name, photographer.price, photographer.tagline, photographer.city, photographer.country, photographer.id, photographer.portrait);
        //const photographerMediaModel = mediaFactory();
        const userProfilDOM = photographerProfilModel.getUserProfilDOM();
        main.appendChild(userProfilDOM);
    });
};

async function init() {
    let photographers = [];
    // Récupère les datas des photographes
    await getPhotographers();
    displayData(photographers);
};