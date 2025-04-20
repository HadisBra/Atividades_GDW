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

// Adicionando o atributo "moeda" com o valor "BRL"
produto.setAttribute("moeda", "BRL");

// Obtendo o valor do preço
const preco = produto.getElementsByTagName("preco")[0].textContent;

// Formatando o valor em BRL
const precoFormatado = `R$ ${parseFloat(preco).toFixed(2)}`;

// Exibindo o valor do produto em BRL no HTML
const resultadoDiv = document.createElement("div");
resultadoDiv.textContent = `Produto: ${produto.getElementsByTagName("nome")[0].textContent}, Preço: ${precoFormatado} (${produto.getAttribute("moeda")})`;
document.body.appendChild(resultadoDiv);