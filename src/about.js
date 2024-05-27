export default function abouPatge() {
  const homeButton = document.getElementById("home");
  const menuButton = document.getElementById("menu");
  const aboutButton = document.getElementById("about");
  homeButton.classList.remove("clicked");
  menuButton.classList.remove("clicked");
  aboutButton.classList.add("clicked");

  const element = document.getElementById("content");
  element.innerHTML = "";
  const title = document.createElement("h2");
  const text = document.createElement("p");
  const conBox = document.createElement("div")
  conBox.className = "contact-box";

  title.innerHTML = "CONTACT";
  text.innerHTML =
    "you may not order ahead. <br> we may not answer. <br>can can try calling anyway.";
  text.className = "home-text";

  element.appendChild(title);
  element.appendChild(text);
  element.appendChild(conBox);

  const myContacts = [];

  class Item {
    constructor(loc, num, email) {
      this.loc = loc;
      this.num = num;
      this.email = email;
    }
  }

  myContacts.push(new Item("Worcester", "508-976-1234", "woosox@yaya@gmail.com"));
  myContacts.push(new Item("Philadelphia", "609-654-6495", "ejawn4000@yaya.com"));

  for(let i = 0; i < myContacts.length; i++){
    const contactCard = document.createElement("div");
    contactCard.className = "contact-div";
    const info = myContacts[i];

    let conLoc = document.createElement("h3");
    conLoc.innerHTML = info.loc;

    let conNum = document.createElement("h4");
    conNum.innerHTML = info.num;

    let conEmail = document.createElement("h4");
    conEmail.innerHTML = info.email;


    contactCard.appendChild(conLoc);
    contactCard.appendChild(conNum);
    contactCard.appendChild(conEmail);
    conBox.appendChild(contactCard);
};


  return element;
};
