async function listaVagas() {
    const conexao = await fetch("http://localhost:3000/vagas")
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVaga(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/vagas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function buscaVaga(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/vagas?cargo_de_atuacao=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function searchVaga(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/vagas?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

export const conectaAPI = {
    listaVagas, 
    criaVaga,
    buscaVaga,
    searchVaga
}