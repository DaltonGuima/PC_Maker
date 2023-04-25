package com.fatec.sig1.model.Produto;

import java.util.Map;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class ProdutoDTO {
    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotBlank(message = "Fabricante é requerido")
    private String fabricante;
    @NotBlank(message = "Modelo é requerido")
    private String modelo;
    @NotNull(message = "Preco é requerido")
    private float preco;
    @NotBlank(message = "Vendedor é requerido")
    private String vendedor;
    @NotBlank(message = "Link do Produto é requerido")
    private String linkProduto;
    @NotNull
    private Map<String, String> especificacoes;
    @NotBlank(message = "categoria do Produto é requerido")
    private String categoria;

    public ProdutoDTO(String nome,
            String fabricante,
            String modelo,
            float preco,
            String vendedor,
            String linkProduto,
            String categoria,
            Map<String, String> especificacoes) {
        this.nome = nome;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.preco = preco;
        this.vendedor = vendedor;
        this.linkProduto = linkProduto;
        this.especificacoes = especificacoes;
        this.categoria = categoria;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public String getVendedor() {
        return vendedor;
    }

    public void setVendedor(String vendedor) {
        this.vendedor = vendedor;
    }

    public String getLinkProduto() {
        return linkProduto;
    }

    public void setLinkProduto(String linkProduto) {
        this.linkProduto = linkProduto;
    }

    public Produto returnOneProduto() {
        return new Produto(nome, fabricante, modelo, preco, vendedor, linkProduto, especificacoes, categoria);
    }

}
