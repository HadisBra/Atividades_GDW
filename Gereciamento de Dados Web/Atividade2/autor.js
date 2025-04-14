
async function carregarPrimeiroAutor() {
    try {
        // Carregar o arquivo livros.xml usando fetch
        const response = await fetch('livros.xml');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo XML');
        }

        // Obter o texto do XML
        const xmlText = await response.text();

        // Parsear o XML para um objeto DOM usando DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

        // Acessar o primeiro elemento <livro>
        const primeiroLivro = xmlDoc.getElementsByTagName('livro')[0];

        // Acessar o elemento <autor> diretamente
        const autorElemento = primeiroLivro.getElementsByTagName('autor')[0];

        // Obter o texto do autor
        const autorTexto = autorElemento.textContent;

        // Selecionar a div#primeiro_autor
        const divPrimeiroAutor = document.getElementById('primeiro_autor');

        // Criar um elemento <p> para exibir o nome do autor
        const p = document.createElement('p');
        p.textContent = `Primeiro Autor: ${autorTexto}`;

        // Adicionar o <p> à div#primeiro_autor
        divPrimeiroAutor.appendChild(p);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para carregar o primeiro autor
carregarPrimeiroAutor();