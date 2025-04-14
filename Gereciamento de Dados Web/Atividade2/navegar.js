
async function navegarNos() {
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

        // Acessar o elemento <autor> do segundo livro
        const segundoLivroAutor = xmlDoc.getElementsByTagName('livro')[1].getElementsByTagName('autor')[0];

        // Utilizar parentNode para acessar o elemento <livro> pai
        const livroPai = segundoLivroAutor.parentNode;

        // Utilizar firstChild do elemento <livro> para acessar o elemento <titulo>
        let tituloElemento = livroPai.firstChild;
        while (tituloElemento.nodeType === Node.TEXT_NODE) {
            tituloElemento = tituloElemento.nextSibling;
        }

        // Obter o texto do título
        const tituloTexto = tituloElemento.textContent;

        // Selecionar a div#navegacao
        const divNavegacao = document.getElementById('navegacao');

        // Criar um elemento <p> para exibir o título do segundo livro
        const p = document.createElement('p');
        p.textContent = `Título do Segundo Livro: ${tituloTexto}`;

        // Adicionar o <p> à div#navegacao
        divNavegacao.appendChild(p);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para navegar pelos nós
navegarNos();