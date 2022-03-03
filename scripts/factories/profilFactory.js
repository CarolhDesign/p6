
function profilFactory(name, tagline, city, country, id, portrait) {
    const picture = `assets/photographers/${portrait}`;

    function getUserCardProfileDOM() {
      const article = document.querySelector(".photograph-header");
      const info = document.querySelector('.info');
      const location = document.createElement("div");

      //Name
      const nameProfile = document.createElement('h2');
      nameProfile.className = "name";
      nameProfile.textContent = name;

      //Location

      location.className = "locate";
      location.textContent = city + ", " + country;
      
      //Image
      const imageProfile = document.querySelector('.imgProfile');
      imageProfile.setAttribute("src", picture);

      //Tagline
      const taglines = document.createElement('div');
      taglines.className = "tagline";
      taglines.textContent = tagline;

      //Hierarchie

      info.appendChild(nameProfile);
      info.appendChild(location);
      info.appendChild(taglines)

      return article;
    }


  return { name, picture, location, tagline, getUserCardProfileDOM}
}

