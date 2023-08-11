function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  const altoContraste = document.querySelector('#alto-contraste')
  let darkMode = true

  altoContraste.addEventListener("click", () => {
    if(darkMode === true){
      darkMode = false
    }else{
      darkMode = true
    }

    alteraCorDeFundo(darkMode)
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