
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  const altoContraste = document.querySelector('#alto-contraste')
  const fonte = document.querySelector('#fonte')
  let darkMode = true
  let fontSize = "normal"

  altoContraste.addEventListener("click", () => {
    if(darkMode === true){
      darkMode = false
    }else{
      darkMode = true
    }

    alteraCorDeFundo(darkMode)
  })

  fonte.addEventListener("click", () => {
    if(fontSize === "normal"){
      fontSize = "grande"
    }else{
      fontSize = "normal"
    }

    alteraFonte(fontSize)
  })

  function alteraCorDeFundo(darkMode){
    const body = document.querySelector('body')
    const texto = document.querySelector(".texto")
    const texto2 = document.querySelector(".texto2")

    if (darkMode === true) {
      body.style.backgroundColor = "#333"
      texto.style.color = "#fff"
      texto2.style.color = "#fff"
    } else {
      body.style.backgroundColor = "#f1f1f1"
      texto.style.color = "#333"
      texto2.style.color = "#333"
    }
  }

  function alteraFonte(fontSize){
    const body = document.querySelector('body')
    const botao = document.querySelector('.todasVagas')
    var largura = window. screen.width;
    console.log(largura);
    if( largura >= 600){
       if (fontSize === "grande") {
      console.log(fontSize);
      body.style.fontSize = "25px"
      botao.style.height = "80px"
    } else {
      console.log(fontSize);
      body.style.fontSize = "20px"
      botao.style.height = "57px"
    }
    }else{
      if (fontSize === "grande") {
        console.log(fontSize);
        body.style.fontSize = "18px"
      } else {
        console.log(fontSize);
        body.style.fontSize = "smaller"
    }
   

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



botaoNegocios.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Negócios"))
botaoTecnologia.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Tecnologia"))
botaoAdm.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Administração"))
botaoVendas.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Vendas"))
botaoRh.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "RH"))
botaoJuridico.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Jurídico"))
botaoMarketing.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Marketing"))
botaoFinanceiro.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Financeiro"))
botaoSaude.addEventListener("click", evento => buscaVaga.buscarVaga(evento, "Saúde"))

function buscarVaga(area) {
  if(area === "Negócios"){
    window.location.href = "../pages/vagas-negocios.html";
  }
  else if(area === "Tecnologia"){
    window.location.href = "../pages/vagas-tecnologia.html";
  }
  else if(area === "Administração"){  
    window.location.href = "../pages/vagas-adm.html";
  }
  else if(area === "Vendas"){
    window.location.href = "../pages/vagas-vendas.html";
  }
  else if(area === "RH"){
    window.location.href = "../pages/vagas-rh.html";
  }
  else if(area === "Jurídico"){
    window.location.href = "../pages/vagas-juridico.html";
  }
  else if(area === "Marketing"){
    window.location.href = "../pages/vagas-marketing.html";
  }
  else if(area === "Financeiro"){
    window.location.href = "../pages/vagas-financeiro.html";
  }
  else if(area === "Saúde"){
    window.location.href = "../pages/vagas-saude.html";
  }
}