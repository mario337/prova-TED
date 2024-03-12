//Criaçao da pilha com o tamanho ideal.
export function criarPilha(tamanhoDaPilha = 10) {
 return[ ... new Array(tamanhoDaPilha)]  
}

export function inserirNaPilha(pilha, item ){
   const spacePosition = pilha.indexOf(undefined)

   if (spacePosition === -1){
    console.log("Sem espaço!!!!")
    return
   }
   pilha[spacePosition] = item
}

export function retirarItem(pilha){
    if (pilha[0] === undefined) {
        console.log("pilha vazia!!!")
        return 
    }

}

export function procurarNaPilha(pilha, item){
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i].titulo === item.titulo) {
            console.log(" titulo " + item.titulo)
           return true
        }
        console.log("livro não encontrado" + item.titulo)
        return false
    }

}