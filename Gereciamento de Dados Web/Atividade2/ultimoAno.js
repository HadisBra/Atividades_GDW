
async function carregarUltimoAno() {
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

        // Acessar o último elemento <livro>
        const livros = xmlDoc.getElementsByTagName('livro');
        const ultimoLivro = livros[livros.length - 1];

        // Acessar o último filho deste elemento <livro> (deve ser <ano>)
        let anoElemento = ultimoLivro.lastChild;
        while (anoElemento.nodeType === Node.TEXT_NODE) {
            anoElemento = anoElemento.previousSibling;
        }

        // Acessar o primeiro filho do elemento <ano> (nó de texto com o ano)
        const anoTexto = anoElemento.firstChild.nodeValue;

        // Selecionar a div#ultimo_ano
        const divUltimoAno = document.getElementById('ultimo_ano');

        // Criar um elemento <p> para exibir o ano
        const p = document.createElement('p');
        p.textContent = `Último Ano: ${anoTexto}`;

        // Adicionar o <p> à div#ultimo_ano
        divUltimoAno.appendChild(p);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para carregar o último ano
carregarUltimoAno();