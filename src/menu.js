export default function menuPage(){
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');
    homeButton.classList.remove("clicked");
    menuButton.classList.add("clicked");
    aboutButton.classList.remove("clicked");

    const element = document.getElementById('content');
    element.innerHTML = "";
    const title = document.createElement("h2");
    const text = document.createElement("p");
    title.innerHTML = "MENU PAGE";
    text.className = "home-text";
    text.innerHTML = "looks like meat\'s back on the menu boys";

    const menu = document.createElement("div");
    const sandwiches = document.createElement("div");
    const entrees = document.createElement("div");

    menu.classList.add("menu-div");
    sandwiches.classList.add("sandwiches-div");
    entrees.classList.add("entrees-div");
  
    const sandArray = [
        "SANDWICHES",
        "TOFURKEY SANDWICH",
        "peppered tofurkey slices, lettuce, red onion, pickle, mayo, mustard",
        "FISH WISH",
        "fried flounder filet, bo’s dijon slaw, cajun remoulade",
        "PB&J",
        "you know it you love it get it and go",
        "VEGAN CLUB",
        "seitan, buffalo tofu, lettuce, tomato, just the good stuff"
    ];

    const entreeArray = [
        "ENTREES",
        "PINKLES AND SLAMS",
        "lil scar’s pickle and clam platter",
        "A BANANA",
        "this counts as a meal",
        "NO NAME",
        "a pile of sweet & sour seitan with sesame, broccoli and celery",
        "CACIO E PEPE",
        "i don’t remember what this is",
    ];

    function buildMenu(section){
        let sectionTitle = document.createElement("h3");
        sectionTitle.innerHTML = section[0];
        sandwiches.appendChild(sectionTitle);

    for(let i = 1; i < section.length; i+=1){
        let newMenuItem = document.createElement("div");
        newMenuItem.className = "menu-item";
        let menuItem = document.createElement("h4");
        menuItem.innerHTML = section[i];
        let itemDesc = document.createElement("p");
        itemDesc.innerHTML = section[i+=1];
        newMenuItem.appendChild(menuItem);
        newMenuItem.appendChild(itemDesc);
        sandwiches.appendChild(newMenuItem);
    }};

    buildMenu(sandArray);
    buildMenu(entreeArray);


    menu.appendChild(sandwiches);
    menu.appendChild(entrees);

    element.appendChild(title);
    element.appendChild(text);
    element.appendChild(menu);

    return element;
}