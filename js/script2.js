const botaoNegocios = document.querySelector('#data-negocios')
const botaoTecnologia = document.querySelector('#data-tecnologia')
const botaoAdm = document.querySelector('#data-administracao')
const botaoVendas = document.querySelector('#data-vendas')
const botaoRh = document.querySelector('#data-rh')
const botaoJuridico = document.querySelector('#data-juridico')
const botaoMarketing = document.querySelector('#data-marketing')
const botaoFinanceiro = document.querySelector('#data-financeiro')
const botaoSaude = document.querySelector('#data-saude')



botaoNegocios.addEventListener("touchstart", evento => buscarVaga(evento, "Negócios"))
botaoTecnologia.addEventListener("touchstart", evento => buscarVaga(evento, "Tecnologia"))
botaoAdm.addEventListener("touchstart", evento => buscarVaga(evento, "Administração"))
botaoVendas.addEventListener("touchstart", evento => buscarVaga(evento, "Vendas"))
botaoRh.addEventListener("touchstart", evento => buscarVaga(evento, "RH"))
botaoJuridico.addEventListener("touchstart", evento => buscarVaga(evento, "Jurídico"))
botaoMarketing.addEventListener("touchstart", evento => buscarVaga(evento, "Marketing"))
botaoFinanceiro.addEventListener("touchstart", evento => buscarVaga(evento, "Financeiro"))
botaoSaude.addEventListener("touchstart", evento => buscarVaga(evento, "Saúde"))


function buscarVaga(event, area) {
    if (area === "Negócios") {
      window.location.href = "../pages/vagas-negocios.html";
    }
    else if (area === "Tecnologia") {
      window.location.href = "../pages/vagas-tecnologia.html";
    }
    else if (area === "Administração") {
      window.location.href = "../pages/vagas-adm.html";
    }
    else if (area === "Vendas") {
      window.location.href = "../pages/vagas-vendas.html";
    }
    else if (area === "RH") {
      window.location.href = "../pages/vagas-rh.html";
    }
    else if (area === "Jurídico") {
      window.location.href = "../pages/vagas-juridico.html";
    }
    else if (area === "Marketing") {
      window.location.href = "../pages/vagas-marketing.html";
    }
    else if (area === "Financeiro") {
      window.location.href = "../pages/vagas-financeiro.html";
    }
    else if (area === "Saúde") {
      window.location.href = "../pages/vagas-saude.html";
    }
  }