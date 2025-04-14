
async function exibirTodosOsIDs() {
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

        // Selecionar a div#ids
        const divIDs = document.getElementById('ids');

        // Iterar sobre os elementos <livro>
        for (let i = 0; i < livros.length; i++) {
            const livro = livros[i];

            // Obter o nó do atributo id
            const idAtributo = livro.getAttributeNode('id');

            // Obter o valor do atributo id usando nodeValue
            const idValor = idAtributo.nodeValue;

            // Criar um elemento <p> para exibir o ID
            const p = document.createElement('p');
            p.textContent = `ID do Livro: ${idValor}`;

            // Adicionar o <p> à div#ids
            divIDs.appendChild(p);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para exibir todos os IDs
exibirTodosOsIDs();