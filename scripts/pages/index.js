
   async function getPhotographers() {
        //faire un fetch
        //récupérer les données dans une fonction spéciale ' displayData'.
        fetch('scripts/utils/photographers.json')
        .then(response => response.json())
        .then(photographers => displayData(photographers.photographers))
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer.name, photographer.price, photographer.tagline, photographer.city, photographer.country, photographer.id, photographer.portrait);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        let photographers = [];
        // Récupère les datas des photographes
        await getPhotographers();
        displayData(photographers);
    };
    
    init();
    