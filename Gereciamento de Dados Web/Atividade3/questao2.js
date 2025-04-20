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

// Acessando o elemento <titulo> do segundo livro
const segundoLivroTitulo = xmlDoc.getElementsByTagName("livro")[1]
  .getElementsByTagName("titulo")[0].childNodes[0].nodeValue;

// Exibindo o texto no console
console.log(segundoLivroTitulo); // Saída: "Introdução ao XML"

// Exibindo o texto no HTML
document.getElementById("Segundo Livro").textContent = segundoLivroTitulo;