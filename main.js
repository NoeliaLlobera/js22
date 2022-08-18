let frase;
let a = document.getElementById("container");
let b =document.createElement("p");

let sacarFrase =() => fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        frase = data;
        console.log(data.value);
        b.innerHTML = data.value;
        a.appendChild(b)
        })
sacarFrase()