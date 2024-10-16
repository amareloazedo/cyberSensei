function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum Resultado Encontrado</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada objeto (dado) no array 'dados'
    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
  }
}
if (!resultados) {
    resultados = "<p>Nenhum Resultado Encontrado</p>"
}
  
    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }