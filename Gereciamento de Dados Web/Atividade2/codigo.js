
async function carregarLivros() {
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

        // Acessar todos os elementos <titulo>
        const titulos = xmlDoc.getElementsByTagName('titulo');

        // Selecionar a div#titulos
        const divTitulos = document.getElementById('titulos');

        // Iterar sobre os elementos encontrados e exibir o texto de cada título
        for (let i = 0; i < titulos.length; i++) {
            const tituloTexto = titulos[i].textContent;

            // Criar um elemento <p> para cada título
            const p = document.createElement('p');
            p.textContent = `Titulo: ${ tituloTexto}`;
            p.classList.add('titulo'); // Adicionando uma classe ao elemento <p>

            // Adicionar o <p> à div#titulos
            divTitulos.appendChild(p);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamar a função para carregar os livros
carregarLivros();