import {
    conectaAPI
} from "./conectaAPI.js";
import constroiCards from "./mostrarVagas.js";

async function buscarVaga(evento, texto) {
    

    evento.preventDefault();

    window.location.href = "../pages/vagas.html";

    const busca = await conectaAPI.buscaVaga(texto);
    console.log(busca);
    const lista = document.querySelector("[data-lista]")
    console.log(lista);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCards(elemento.titulo, elemento.empresa, elemento.salario, elemento.local, elemento.descricao)
    ));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
    }

}

export const buscaVaga = {
    buscarVaga
}