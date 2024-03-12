import {criarPilha, inserirNaPilha, procurarNaPilha, retirarItem } from "./pilha.js";

let livros = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

let pilha= criarPilha(5)
for (let j = 0; j < livros.length; j++) {
    inserirNaPilha(pilha, livros[1])
    console.log("livros: " + livros[1].titulo + "inserir Na Pilha")    
}
console.log("------------------------")

for (let j = 0; j < livros.length; j++) {
    retirarItem(pilha, livros[1])
    console.log("livros: " + livros[1].titulo + "retirar Item")    
}
console.log("------------------------")

for (let j = 0; j < livros.length; j++) {
    procurarNaPilha(pilha, livros[1])
}


