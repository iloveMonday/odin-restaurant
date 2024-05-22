// console.log("ok fool, you got this");
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

function component() {
  homePage();
}

home.addEventListener("click", () => {
    homePage();
  });
  
menu.addEventListener("click", () => {
  menuPage();
});

about.addEventListener("click", () => {
  aboutPage();
});

// document.body.appendChild(component());
component();
