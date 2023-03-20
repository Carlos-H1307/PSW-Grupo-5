import {produtos} from "./produtos.js"

let lista = document.querySelector(".lista")
let carrinho = []
console.log(lista)

for(let i=0 ; i<produtos.length ; i++){
    let div = document.createElement("div")
    div.id = "produto" + i
    div.className = "produto"
    //let str = produtos[i].nome
    let prod = `
    <div id=produto${i} class="produto">
        <div class="img_area">
            <img src=${produtos[i].img}>
        </div>
        <div class="cont_area">
            <div class="produto_nome">
                ${produtos[i].nome}
            </div>
            <div class="produto_preco">
                ${produtos[i].preco}
            </div>
            <div class="produto_links">
                <a class="produto_detalhes">Ver detalhes</a>
                <button type="button" class="produto_button">Adicionar ao carrinho</button>
            </div>
        </div>
    </div>
        
    `
    
    div.innerHTML = prod
    lista.appendChild(div)
}
