import { conectaAPI } from "./conectaAPI.js";
import constroiCards from "./mostrarVagas.js";

async function buscarVaga(evento, texto) {
    window.location.href = "../pages/vagas.html";
    evento.preventDefault();

    
    
     const busca = await conectaAPI.buscaVaga(texto);
console.log(busca);
     const lista = document.querySelector("[data-lista]")

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

const botaoNegocios = document.querySelector("[data-negocios]")
const botaoTecnologia = document.querySelector("[data-tecnologia]")
const botaoAdm = document.querySelector("[data-administracao]")
const botaoVendas = document.querySelector("[data-vendas]")
const botaoRh = document.querySelector("[data-rh]")
const botaoJuridico = document.querySelector("[data-juridico]")
const botaoMarketing = document.querySelector("[data-marketing]")
const botaoFinanceiro = document.querySelector("[data-financeiro]")
const botaoSaude = document.querySelector("[data-saude]")

botaoNegocios.addEventListener("click", evento => buscarVaga(evento, "Negócios"))
botaoTecnologia.addEventListener("click", evento => buscarVaga(evento, "Tecnologia"))
botaoAdm.addEventListener("click", evento => buscarVaga(evento, "Administração"))
botaoVendas.addEventListener("click", evento => buscarVaga(evento, "Vendas"))
botaoRh.addEventListener("click", evento => buscarVaga(evento, "RH"))
botaoJuridico.addEventListener("click", evento => buscarVaga(evento, "Jurídico"))
botaoMarketing.addEventListener("click", evento => buscarVaga(evento, "Marketing"))
botaoFinanceiro.addEventListener("click", evento => buscarVaga(evento, "Financeiro"))
botaoSaude.addEventListener("click", evento => buscarVaga(evento, "Saúde"))