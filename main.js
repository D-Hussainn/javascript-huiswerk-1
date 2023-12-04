console.log("main.js is running...");
/*

const ulList = document.querySelector("ul");
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => response.json())
.then((data) =>{
    console.log("Data:", data);
    const pokemons = data.results;
    
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        ulList.innerHTML += `<li>${pokemon.name}</li>`
        
    }
});

*/
const phonelist = document.querySelector ("ul");
fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) =>{
    console.log("Data:", data);
    const devices = data.products;
    
    for (let i = 0; i < telefoon.length; i++) {
        const product = telefoon[i];

    phonelist.innerHTML += `<li>${product.name}</li>`    
    }
});