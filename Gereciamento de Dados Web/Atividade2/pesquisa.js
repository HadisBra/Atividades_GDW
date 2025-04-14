
async function carregarLivroEspecifico() {
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

        // Obter o valor do atributo id
        const id = primeiroLivro.getAttribute('id');

        // Acessar os elementos <titulo>, <autor> e <ano>
        const titulo = primeiroLivro.getElementsByTagName('titulo')[0].textContent;
        const autor = primeiroLivro.getElementsByTagName('autor')[0].textContent;
        const ano = primeiroLivro.getElementsByTagName('ano')[0].textContent;

        // Selecionar a div#livro_especifico
        const divLivroEspecifico = document.getElementById('livro_especifico');

        // Criar um elemento <p> para exibir as informações do livro
        const p = document.createElement('p');
        p.textContent = `ID: ${id}, Título: ${titulo}, Autor: ${autor}, Ano: ${ano}`;

        // Adicionar o <p> à div#livro_especifico
        divLivroEspecifico.appendChild(p);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para carregar o livro específico
carregarLivroEspecifico();