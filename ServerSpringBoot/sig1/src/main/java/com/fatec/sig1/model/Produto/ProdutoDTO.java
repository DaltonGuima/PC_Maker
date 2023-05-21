package com.fatec.sig1.model.Produto;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fatec.sig1.model.LocalVenda.LocalVenda;

import jakarta.validation.constraints.NotBlank;

public class ProdutoDTO {
    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotBlank(message = "Fabricante é requerido")
    private String fabricante;
    @NotBlank(message = "Modelo é requerido")
    private String modelo;
    private Map<String, String> especificacoes;
    @NotBlank(message = "categoria do Produto é requerido")
    private String categoria;
    @JsonIgnoreProperties("LocalVenda")
    private List<LocalVenda> locaisVendas = new ArrayList<LocalVenda>();

    public ProdutoDTO(
            String nome,
            String fabricante,
            String modelo,
            String categoria,
            Map<String, String> especificacoes,
            List<LocalVenda> locaisVendas) {
        ;
        this.nome = nome;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.especificacoes = especificacoes;
        this.categoria = categoria;
        this.locaisVendas = locaisVendas;
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

    public Produto returnOneProduto() {
        return new Produto(nome, fabricante, modelo, especificacoes, categoria);
    }

    public Map<String, String> getEspecificacoes() {
        return especificacoes;
    }

    public void setEspecificacoes(Map<String, String> especificacoes) {
        this.especificacoes = especificacoes;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public List<LocalVenda> getLocaisVendas() {
        return locaisVendas;
    }

    public void setLocaisVendas(List<LocalVenda> locaisVendas) {
        this.locaisVendas = locaisVendas;
    }

}
