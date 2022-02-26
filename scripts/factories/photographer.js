
function photographerFactory(name, price, tagline, city, country, id, portrait) {

    function openProfil() {
        window.open(`photographer.html?id=${id}`);
      }    

      const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const pInfos = document.createElement('div');
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        article.appendChild(img);
        article.appendChild(pInfos);
        pInfos.appendChild(h2);
        pInfos.appendChild(pLocate);
        pInfos.appendChild(pTagline);
        pInfos.appendChild(pPrice);
        
        pInfos.className = "infos"
        pLocate.className = "locate";
        pTagline.className = "tagline";
        pPrice.className = "price";
        h2.className = "name";

        article.addEventListener("click", openProfil);

        return (article);
    }

    return { name, picture, price, tagline, city, country, id,  getUserCardDOM }
}
