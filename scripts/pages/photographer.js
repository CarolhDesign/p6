const name = document.querySelector('.name');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function getPhotographers() {
    //faire un fetch
    //récupérer les données dans une fonction spéciale ' displayData'.
    fetch('scripts/utils/photographers.json')
    .then(response => response.json())
    .then(photographers => displayDataProfile(photographers.photographers))
}


async function getMedia() {
  //faire un fetch
  //récupérer les données dans une fonction spéciale ' displayData'.
  fetch('scripts/utils/photographers.json')
  .then(response => response.json())
  .then(photographers => displayMediaProfile(photographers.media))
}

async function displayDataProfile(photographers) {
        //On parcourt les objets afin de trouver le bon ID pour récupérer les bonnes datas

        photographers.forEach(photographer => {
            if (photographer.id == id){
              const pageContent = document.querySelector("#main");
              const photographerProfilModel = profilFactory(photographer.name, photographer.tagline, photographer.city, photographer.country, photographer.id, photographer.portrait);
              const userCardProfileDOM = photographerProfilModel.getUserCardProfileDOM();
              pageContent.appendChild(userCardProfileDOM);
            }
        });
};

async function displayMediaProfile(photographers) {
  //On parcourt les objets afin de trouver le bon ID pour récupérer les bonnes datas

  for(media of photographers){
    if (media.photographerId == id){
      const mediaList = document.querySelector(".mediaList");
      const photographerMediaModel = mediaFactory(media.id, media.photographerId, media.title, media.image, media.likes, media.date, media.price);
      const userCardMediaDOM = photographerMediaModel.getUserCardMediaDOM();
      mediaList.appendChild(userCardMediaDOM);
    }
  }
  


};

getPhotographers();
getMedia();
