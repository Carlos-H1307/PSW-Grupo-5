import {produtos} from "./produtos.js"
import {add} from "./carrinho.js"

let lista = document.getElementById("lista")

for(let i=0 ; i<produtos.length ; i++){
    let div = document.createElement("div")
    div.id = "produto" + i
    div.className = "produto"
    //let str = produtos[i].nome
    let prod = `
        <div class="nome">${produtos[i].nome}</div>
        <div class="categoria">${produtos[i].categoria}</div>
        <div class="marca">${produtos[i].marca}</div>
        <div class="preco">${produtos[i].preco}</div>
        <div class="loja">${produtos[i].loja}</div>
        <img class="img" src="${produtos[i].img}">
        <div class="estoque">${produtos[i].estoque}</div>
        <button onclick=console.log("1")>Adicionar ao carrinho</button>
    </div>
    `
    div.innerHTML = prod
    lista.appendChild(div)
}
