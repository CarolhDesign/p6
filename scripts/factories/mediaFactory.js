
function mediaFactory(id, photographerId, title, image, likes, date, price) {

    function getUserCardMediaDOM() {
        const article = document.createElement('div');
        article.className = "media";

        //imgBar
        const imgBar = document.createElement('div');
        imgBar.className = "imgBar";

        //textBar
        const textBar = document.createElement('div');
        textBar.className = "textBar";

        //title
        const title = document.createElement('h2');
        title.className = "title";
        title.textContent = media.title;


        //likes
        const likes = document.createElement('small');
        title.className = "likes";
        title.textContent = media.likes;

        //date
        const date = document.createElement('p');
        title.className = "date";
        title.textContent = media.date;


        article.appendChild(imgBar);
        article.appendChild(textBar);
        textBar.appendChild(title);
        textBar.appendChild(likes);
        textBar.appendChild(date); 

        
      return article;
    }


  return {id, photographerId, title, image, likes, date, price, getUserCardMediaDOM}
}
