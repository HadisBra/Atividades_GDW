package com.example.atividadegdw;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        try {
            // Criação do contexto JAXB para a classe Produtos
            JAXBContext context = JAXBContext.newInstance(Produtos.class);

            // Criação do Unmarshaller para converter o XML em objetos Java
            Unmarshaller unmarshaller = context.createUnmarshaller();

            // Leitura do arquivo XML
            File file = new File("src/main/java/com/example/atividadegdw/meu_arquivo.xml");
            Produtos produtos = (Produtos) unmarshaller.unmarshal(file);

            // Exibição dos produtos lidos
            for (Produto produto : produtos.getProdutos()) {
                System.out.println("Nome: " + produto.getNome() + ", Preço: " + produto.getPreco());
            }
        } catch (JAXBException e) {
            e.printStackTrace();
        }
    }
}