import divorce from './divorce.png';

export default function homePage(){
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');
    homeButton.classList.add("clicked");
    menuButton.classList.remove("clicked");
    aboutButton.classList.remove("clicked");


    const element = document.getElementById("content");
    element.innerHTML = "";
    const image = new Image();
    const title = document.createElement("h2");
    const text = document.createElement("p");
  
    image.src = divorce;
    image.classList.add("home-image");
    image.setAttribute("alt", "divorce-court");
    title.innerHTML = "DIVORCE FOOD COURT";
    text.className = "home-text";
    text.innerHTML = "Come on down we're listening to Ska music.";
  
    element.appendChild(title);
    element.appendChild(image);
    element.appendChild(text);
  
    return element;
}