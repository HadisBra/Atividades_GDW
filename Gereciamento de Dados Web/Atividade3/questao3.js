// XML como string
const xmlString = `
<biblioteca>
  <livro categoria="ficcao">
    <titulo>O Guia do Mochileiro das Galáxias</titulo>
    <autor>Douglas Adams</autor>
  </livro>
  <livro categoria="tecnico">
    <titulo>Introdução ao XML</titulo>
    <autor>Professor Exemplo</autor>
  </livro>
</biblioteca>
`;

// Parseando o XML com DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Acessando o nó raiz <biblioteca>
const biblioteca = xmlDoc.getElementsByTagName("biblioteca")[0];

// Selecionando o elemento <div> no HTML
const conteudoDiv = document.getElementById("conteudo_questao3");

// Iterando sobre os childNodes do nó raiz
let resultado = "<ul>"; // Usando uma lista não ordenada para exibir os resultados
for (let i = 0; i < biblioteca.childNodes.length; i++) {
  const childNode = biblioteca.childNodes[i];
  // Verificando se o nó é um nó de elemento (nodeType == 1)
  if (childNode.nodeType === 1) {
    resultado += `<li>${childNode.nodeName}</li>`; // Adiciona o nome do nó à lista
  }
}
resultado += "</ul>";

// Inserindo o resultado no HTML
conteudoDiv.innerHTML = resultado;