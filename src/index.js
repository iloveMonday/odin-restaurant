// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'Restauranty'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

console.log("ok fool, you got this");

function component(){
    // const element = document.getElementById('content');
     const element = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const text = document.createElement('p');

    image.setAttribute('src', '../divorce.png');
    image.setAttribute('alt', 'divorce-court');
    title.innerHTML = 'DIVORCE FOOD COURT';
    text.innerHTML = 'Come on down we\'re listening to Ska music.';

    element.appendChild(image);
    element.appendChild(title);
    element.appendChild(text);

    return element;
}

document.body.appendChild(component());


// function component(){
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

//     element.innerHTML = "fmlfmlfmlfml";

//     btn.innerHTML = 'Clik Tok and witness me (in the console)';

//     element.appendChild(btn);

//     return element;
// };

// document.body.appendChild(component());