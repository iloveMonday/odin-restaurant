export default function abouPatge(){
    const element = document.getElementById("content");
    element.innerHTML = "";
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const text = document.createElement("p");
    const menu = document.getElementById("menu");
  
    // image.setAttribute("src", "../divorce.png");
    // image.setAttribute("alt", "divorce-court");
    title.innerHTML = "ABOUT WHAT";
    text.innerHTML = "that's it.";
  
    // element.appendChild(image);
    element.appendChild(title);
    element.appendChild(text);
  
    return element;
}