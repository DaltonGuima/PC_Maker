package com.fatec.sig1.model.Usuario;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fatec.sig1.model.Build.Build;

//The JPA was renamed as Jakarta Persistence in 2019 and version 3.0 was released in 2020. This included the renaming of packages and properties
//from javax. persistence to jakarta. persistence.
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.persistence.OneToMany;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Nome é requerido")
    private String nome;
    @Pattern(regexp = "^(0?[1-9]|[12][0-9]|3[01])[\\/-](0?[1-9]|1[012])[\\/-]\\d{4}$", message = "A data de nascimento deve estar no formato dd/MM/YYYY")
    // https://www.regular-expressions.info/
    private String dataNascimento;
    @Column(unique = true) // nao funciona com @Valid tem que tratar na camada de persistencia
    @NotBlank(message = "O email é obrigatório.")
    private String email;
    @NotBlank(message = "A senha é obrigatória")
    private String senha;
    @OneToMany(mappedBy = "usuario", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnoreProperties("usuario")
    private Set<Build> builds = new HashSet<Build>();

    public Usuario(String nome, String dataNascimento, String email, String senha) {
        this.nome = nome;
        setDataNascimento(dataNascimento);
        this.email = email;
        this.senha = senha;
    }

    public Usuario() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        if (validaData(dataNascimento) == true) {
            this.dataNascimento = dataNascimento;
        } else {
            throw new IllegalArgumentException("Data invalida");
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Set<Build> getBuilds() {
        return builds;
    }

    public void setItens(Set<Build> builds) {
        this.builds = builds;
    }

    public boolean validaData(String data) {
        DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        df.setLenient(false); //
        try {
            df.parse(data); // data válida (exemplo 30 fev - 31 nov)
            return true;
        } catch (ParseException ex) {
            return false;
        }
    }

}