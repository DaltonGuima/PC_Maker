package com.fatec.sig1.model.Build;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fatec.sig1.model.Usuario.Usuario;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
public class Build {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Nome é requerido")
    private String nome;
    @NotNull(message = "Preço é requerido")
    private float total;
    private String descricao;
    @Pattern(regexp = "^(0?[1-9]|[12][0-9]|3[01])[\\/-](0?[1-9]|1[012])[\\/-]\\d{4}$", message = "A data de cadastro deve estar no formato dd/MM/YYYY")
    private String dataCadastro;
    @OneToMany(mappedBy = "build", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnoreProperties("build")
    private Set<ItemBuild> itens = new HashSet<ItemBuild>();
    @ManyToOne(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonIncludeProperties("id")
    private Usuario usuario;

    public Build() {
    }

    public Long getId() {
        return id;
    }

    public Build(
            String nome,
            String descricao,
            Set<ItemBuild> itens,
            Usuario usuario) {
        this.nome = nome;
        setTotal(getValorTotal());
        this.descricao = descricao;
        setDataCadastro(new DateTime());
        this.itens = itens;
        this.usuario = usuario;
    }

    public Build(
            String nome,
            String descricao,
            Usuario usuario) {
        this.nome = nome;
        setTotal(getValorTotal());
        this.descricao = descricao;
        setDataCadastro(new DateTime());

        this.usuario = usuario;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public float getValorTotal() {
        float soma = 0f;
        for (ItemBuild ip : itens) {
            soma += ip.getSubtotal();
        }
        return soma;
    }

    public String getDataCadastro() {
        return dataCadastro;
    }

    public String obtemDataAtual(DateTime dataAtual) {
        DateTimeFormatter fmt = DateTimeFormat.forPattern("dd/MM/YYYY");
        return dataAtual.toString(fmt);
    }

    public void setDataCadastro(DateTime dataAtual) {
        this.dataCadastro = obtemDataAtual(dataAtual);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Set<ItemBuild> getItens() {
        return itens;
    }

    public void setItens(Set<ItemBuild> itens) {
        this.itens = itens;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void setTotal(float total) {
        this.total = total;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
