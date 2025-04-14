
async function carregarAutoresEAnos() {
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

        // Acessar todos os elementos <livro>
        const livros = xmlDoc.getElementsByTagName('livro');

        // Selecionar a div#autores_anos
        const divAutoresAnos = document.getElementById('autores_anos');

        // Iterar sobre os elementos <livro>
        for (let i = 0; i < livros.length; i++) {
            const livro = livros[i];

            // Acessar o elemento <autor> e <ano>
            const autor = livro.getElementsByTagName('autor')[0].textContent;
            const ano = livro.getElementsByTagName('ano')[0].textContent;

            // Criar um elemento <p> para exibir o autor e o ano
            const p = document.createElement('p');
            p.textContent = `Autor: ${autor}, Ano: ${ano}`;

            // Adicionar o <p> à div#autores_anos
            divAutoresAnos.appendChild(p);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para carregar os autores e anos
carregarAutoresEAnos();