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
    const photographHeader = document.querySelector('.photograph-header');
    photographers.forEach((photographer) => {
        const photographerProfilModel = profilFactory(photographer);
        const userProfilDOM = photographerProfilModel.getUserProfilDOM();
        photographHeader.appendChild(userProfilDOM);
    });
};