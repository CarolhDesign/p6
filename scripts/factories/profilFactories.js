
function profilFactory(name, price, tagline, city, country, id, portrait) {

    const picture = `assets/photographers/${portrait}`;

    function getUserProfilDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const pInfos = document.createElement('div');
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const locate = `${city}, ${country}`;
        const pLocate = document.createElement('p');
        pLocate.innerHTML = locate;
        const pTagline = document.createElement('p');
        pTagline.innerHTML = tagline;
        const pPrice = document.createElement("small");
        pPrice.innerHTML = `${price} €`;
        
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

        return (article);
    }

    return { name, picture, price, tagline, city, country, id,  getUserProfilDOM }
}
