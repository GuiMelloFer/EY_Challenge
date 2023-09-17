import { conectaAPI } from "./conectaAPI.js";
import constroiCards from "./mostrarVagas.js";

async function buscarVaga(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.searchVaga(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCards(elemento.titulo, elemento.empresa, elemento.salario, elemento.local, elemento.descricao)
        ));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vagas com esse termo</h2>`
    }    
}

const botao = document.querySelector("[data-botao-pesquisa]")

botao.addEventListener("click", evento => buscarVaga(evento))