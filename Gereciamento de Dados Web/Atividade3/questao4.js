// XML como string
const xmlString = `
<catalogo>
  <produto id="A45">
    <nome>Caneta Azul</nome>
    <preco>2.50</preco>
    <estoque>150</estoque>
  </produto>
</catalogo>
`;

// Parseando o XML com DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Encontrando o elemento <produto> com id="A45"
const produto = xmlDoc.querySelector('produto[id="A45"]');

// Encontrando o elemento <preco> dentro do <produto>
const preco = produto.getElementsByTagName("preco")[0];

// Alterando o valor do nó de texto do elemento <preco>
preco.firstChild.nodeValue = "3.00";

// Exibindo o novo valor no HTML
const precoDiv = document.createElement("div");
precoDiv.textContent = `Novo preço: ${preco.firstChild.nodeValue}`;
document.body.appendChild(precoDiv);